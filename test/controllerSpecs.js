describe("controller", function () {
    var controller;
    beforeEach(angular.mock.module("mainApp"));
    beforeEach(angular.mock.inject(function (_$controller_) {
        controller = _$controller_('sampleController',{});
    }));
    it("controller specs", function () {
        expect(controller).toBeDefined();
    });
});