angular.module('diningapp').controller('restaurantDetailsController', ['$scope', '$stateParams', 'eetNu', '$ionicLoading',
    function($scope, $stateParams, eetNu, $ionicLoading) {

        $ionicLoading.show({
            template: 'Loading details...'
        });

        var data = JSON.parse(window.localStorage['restaurants']);
        $scope.restaurant = data[$stateParams.id];
        console.log($scope.restaurant);

        $ionicLoading.hide();
    }
]);