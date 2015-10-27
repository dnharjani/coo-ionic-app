angular.module('coo')
.controller('ArticlesController', function($scope, InternetConnectionService, ApiService) {
	$scope.internetConnectionService = InternetConnectionService;

	ApiService.getJSONForFeed('').then(function(articleData){
		$scope.articles = articleData.data.articles;
	});

	
})