angular.module('diningapp').controller('restaurantController', ['$scope', 'eetNu', '$ionicLoading', '$cordovaGeolocation', '$stateParams',
    function($scope, eetNu, $ionicLoading, $cordovaGeolocation, $stateParams) {

        $ionicLoading.show({
            template: '<ion-spinner></ion-spinner>'
        });
        if($stateParams.lat && $stateParams.lng){
            eetNu.getRestaurants(function(data) {
                $scope.restaurants = data;
                if(!$scope.$$phase){
                    $scope.$apply();
                }
                $ionicLoading.hide();
            }, {
                lat: $stateParams.lat,
                lng: $stateParams.lng
            });
        }else{
            eetNu.getRestaurants(function(data) {
                $scope.restaurants = data;
                if (!$scope.$$phase) {
                    $scope.$apply();
                }
                $ionicLoading.hide();
            });
        }

        


        $scope.doRefresh = function() {
            $cordovaGeolocation
                .getCurrentPosition({
                    timeout:15000,
                    enableHighAccuracy:true
                })
                .then(function (data) {
                    if(!data.coords){
                        eetNu.getRestaurants(function(data) {
                            $scope.restaurants = data;
                            $scope.$broadcast('scroll.refreshComplete');
                        });
                    }else{
                        eetNu.getRestaurants(function(data) {
                            $scope.restaurants = data;
                            $scope.$broadcast('scroll.refreshComplete');

                        }, {
                            lat: data.coords.latitude,
                            lng: data.coords.longitude
                        });
                    }
            // navigator.geolocation.getCurrentPosition(function(data){
                
            });
        };
    }
]);