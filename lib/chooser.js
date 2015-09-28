var module_1 = require('./module');
module_1.mod.directive('harawayChooser', [function () {
        var Haraway = window['Haraway'];
        return {
            restrict: 'A',
            template: '',
            scope: {
                files: '=ngModel',
                multiple: '@',
                accept: '@',
                profile: '@',
            },
            controller: ['$scope', '$element', function ($scope, $element) {
                    $element.on('click', handleClick);
                    $scope.$on('$destroy', function () {
                        $element.off('click', handleClick);
                    });
                    function handleClick(e) {
                        e.preventDefault();
                        var accept = $scope.accept.split(' ');
                        var multiple = $scope.multiple != 'false';
                        var profile = $scope.profile;
                        if (multiple) {
                            Haraway.choose(accept, multiple, profile, handleFiles);
                        }
                        else {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hvb3Nlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jaG9vc2VyLnRzIl0sIm5hbWVzIjpbImhhbmRsZUNsaWNrIiwiaGFuZGxlRmlsZSIsImhhbmRsZUZpbGVzIl0sIm1hcHBpbmdzIjoiQUFBQSx1QkFBa0IsVUFBVSxDQUFDLENBQUE7QUFFN0IsWUFBRyxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQy9CLElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVoQyxNQUFNLENBQUM7WUFDTCxRQUFRLEVBQUUsR0FBRztZQUNiLFFBQVEsRUFBRSxFQUFFO1lBRVosS0FBSyxFQUFFO2dCQUNMLEtBQUssRUFBSyxVQUFVO2dCQUNwQixRQUFRLEVBQUUsR0FBRztnQkFDYixNQUFNLEVBQUksR0FBRztnQkFDYixPQUFPLEVBQUcsR0FBRzthQUNkO1lBRUQsVUFBVSxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxVQUFVLE1BQU0sRUFBRSxRQUFpQjtvQkFDcEUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7b0JBQ2xDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFO3dCQUNyQixRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztvQkFDckMsQ0FBQyxDQUFDLENBQUM7b0JBRUgscUJBQXFCLENBQVE7d0JBQzNCQSxDQUFDQSxDQUFDQSxjQUFjQSxFQUFFQSxDQUFDQTt3QkFFbkJBLElBQUlBLE1BQU1BLEdBQUtBLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO3dCQUN4Q0EsSUFBSUEsUUFBUUEsR0FBR0EsTUFBTUEsQ0FBQ0EsUUFBUUEsSUFBSUEsT0FBT0EsQ0FBQ0E7d0JBQzFDQSxJQUFJQSxPQUFPQSxHQUFJQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQTt3QkFFOUJBLEVBQUVBLENBQUNBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBOzRCQUNiQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxNQUFNQSxFQUFFQSxRQUFRQSxFQUFFQSxPQUFPQSxFQUFFQSxXQUFXQSxDQUFDQSxDQUFDQTt3QkFDekRBLENBQUNBO3dCQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTs0QkFDTkEsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsTUFBTUEsRUFBRUEsUUFBUUEsRUFBRUEsT0FBT0EsRUFBRUEsVUFBVUEsQ0FBQ0EsQ0FBQ0E7d0JBQ3hEQSxDQUFDQTtvQkFDSEEsQ0FBQ0E7b0JBRUQsb0JBQW9CLElBQUk7d0JBQ3RCQyxNQUFNQSxDQUFDQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQTt3QkFDcEJBLE1BQU1BLENBQUNBLE9BQU9BLEVBQUVBLENBQUNBO3dCQUNqQkEsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7b0JBQ2ZBLENBQUNBO29CQUVELHFCQUFxQixJQUFJO3dCQUN2QkMsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBQ2xCQSxNQUFNQSxDQUFDQSxLQUFLQSxHQUFHQSxFQUFFQSxDQUFDQTt3QkFDcEJBLENBQUNBO3dCQUNEQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTt3QkFDeEJBLE1BQU1BLENBQUNBLE9BQU9BLEVBQUVBLENBQUNBO3dCQUNqQkEsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7b0JBQ2ZBLENBQUNBO2dCQUNILENBQUMsQ0FBQztTQUNILENBQUM7SUFDSixDQUFDLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHttb2R9IGZyb20gJy4vbW9kdWxlJztcblxubW9kLmRpcmVjdGl2ZSgnaGFyYXdheUNob29zZXInLCBbZnVuY3Rpb24gKCkge1xuICBsZXQgSGFyYXdheSA9IHdpbmRvd1snSGFyYXdheSddO1xuXG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBJyxcbiAgICB0ZW1wbGF0ZTogJycsXG5cbiAgICBzY29wZToge1xuICAgICAgZmlsZXM6ICAgICc9bmdNb2RlbCcsXG4gICAgICBtdWx0aXBsZTogJ0AnLFxuICAgICAgYWNjZXB0OiAgICdAJyxcbiAgICAgIHByb2ZpbGU6ICAnQCcsXG4gICAgfSxcblxuICAgIGNvbnRyb2xsZXI6IFsnJHNjb3BlJywgJyRlbGVtZW50JywgZnVuY3Rpb24gKCRzY29wZSwgJGVsZW1lbnQgOiBKUXVlcnkpIHtcbiAgICAgICRlbGVtZW50Lm9uKCdjbGljaycsIGhhbmRsZUNsaWNrKTtcbiAgICAgICRzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICRlbGVtZW50Lm9mZignY2xpY2snLCBoYW5kbGVDbGljayk7XG4gICAgICB9KTtcblxuICAgICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soZTogRXZlbnQpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGxldCBhY2NlcHQgICA9ICRzY29wZS5hY2NlcHQuc3BsaXQoJyAnKTtcbiAgICAgICAgbGV0IG11bHRpcGxlID0gJHNjb3BlLm11bHRpcGxlICE9ICdmYWxzZSc7XG4gICAgICAgIGxldCBwcm9maWxlICA9ICRzY29wZS5wcm9maWxlO1xuXG4gICAgICAgIGlmIChtdWx0aXBsZSkge1xuICAgICAgICAgIEhhcmF3YXkuY2hvb3NlKGFjY2VwdCwgbXVsdGlwbGUsIHByb2ZpbGUsIGhhbmRsZUZpbGVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBIYXJhd2F5LmNob29zZShhY2NlcHQsIG11bHRpcGxlLCBwcm9maWxlLCBoYW5kbGVGaWxlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBoYW5kbGVGaWxlKGZpbGUpIHtcbiAgICAgICAgJHNjb3BlLmZpbGVzID0gZmlsZTtcbiAgICAgICAgJHNjb3BlLiRkaWdlc3QoKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBoYW5kbGVGaWxlcyhmaWxlKSB7XG4gICAgICAgIGlmICghJHNjb3BlLmZpbGVzKSB7XG4gICAgICAgICAgJHNjb3BlLmZpbGVzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgJHNjb3BlLmZpbGVzLnB1c2goZmlsZSk7XG4gICAgICAgICRzY29wZS4kZGlnZXN0KCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XVxuICB9O1xufV0pO1xuIl19