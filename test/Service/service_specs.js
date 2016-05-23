describe("A Service Specs", function () {
    var service;
    var $httpBackend;
    beforeEach(angular.mock.module("mainApp"));
    beforeEach(angular.mock.inject(function (_MovieService_, _$httpBackend_) {
            service = _MovieService_;
            $httpBackend = _$httpBackend_;
        }));
    it("return a movie", function () {
        var movie = { Title: "Star Wars" };
        var googleUrl = "http://www.google.com/"
        // Use booleanUrl for simply return all url
        var booleanUrl = function(url){
            return true;
        };
        $httpBackend.when("GET", booleanUrl)
            .respond(200, movie);
        var result;
        service.Search()
            .then(function(data){
                result = data;
            });
        $httpBackend.flush();
        expect(result).toEqual(movie);
    });
    it("Handle Error", function () {
        var booleanUrl = function(url){
            return true;
        };
        $httpBackend.when("GET", booleanUrl)
            .respond(500);
        var result;
        service.Search()
            .then(function(data){
                result = data;
            })
            .catch(function(){
                result = "Error";
            });
        $httpBackend.flush();
        expect(result).toEqual("Error");
    });
});