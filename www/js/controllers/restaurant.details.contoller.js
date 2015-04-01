angular.module('diningapp').controller('restaurantDetailsController', ['$scope', '$stateParams', 'eetNu', '$ionicLoading',
    function($scope, $stateParams, eetNu, $ionicLoading) {
    	console.log('controller');
        $ionicLoading.show({
            template: 'Loading details...'
        });

        var data = JSON.parse(window.localStorage['restaurants']);
        function update(id){
        	id = id || $stateParams.id;
        	console.log(id);
        	$scope.restaurantdetails = data[id];
        	if(!$scope.$$phase){
        		$scope.$apply();
        	}
        }
        
        update();
        $scope.updateDetails = update;
        $ionicLoading.hide();
    }
]);