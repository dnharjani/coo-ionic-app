angular.module('coo')
	.service('ArticleService', function ($q, ApiService, md5) {

	var self = this;
	self.articles = null;

	function getArticles() {
		if(!self.articles) {
			return ApiService.getJSONForFeed('').then(function(articleData){
				_.each(articleData.data.articles, function(article){
					if(!article.id) {
						article.id = md5.createHash(article.original_url);
					}
					article.content = parseArticleContent(article.content);
					article.wordCount = article.content.split(" ").length;
				});
				self.articles = articleData.data.articles;
				return $q.when(articleData.data.articles);
			});
		}
		else {
			return $q.when(self.articles);
		}

	}

	function getArticle(articleId) {
		return getArticles().then(function(articles) {
			var article = _.findWhere(articles, {"id" : articleId});
			return $q.when(article);
		});
	}

	function parseArticleContent(content) {
		return content;
	}

    return {
        getArticles: getArticles,
        getArticle: getArticle
    }
});