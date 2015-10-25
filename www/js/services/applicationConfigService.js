angular.module('coo')
    .constant('ApplicationConfigService', function () {

        var config = {
            apiURL: '',
        };

        function get(key) {
            var value = config[key];
            if (typeof value === 'undefined') {
                value = null;
            }
            return value;
        }

        return {
            get: get
        }
    }());