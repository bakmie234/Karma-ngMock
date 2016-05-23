(function () {
    angular.module("mainApp")
        .factory("MovieService", function ($http, $q) {
            var httpPromise = function (url) {
                var deferred = $q.defer();
                $http.get(url)
                    .success(function (data) {
                        deferred.resolve(data);
                    })
                    .error(function () {
                        deferred.reject();
                    });
                return deferred.promise;
            }
            var search = function () {
                var googleUrl = "http://www.google.com/"
                return httpPromise(googleUrl);
            };
            return {
                Search: search
            };
        });
})();