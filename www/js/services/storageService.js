angular.module('coo')
    .service('StorageService', function (LocalStorageService, FileStorageService) {
    	function store(key, value) {
    	
    	}

    	function retrieve(key) {
    	
    	}

    	return {
    		store: store,
        	retrieve: retrieve
    	};
  });