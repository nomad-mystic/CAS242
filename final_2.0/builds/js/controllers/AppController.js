/**
 * Created by Nomad_Mystic on 3/6/2016.
 */
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

    $http.get('data/newArrivals.json')
        .success(function(newArrivals) {
            $scope.newArrivals = newArrivals;
        })
        .error(function(error) {
            console.log(error);
        });
    $http.get('data/topRated.json')
        .success(function(topRated) {
            $scope.topRated = topRated;
        })
        .error(function(error) {
            console.log(error);
        });

    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
        jQueryFunctions.loadingCarousels();
    });

    // for the tooltips
    $scope.dynamicPopover = {
        content: 'Hello, World!',
        templateUrl: 'myPopoverTemplate.html',
        title: 'Title'
    };
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
            rewindNav : false,
            lazyLoad: true,
            //loop: false,
            navigation: true,
            navigationText: [
                "<i class='fa fa-chevron-left'></i>",
                "<i class='fa fa-chevron-right'></i>"
            ],
            scrollPerPage : true,
            slideSpeed : 1000,
            responsiveRefreshRate: 400
        });
    }
}; // End jQueryFunctions



