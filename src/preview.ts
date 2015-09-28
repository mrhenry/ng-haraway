import {mod} from './module';

mod.directive('harawayPreview', [function () {
  return {
    restrict: 'E',
    template: `
      <img ng-if=\"previewURL\" ng-src=\"{{ previewURL }}\">
    `,

    scope: {
      ngModel: '=',
      width:   '@',
      height:  '@',
    },

    controller: ['$scope', function ($scope) {
      // is uploaded?
      // else load original? or thumb
    }]
  };
}]);
