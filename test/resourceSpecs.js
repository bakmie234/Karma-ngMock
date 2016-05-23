describe("Angular Resource", function () {
    var movie, $httpBackend;
    beforeEach(angular.mock.module("mainApp"));
    beforeEach(angular.mock.inject(function (_$httpBackend_, _movieResource_) {
        $httpBackend = _$httpBackend_;
        movie = _movieResource_;
    }));
    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
    })
    it("Using Resource", function () {
        var expectedData = function (data) {
            return angular.fromJson(data).title === "Whatever";
        };
        $httpBackend.expectPOST(/./, expectedData)
			.respond(201);
        movie = new movie({ title: "Whatever" });
        movie.$save();
        $httpBackend.flush();
    });
});