angular.module('coo')
.constant('InternetConnectionService', function () {

	function isConnected() {
		if(window.Connection) {
		    if(navigator.connection.type != Connection.NONE) {
				return true;
		    }
		}

		return true;
	}

    return {
        isConnected: isConnected
    }
}());