angular.module('coo')
.controller('ArticlesController', function($scope, InternetConnectionService, ArticleService) {
	$scope.internetConnectionService = InternetConnectionService;
	$scope.articles = [];

	ArticleService.getArticles().then(function(articles){
		$scope.articles = articles;
	});

	
})