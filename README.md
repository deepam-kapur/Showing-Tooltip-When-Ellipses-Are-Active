# Showing Tooltip When Ellipses Are Active in AngularJS
Showing tooltip only when ellipses are active dynamically in AngularJS. Guide to directly include the directive code into your project or you can clone this project to test the feature and customize according to your needs.

## Clone the repository:
	git clone https://github.com/deepam-kapur/Showing-Tooltip-When-Ellipses-Are-Active.git

The completed solution is in the 'master' branch.  To see it in action deploy the code to your server of choice and view index.html.

## Getting Started
So, in the js folder the file named **show-tooltip-on-ellipsis.js** includes a directive by name **showTooltipOnEllipses**. You have to append this directive into your code or add the file into your project. Directive code looks like:

```AngularJS
angular.module("Your-App-Name")
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
```

To use the directive you just have to include the directive onto you ellipses element like:

```HTML
<div class="ellipses-css" show-tooltip-on-ellipses>
    <!--Your Text-->
</div>
```
By default the directive will show the inner text of the element in the if tooltip but in case  you want your tooltip text different from the inside text you can easily get it like:

```HTML
<div class="ellipses-css" show-tooltip-on-ellipses="Your Different Text">
    <!--Your Text-->
</div>
```

where ellipses-css looks like this:
```CSS
.ellipses-css {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}   
```

## Try Feature Online:

Use CodePen to try this feature now - 
[https://codepen.io/deepam-kapur/pen/NWppjgZ](https://codepen.io/deepam-kapur/pen/NWppjgZ)
