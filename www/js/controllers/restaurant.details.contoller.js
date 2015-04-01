angular.module('diningapp').controller('restaurantDetailsController', ['$scope', '$stateParams', 'eetNu', '$ionicLoading',
    function($scope, $stateParams, eetNu, $ionicLoading) {
        console.log('controller');
        $ionicLoading.show({
            template: 'Loading details...'
        });

        var data = JSON.parse(window.localStorage['restaurants']);

        function update(id) {
            id = id || $stateParams.id;
            $scope.restaurantdetails = data[id];
            if (!$scope.restaurantdetails.favorite) {
                $scope.restaurantdetails.favorite = false;
            }
            if (!$scope.$$phase) {
                $scope.$apply();
            }
        }

        function updateFav(id) {
            id = id || $stateParams.id;

            console.log(id);

            eetNu.setRestaurantAsFavorite(id);
            $scope.restaurantdetails.favorite = true;

            if (!$scope.$$phase) {
                $scope.$apply();
            }
        }

        update();
        $scope.updateFavorites = updateFav;
        $scope.updateDetails = update;
        $ionicLoading.hide();
    }
]);