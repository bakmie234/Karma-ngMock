describe("wakah", function () {
    it("walah", function () {
        var q = {};
        angular.mock.inject(function($http){
            q = $http;
        });
        expect(12).toBe(12);
    });
    it("check resource", function () {
        angular.mock.module("mainApp");
        var $resource;
        angular.mock.inject(function (_$resource_) {
            $resource = _$resource_;
        });
        expect(1).toBe(1);
    });
});