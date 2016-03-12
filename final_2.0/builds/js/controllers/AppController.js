/**
 * Created by Nomad_Mystic on 3/6/2016.
 */
(function() {
    //Angular Functions 'ngAnimate', 'ui.bootstrap'
    var app = angular.module('movieApp', [])
        .directive('onFinishRender', function ($timeout) {
            return {
                restrict: 'A',
                link: function (scope, element, attr) {
                    if (scope.$last === true) {
                        $timeout(function () {
                            scope.$emit('ngRepeatFinished');
                        });
                    }
                }
            }
        }); // end app

// App Controller
    app.controller('AppController', ['$scope', '$http', function($scope, $http) {

        // Filters
        $scope.overviewLimit = 240;


        function overviewLimit() {
            $scope.overviewLimit = 240;
        }

        $http({
            method: 'GET',
            url: 'data/newArrivals.json'
        }).then(function success(newArrivals) {
            $scope.newArrivals = newArrivals.data;

        }, function error(error) {
            console.log(error);
        });

        $http({
           method: 'GET',
            url: 'data/topRated.json'
        }).then(function success(topRated) {
            $scope.topRated = topRated.data;
            //console.log($scope.overview);
            //for (var i=0; i < $scope.topRated[0].results.length; i++) {
            //    if ($scope.topRated[0].results[i].overview.length >= 240) {
            //        var originalText = $scope.topRated[0].results[i].overview;
            //        $scope.topRated[0].results[i].overview = originalText + '...';
            //    }
            //}
        }, function error() {
            console.log(error);
        });

        // For loading jQuery plugin after ngRepeat finishes
        $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
            jQueryFunctions.loadingCarousels();
            jQueryFunctions.toggleToolTip();
            jQueryFunctions.toggleHover();

        });
    }]); // End app.controller

// jQuery Functions
    var jQueryFunctions = {
        loadingCarousels: function() {
            $('#newArrivalsCarousel, #historyCarousel').owlCarousel({
                items : 6, //items above 1000px browser width
                itemsDesktop : [1199,6], //items between 1000px and 901px
                itemsDesktopSmall : [900,4], //betweem 900px and 601px
                itemsTablet: [600,4], //items between 600 and 0
                itemsMobile : [479,3],
                pagination : false,
                rewindNav : true,
                lazyLoad: true,
                //loop: false,
                navigation: true,
                navigationText: [
                    "<i class='fa fa-step-backward'></i>",
                    "<i class='fa fa-step-forward'></i>"
                ],
                scrollPerPage : true,
                slideSpeed : 1000,
                responsiveRefreshRate: 400
            });
        },
        toggleToolTip: function() {
            $('[data-toggle="popover"]').popover({
                trigger: 'hover',
                html: true,
                animation: false
            });
        },
        toggleHover: function() {
            $('.tooltipAnchor').on('mouseover', function (event) {
                //console.log(window);
                //console.log(event);
                //console.log(event.target.parentNode.parentNode.parentNode);

                // adding style to current tooltip item
                var parent = event.target.parentNode.parentNode.parentNode;
                //var rt = ($(window).width() - ($whatever.offset().left + $whatever.outerWidth()));
                var rightElement = window.innerWidth - (parent.offsetLeft + parent.offsetWidth);
                console.log(parent);
                console.log(Number(rightElement));

                if (rightElement >= 15) {
                    parent.dataset.placement = 'right';
                    console.log(this);
                }
                parent.style.position = 'relative';
                parent.style.zIndex = '1000';

            }).mouseleave(function () {
                var owlItem = document.getElementsByClassName('owl-item');
                // removing style from all of the tooltip items
                for (var i = 0; i < owlItem.length; i++) {
                    owlItem[i].style.position = '';
                    owlItem[i].style.zIndex = '';
                }
            });
        }
    }; // End jQueryFunctions
})();




