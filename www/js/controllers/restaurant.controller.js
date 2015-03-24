angular.module('diningapp').controller('restaurantController', ['$scope', 'eetNu', '$ionicLoading',
    function($scope, eetNu, $ionicLoading) {

        //open loading dialog
        $ionicLoading.show({
            template: 'Loading...'
        });
        eetNu.getRestaurants(function(data) {
                $scope.restaurants = data;
                if(!$scope.$$phase){
                    $scope.$apply();
                }
                $ionicLoading.hide();
            }
        );
        

        $scope.doRefresh = function() {
            navigator.geolocation.getCurrentPosition(function(data){
                eetNu.getRestaurants(function(data) {
                    $scope.restaurants = data;
                    $scope.$broadcast('scroll.refreshComplete');
                    
                }, 
                {
                    lat : data.coords.latitude,
                    lng : data.coords.longitude
                });
            });
        };
    }
]);