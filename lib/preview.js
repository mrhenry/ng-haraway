var module_1 = require('./module');
module_1.mod.directive('harawayPreview', [function () {
        return {
            restrict: 'E',
            template: "\n\t\t\t<img ng-if=\"previewURL\" ng-src=\"{{ previewURL }}\" width=\"{{ width }}\" height=\"{{ height }}\">\n\t\t",
            scope: {
                file: '=ngModel',
                width: '@',
                height: '@',
                style: '@',
            },
            controller: ['$scope', '$element', function ($scope, $element) {
                    var w = 1 * $scope.width;
                    var h = 1 * $scope.height;
                    $scope.$watch('file', refresh);
                    $scope.$watch('file.id', refresh);
                    $scope.$watch('file.$info.previewURL', refresh);
                    $element.css({
                        display: 'block',
                        width: w + 'px',
                        height: h + 'px',
                    });
                    function refresh() {
                        if (!$scope.file)
                            return;
                        if (!$scope.file.$info) {
                            $scope.file.$info = {};
                        }
                        if ($scope.file.$info.previewURL) {
                            if ($scope.file.$info.previewURL.indexOf('/' + $scope.file.id) < 0) {
                                $scope.file.$info.previewURL = null;
                            }
                            else {
                                $scope.previewURL = $scope.file.$info.previewURL;
                                return;
                            }
                        }
                        if ($scope.file.id) {
                            if ($scope.style) {
                                $scope.file.$info.previewURL = "//c.assets.sh/" + $scope.file.id + "/" + $scope.style;
                            }
                            else {
                                $scope.file.$info.previewURL = "//c.assets.sh/" + $scope.file.id + "/original";
                            }
                            $scope.previewURL = $scope.file.$info.previewURL;
                            return;
                        }
                        if (!$scope.file.$info.requestedThumb) {
                            $scope.file.$info.requestedThumb = true;
                            $scope.file.$info.readThumbnailData(w, h, function (canvas) {
                                $scope.$evalAsync(function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldmlldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmV2aWV3LnRzIl0sIm5hbWVzIjpbInJlZnJlc2giXSwibWFwcGluZ3MiOiJBQUFBLHVCQUFrQixVQUFVLENBQUMsQ0FBQTtBQUU3QixZQUFHLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDaEMsTUFBTSxDQUFDO1lBQ04sUUFBUSxFQUFFLEdBQUc7WUFDYixRQUFRLEVBQUUsb0hBRVQ7WUFFRCxLQUFLLEVBQUU7Z0JBQ04sSUFBSSxFQUFJLFVBQVU7Z0JBQ2xCLEtBQUssRUFBRyxHQUFHO2dCQUNYLE1BQU0sRUFBRSxHQUFHO2dCQUNYLEtBQUssRUFBRyxHQUFHO2FBQ1g7WUFFRCxVQUFVLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLFVBQVUsTUFBTSxFQUFFLFFBQVE7b0JBQzVELElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO29CQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztvQkFFMUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBQy9CLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUNsQyxNQUFNLENBQUMsTUFBTSxDQUFDLHVCQUF1QixFQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUVoRCxRQUFRLENBQUMsR0FBRyxDQUFDO3dCQUNaLE9BQU8sRUFBRSxPQUFPO3dCQUNoQixLQUFLLEVBQUksQ0FBQyxHQUFHLElBQUk7d0JBQ2pCLE1BQU0sRUFBRyxDQUFDLEdBQUcsSUFBSTtxQkFDakIsQ0FBQyxDQUFDO29CQUVIO3dCQUNDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQTs0QkFBQ0EsTUFBTUEsQ0FBQ0E7d0JBRXpCQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTs0QkFDeEJBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLEVBQUVBLENBQUNBO3dCQUN4QkEsQ0FBQ0E7d0JBRURBLEVBQUVBLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBOzRCQUNsQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsR0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0NBQ2xFQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxVQUFVQSxHQUFHQSxJQUFJQSxDQUFDQTs0QkFDckNBLENBQUNBOzRCQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtnQ0FDUEEsTUFBTUEsQ0FBQ0EsVUFBVUEsR0FBR0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsVUFBVUEsQ0FBQ0E7Z0NBQ2pEQSxNQUFNQSxDQUFDQTs0QkFDUkEsQ0FBQ0E7d0JBQ0ZBLENBQUNBO3dCQUVEQSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTs0QkFDcEJBLEVBQUVBLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO2dDQUNsQkEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsVUFBVUEsR0FBR0EsbUJBQWlCQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxTQUFJQSxNQUFNQSxDQUFDQSxLQUFPQSxDQUFDQTs0QkFDbEZBLENBQUNBOzRCQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtnQ0FDUEEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsVUFBVUEsR0FBR0EsbUJBQWlCQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxjQUFXQSxDQUFDQTs0QkFDM0VBLENBQUNBOzRCQUNEQSxNQUFNQSxDQUFDQSxVQUFVQSxHQUFHQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxVQUFVQSxDQUFDQTs0QkFDakRBLE1BQU1BLENBQUNBO3dCQUNSQSxDQUFDQTt3QkFFREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsY0FBY0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBQ3ZDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxjQUFjQSxHQUFHQSxJQUFJQSxDQUFDQTs0QkFDeENBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsVUFBU0EsTUFBTUE7Z0NBQ3hELE1BQU0sQ0FBQyxVQUFVLENBQUM7b0NBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7b0NBQ2xELE1BQU0sQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO2dDQUNsRCxDQUFDLENBQUMsQ0FBQzs0QkFDSixDQUFDLENBQUNBLENBQUNBOzRCQUNIQSxNQUFNQSxDQUFDQTt3QkFDUkEsQ0FBQ0E7b0JBRUZBLENBQUNBO2dCQUNGLENBQUMsQ0FBQztTQUNGLENBQUM7SUFDSCxDQUFDLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHttb2R9IGZyb20gJy4vbW9kdWxlJztcblxubW9kLmRpcmVjdGl2ZSgnaGFyYXdheVByZXZpZXcnLCBbZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4ge1xuXHRcdHJlc3RyaWN0OiAnRScsXG5cdFx0dGVtcGxhdGU6IGBcblx0XHRcdDxpbWcgbmctaWY9XCJwcmV2aWV3VVJMXCIgbmctc3JjPVwie3sgcHJldmlld1VSTCB9fVwiIHdpZHRoPVwie3sgd2lkdGggfX1cIiBoZWlnaHQ9XCJ7eyBoZWlnaHQgfX1cIj5cblx0XHRgLFxuXG5cdFx0c2NvcGU6IHtcblx0XHRcdGZpbGU6ICAgJz1uZ01vZGVsJyxcblx0XHRcdHdpZHRoOiAgJ0AnLFxuXHRcdFx0aGVpZ2h0OiAnQCcsXG5cdFx0XHRzdHlsZTogICdAJyxcblx0XHR9LFxuXG5cdFx0Y29udHJvbGxlcjogWyckc2NvcGUnLCAnJGVsZW1lbnQnLCBmdW5jdGlvbiAoJHNjb3BlLCAkZWxlbWVudCkge1xuXHRcdFx0bGV0IHcgPSAxICogJHNjb3BlLndpZHRoO1xuXHRcdFx0bGV0IGggPSAxICogJHNjb3BlLmhlaWdodDtcblxuXHRcdFx0JHNjb3BlLiR3YXRjaCgnZmlsZScsIHJlZnJlc2gpO1xuXHRcdFx0JHNjb3BlLiR3YXRjaCgnZmlsZS5pZCcsIHJlZnJlc2gpO1xuXHRcdFx0JHNjb3BlLiR3YXRjaCgnZmlsZS4kaW5mby5wcmV2aWV3VVJMJywgcmVmcmVzaCk7XG5cblx0XHRcdCRlbGVtZW50LmNzcyh7XG5cdFx0XHRcdGRpc3BsYXk6ICdibG9jaycsXG5cdFx0XHRcdHdpZHRoOiAgIHcgKyAncHgnLFxuXHRcdFx0XHRoZWlnaHQ6ICBoICsgJ3B4Jyxcblx0XHRcdH0pO1xuXG5cdFx0XHRmdW5jdGlvbiByZWZyZXNoKCkge1xuXHRcdFx0XHRpZiAoISRzY29wZS5maWxlKSByZXR1cm47XG5cblx0XHRcdFx0aWYgKCEkc2NvcGUuZmlsZS4kaW5mbykge1xuXHRcdFx0XHRcdCRzY29wZS5maWxlLiRpbmZvID0ge307XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoJHNjb3BlLmZpbGUuJGluZm8ucHJldmlld1VSTCkge1xuXHRcdFx0XHRcdGlmICgkc2NvcGUuZmlsZS4kaW5mby5wcmV2aWV3VVJMLmluZGV4T2YoJy8nKyRzY29wZS5maWxlLmlkKSA8IDApIHtcblx0XHRcdFx0XHRcdCRzY29wZS5maWxlLiRpbmZvLnByZXZpZXdVUkwgPSBudWxsO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQkc2NvcGUucHJldmlld1VSTCA9ICRzY29wZS5maWxlLiRpbmZvLnByZXZpZXdVUkw7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCRzY29wZS5maWxlLmlkKSB7XG5cdFx0XHRcdFx0aWYgKCRzY29wZS5zdHlsZSkge1xuXHRcdFx0XHRcdFx0JHNjb3BlLmZpbGUuJGluZm8ucHJldmlld1VSTCA9IGAvL2MuYXNzZXRzLnNoLyR7JHNjb3BlLmZpbGUuaWR9LyR7JHNjb3BlLnN0eWxlfWA7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdCRzY29wZS5maWxlLiRpbmZvLnByZXZpZXdVUkwgPSBgLy9jLmFzc2V0cy5zaC8keyRzY29wZS5maWxlLmlkfS9vcmlnaW5hbGA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCRzY29wZS5wcmV2aWV3VVJMID0gJHNjb3BlLmZpbGUuJGluZm8ucHJldmlld1VSTDtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoISRzY29wZS5maWxlLiRpbmZvLnJlcXVlc3RlZFRodW1iKSB7XG5cdFx0XHRcdFx0JHNjb3BlLmZpbGUuJGluZm8ucmVxdWVzdGVkVGh1bWIgPSB0cnVlO1xuXHRcdFx0XHRcdCRzY29wZS5maWxlLiRpbmZvLnJlYWRUaHVtYm5haWxEYXRhKHcsIGgsIGZ1bmN0aW9uKGNhbnZhcykge1xuXHRcdFx0XHRcdFx0JHNjb3BlLiRldmFsQXN5bmMoZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdFx0JHNjb3BlLmZpbGUuJGluZm8ucHJldmlld1VSTCA9IGNhbnZhcy50b0RhdGFVUkwoKTtcblx0XHRcdFx0XHRcdFx0JHNjb3BlLnByZXZpZXdVUkwgPSAkc2NvcGUuZmlsZS4kaW5mby5wcmV2aWV3VVJMO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdH1cblx0XHR9XVxuXHR9O1xufV0pO1xuIl19