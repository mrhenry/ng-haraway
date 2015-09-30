import {mod} from './module';

mod.directive('harawayPreview', [function () {
	return {
		restrict: 'E',
		template: `
			<img ng-if="previewURL" ng-src="{{ previewURL }}" width="{{ width }}" height="{{ height }}">
		`,

		scope: {
			file:   '=ngModel',
			width:  '@',
			height: '@',
			style:  '@',
		},

		controller: ['$scope', '$element', function ($scope, $element) {
			let w = 1 * $scope.width;
			let h = 1 * $scope.height;

			$scope.$watch('file', refresh);
			$scope.$watch('file.id', refresh);
			$scope.$watch('file.$info.previewURL', refresh);

			$element.css({
				display: 'block',
				width:   w + 'px',
				height:  h + 'px',
			});

			function refresh() {
				if (!$scope.file) return;

				if (!$scope.file.$info) {
					$scope.file.$info = {};
				}

				if ($scope.file.$info.previewURL) {
					if ($scope.file.$info.previewURL.indexOf('/'+$scope.file.id) < 0) {
						$scope.file.$info.previewURL = null;
					} else {
						$scope.previewURL = $scope.file.$info.previewURL;
						return;
					}
				}

				if ($scope.file.id) {
					if ($scope.style) {
						$scope.file.$info.previewURL = `//c.assets.sh/${$scope.file.id}/${$scope.style}`;
					} else {
						$scope.file.$info.previewURL = `//c.assets.sh/${$scope.file.id}/original`;
					}
					$scope.previewURL = $scope.file.$info.previewURL;
					return;
				}

				if (!$scope.file.$info.requestedThumb) {
					$scope.file.$info.requestedThumb = true;
					$scope.file.$info.readThumbnailData(w, h, function(canvas) {
						$scope.$evalAsync(function(){
							$scope.file.$info.previewURL = canvas.toDataURL();
							$scope.previewURL = $scope.file.$info.previewURL;
						});
					});
					return;
				}

			}
		}]
	};
}]);
