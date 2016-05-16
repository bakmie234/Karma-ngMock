(function () {
    angular.module("mainApp")
        .factory("MovieService",function () {
        var search = function(){
            return {Title:"Star Wars"};
        };
        return {
            Search: search
        };
    });
})();