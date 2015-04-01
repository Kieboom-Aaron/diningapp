// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('diningapp', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.LightContent();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
    .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('app.restaurants', {
        url: '/restaurants',
        views: {
            'tab-dashboard': {
                templateUrl: 'templates/restaurants.html',
                controller: 'restaurantController'
            }
        }
    })
        .state('app.restaurantDetails', {
            url: '/restaurants/:id',
            views: {
                'tab-dashboard': {
                    templateUrl: 'templates/restaurantDetails.html',
                    controller: 'restaurantDetailsController'
                }
            }
        })
        .state('app.restaurantSearch', {
            url: '/restaurants/:lat/:lng',
            views: {
                'tab-dashboard': {
                    templateUrl: 'templates/restaurants.html',
                    controller: 'restaurantController'
                }
            }
        })
        .state('app.search', {
            url: '/search',
            views: {
                'tab-search': {
                    templateUrl: 'templates/search.html',
                    controller: 'searchController'
                }
            }
        })

    .state('app.favorieten', {
        url: '/favorieten',
        views: {
            'tab-favorites': {
                templateUrl: 'templates/favorites.html',
                controller: 'favorietenController'
            }
        }
    })

    .state('app.favoritesDetails', {
        url: '/favorieten/:id',
        views: {
            'tab-favorites': {
                templateUrl: 'templates/restaurantDetails.html',
                controller: 'favorietenDetailsController'
            }
        }
    })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/restaurants');

});