angular.module('diningapp').controller('restaurantController', ['$scope', 'eetNu', '$ionicLoading',
    function($scope, eetNu, $ionicLoading) {

        //open loading dialog
        $ionicLoading.show({
            template: 'Loading...'
        });
        eetNu.getRestaurants(function(data) {
            $scope.restaurants = data;
            $ionicLoading.hide();
        }, {
            lat: 51.52793,
            lng: 5.081889
        });

        $scope.doRefresh = function() {
            eetNu.getRestaurants(function(data) {
                $scope.restaurants = data;
                $ionicLoading.hide();
                $scope.apply();
            }, {
                lat: 51.52793,
                lng: 5.081889
            });
        };
    }
]);