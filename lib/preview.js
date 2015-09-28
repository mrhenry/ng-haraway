var module_1 = require('./module');
module_1.mod.directive('harawayPreview', [function () {
        return {
            restrict: 'E',
            template: "\n      <img ng-if=\"previewURL\" ng-src=\"{{ previewURL }}\">\n    ",
            scope: {
                ngModel: '=',
                width: '@',
                height: '@',
            },
            controller: ['$scope', function ($scope) {
                }]
        };
    }]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldmlldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmV2aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVCQUFrQixVQUFVLENBQUMsQ0FBQTtBQUU3QixZQUFHLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDL0IsTUFBTSxDQUFDO1lBQ0wsUUFBUSxFQUFFLEdBQUc7WUFDYixRQUFRLEVBQUUsc0VBRVQ7WUFFRCxLQUFLLEVBQUU7Z0JBQ0wsT0FBTyxFQUFFLEdBQUc7Z0JBQ1osS0FBSyxFQUFJLEdBQUc7Z0JBQ1osTUFBTSxFQUFHLEdBQUc7YUFDYjtZQUVELFVBQVUsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFVLE1BQU07Z0JBR3ZDLENBQUMsQ0FBQztTQUNILENBQUM7SUFDSixDQUFDLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHttb2R9IGZyb20gJy4vbW9kdWxlJztcblxubW9kLmRpcmVjdGl2ZSgnaGFyYXdheVByZXZpZXcnLCBbZnVuY3Rpb24gKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgIDxpbWcgbmctaWY9XFxcInByZXZpZXdVUkxcXFwiIG5nLXNyYz1cXFwie3sgcHJldmlld1VSTCB9fVxcXCI+XG4gICAgYCxcblxuICAgIHNjb3BlOiB7XG4gICAgICBuZ01vZGVsOiAnPScsXG4gICAgICB3aWR0aDogICAnQCcsXG4gICAgICBoZWlnaHQ6ICAnQCcsXG4gICAgfSxcblxuICAgIGNvbnRyb2xsZXI6IFsnJHNjb3BlJywgZnVuY3Rpb24gKCRzY29wZSkge1xuICAgICAgLy8gaXMgdXBsb2FkZWQ/XG4gICAgICAvLyBlbHNlIGxvYWQgb3JpZ2luYWw/IG9yIHRodW1iXG4gICAgfV1cbiAgfTtcbn1dKTtcbiJdfQ==