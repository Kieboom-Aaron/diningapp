angular.module('diningapp').controller('favorietenController', ['$scope', 'eetNu', '$ionicLoading', '$stateParams',
    function($scope, eetNu, $ionicLoading, $stateParams) {

        $ionicLoading.show({
            template: '<ion-spinner></ion-spinner>'
        });


        eetNu.getfavorites(function(favorites) {
            $scope.favorites = favorites;

            $ionicLoading.hide();
        });
    }
]);