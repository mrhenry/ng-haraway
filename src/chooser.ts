import {mod} from './module';

mod.directive('harawayChooser', [function () {
  let Haraway = window['Haraway'];

  return {
    restrict: 'A',
    template: '',

    scope: {
      files:    '=ngModel',
      multiple: '@',
      accept:   '@',
      profile:  '@',
    },

    controller: ['$scope', '$element', function ($scope, $element : JQuery) {
      $element.on('click', handleClick);
      $scope.$on('$destroy', function() {
        $element.off('click', handleClick);
      });

      function handleClick(e: Event) {
        e.preventDefault();

        let accept   = $scope.accept.split(' ');
        let multiple = $scope.multiple != 'false';
        let profile  = $scope.profile;

        if (multiple) {
          Haraway.choose(accept, multiple, profile, handleFiles);
        } else {
          Haraway.choose(accept, multiple, profile, handleFile);
        }
      }

      function handleFile(file) {
        $scope.files = file;
        $scope.$digest();
        return false;
      }

      function handleFiles(file) {
        if (!$scope.files) {
          $scope.files = [];
        }
        $scope.files.push(file);
        $scope.$digest();
        return false;
      }
    }]
  };
}]);
