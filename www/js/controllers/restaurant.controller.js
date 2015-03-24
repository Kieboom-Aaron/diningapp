angular.module('diningapp').controller('restaurantController', ['$scope', 'eetNu', '$ionicLoading', '$cordovaGeolocation',
    function($scope, eetNu, $ionicLoading, $cordovaGeolocation) {

        //open loading dialog
        $ionicLoading.show({
            template: 'Loading...'
        });
        eetNu.getRestaurants(function(data) {
            $scope.restaurants = data;
            if (!$scope.$$phase) {
                $scope.$apply();
            }
            $ionicLoading.hide();
        });


        $scope.doRefresh = function() {
             $cordovaGeolocation
                .getCurrentPosition()
                .then(function (data) {
            //navigator.geolocation.getCurrentPosition(function(data){
                eetNu.getRestaurants(function(data) {
                    $scope.restaurants = data;
                    $scope.$broadcast('scroll.refreshComplete');

                }, {
                    lat: data.coords.latitude,
                    lng: data.coords.longitude
                });
            });
        };
    }
]);