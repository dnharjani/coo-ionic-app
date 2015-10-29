angular.module('coo')
    .service('ApiService', function (ApplicationConfigService, $http) {
    	var apiUrl = ApplicationConfigService.get('apiUrl');

    	function getJSONForFeed(feed) {
    		return $http.get('/json/wwwredditcomrworldnews.json');
    	}

       	return {
       		getJSONForFeed: getJSONForFeed
       	};
    });