(function () {
    angular.module("mainApp")
        .factory("movieResource", function ($resource) {
            return $resource("popular/:movieId",
                { movieId: "@id" },
                {update : {
                    methode: "PUT"
                }}
            );
        });
})();