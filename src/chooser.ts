import {mod} from './module';

mod.directive('harawayChooser', [function () {
	return {
		restrict: 'A',

		scope: {
			modelPath: '@ngModel',
			multiple: '@',
			accept: '@',
			profile: '@',
			autoUpload: '@',
		},

		controller: ['$scope', '$element', function ($scope, $element: JQuery) {
			$scope.multiple = $element.attr('multiple');
			$scope.autoUpload = $element.attr('auto-upload');
			let Haraway = window['Haraway'];
			let modelPath = $scope.modelPath;
			let accept = ($scope.accept || '').split(' ');
			let multiple = ($scope.multiple === 'true' || $scope.multiple === 'multiple' || $scope.multiple === '');
			let autoUpload = ($scope.autoUpload === 'true' || $scope.autoUpload === 'auto-upload' || $scope.autoUpload === '');
			let profile = $scope.profile;

			if (multiple) {
				$scope.$parent.$eval(modelPath+' = '+modelPath+ ' || [];');
				$scope.files = $scope.$parent.$eval(modelPath);
			} else {
				$scope.files = [];
				let file = $scope.$parent.$eval(modelPath);
				if (file) $scope.files.push(file);
			}

			$scope.$watch('files')

			$element.on('click', handleClick);
			$scope.$on('$destroy', function () {
				$element.off('click', handleClick);
			});

			function handleClick(e: Event) {
				let Haraway = window['Haraway'];

				e.preventDefault();

				if (multiple) {
					Haraway.choose(accept, multiple, profile, handleFiles);
				} else {
					Haraway.choose(accept, multiple, profile, handleFile);
				}
			}

			function handleFile(file: HarawayFile) {
				let wrapper = wrapFile($scope.$parent, file);
				if (autoUpload) wrapper.$upload();
				$scope.files = [wrapper];
				$scope.$parent.$evalAsync($scope.modelPath+' = $harawayFile', {$harawayFile: wrapper});
				return false;
			}

			function handleFiles(file: HarawayFile) {
				let wrapper = wrapFile($scope.$parent, file);
				if (autoUpload) wrapper.$upload();
				$scope.$evalAsync(function(){
					$scope.files.push(wrapper);
				});
				return false;
			}
		}]
	};
}]);

interface File {
	id:         string;
	_destroy:   boolean;
	attributes: Object;
	$info: HarawayFile;
	$upload();
}

interface HarawayFile {
	name: string;
	metadata: HarawayMetadataFile;
	state: string;
	error: any;
	on(event:string, func:Function) : void;
	upload();
}

interface HarawayMetadataFile {
	id: string;
}

function wrapFile($scope, file: HarawayFile): File {
	let wrapper : File = {
		id: null,
		_destroy: false,
		attributes: {
			file_name: file.name,
		},
		$info: file,
		$upload: file.upload.bind(file),
	};

	file.state = 'pending';

	file.on('queued', function() {
		file.state = 'queued';
		$scope.$digest();
	});

	file.on('busy', function() {
		$scope.$digest();
	});

	file.on('idle', function() {
		$scope.$digest();
	});

	file.on('start', function() {
		file.state = 'uploading';
		$scope.$digest();
	});

	file.on('progress', function() {
		$scope.$digest();
	});

	file.on('err', function(err) {
		file.state = 'failed';
		file.error = err;
		$scope.$digest();
	});

	file.on('done:uploading', function() {
		file.state = 'processing';
		$scope.$digest();
	});

	file.on('done:processing', function() {
		$scope.$digest();
	});

	file.on('done', function() {
		file.state = 'uploaded';
		wrapper.id = file.metadata.id;
		$scope.$digest();
	});

	return wrapper;
}
