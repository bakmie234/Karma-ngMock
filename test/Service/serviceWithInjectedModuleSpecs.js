describe("Service with Injected Module", function () {
    it("return a movie using injected module", function () {
        var movie = { Title: "Star Wars" };
        angular.mock.module({
            "MovieService": {
                Search: function (query) {
                    return movie;
                }
            }
        });
        var service = {};
        angular.mock.inject(function (_MovieService_) {
            service = _MovieService_;
        });
        expect(service.Search()).toEqual(movie);
    });
});