angular.module('diningapp').controller('restaurantController', ['$scope', 'eetNu','$ionicLoading', function($scope, eetNu, $ionicLoading){
	 



	//open loading dialog
	$ionicLoading.show({
      template: 'Loading...'
    });

	 eetNu.getRestaurants(function(data){
		$scope.restaurants = data;
		console.log(data);
		$ionicLoading.hide();
	}, 52.0087, 7.97944);
}]);