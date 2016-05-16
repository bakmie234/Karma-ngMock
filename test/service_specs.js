describe("A Service Specs", function () {
    it("return a movie", function () {
        var movie = { Title: "Star Wars" };
        var service = {};
        service.search = function (params) {
            return {Title:"Star Wars"};
        }
        expect(service.search()).toEqual(movie);
    });
});