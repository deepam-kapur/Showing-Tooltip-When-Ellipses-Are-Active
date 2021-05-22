angular.module('app', []); //ignore this line while appending the directive in your code.

angular.module("app")
    .directive("showTooltipOnEllipses", [function () {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                var dk = element[0];
                scope.$watch(function () {
                    return dk.scrollWidth;
                }, function () {
                    var dk = element[0];
                    if (dk.offsetWidth < dk.scrollWidth) {
                        //Code here in case of ellipses are visible.
                        if (attrs.showTooltipOnEllipses === undefined || attrs.showTooltipOnEllipses === null || attrs.showTooltipOnEllipses === "") {
                            //When no text is given in the attribute
                            element.attr('title', dk.innerText);
                        }
                        else {
                            //When text is given in the attribute
                            element.attr('title', attrs.showTooltipOnEllipses);
                        }
                    } else {
                        //Code here in case of ellipses are not visible.
                        element.removeAttr('title');
                    }
                });
            }
        };
    }])
