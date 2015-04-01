angular.module('diningapp').controller('searchController', ['$scope', 'eetNu', '$ionicLoading',
    function($scope, eetNu, $ionicLoading) {
        $scope.locations = [];
        $scope.search = {};
        $ionicLoading.show({
            template: 'Loading...'
        });
        eetNu.getLocations(function(locs) {
            $scope.locations = locs;
            $ionicLoading.hide();
            if (!$scope.$$phase) {
                $scope.$apply();
            }
        });
    }
]);