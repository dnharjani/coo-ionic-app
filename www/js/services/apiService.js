angular.module('coo')
    .service('ApiService', function (ApplicationConfigService) {
    	this.apiUrl = ApplicationConfigService.get('apiUrl');

       	return {};
    });