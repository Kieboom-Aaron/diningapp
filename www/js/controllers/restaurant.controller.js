angular.module('diningapp').controller('restaurantController', ['$scope', 'eetNu', '$ionicLoading',
    function($scope, eetNu, $ionicLoading) {

        //open loading dialog
        $ionicLoading.show({
            template: 'Loading...'
        });
        requestRestaurants();
        $ionicLoading.hide();

        $scope.doRefresh = function() {
            setTimeout(function() {
                requestRestaurants();
                $scope.$broadcast('scroll.refreshComplete');
                $scope.$apply();
            }, 600);
        };

        function requestRestaurants() {
            eetNu.getRestaurants(function(data) {
                $scope.restaurants = data;
            }, {
                lat: 51.52793,
                lng: 5.081889
            });
        }
    }
]);