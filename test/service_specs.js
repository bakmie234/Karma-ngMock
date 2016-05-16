describe("A Service Specs", function () {
    it("return a movie", function () {
        var movie = { Title: "Star Wars" };
        angular.mock.module("mainApp");
        var service = {};
        angular.mock.inject(function (_MovieService_) {
            service = _MovieService_;
        })
        expect(service.Search()).toEqual(movie);
    });
});