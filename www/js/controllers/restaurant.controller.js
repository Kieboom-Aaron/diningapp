angular.module('diningapp').controller('restaurantController', ['$scope', 'eetNu', '$ionicLoading',
    function($scope, eetNu, $ionicLoading) {

        //open loading dialog
        $ionicLoading.show({
            template: 'Loading...'
        });
        navigator.geolocation.getCurrentPosition(function(data){
            console.log(data);
            eetNu.getRestaurants(function(data) {
                $scope.restaurants = data;
                $ionicLoading.hide();
            }, 
            {
                lat : data.coords.latitude,
                lng : data.coords.longitude
            });
        })
        

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