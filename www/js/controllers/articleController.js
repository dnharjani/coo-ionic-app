angular.module('coo')
.controller('ArticleController', function($scope, $stateParams, ArticleService) {
	ArticleService.getArticle($stateParams.articleId).then(function(article){
		$scope.article = article;
	})
})