describe("controller", function () {
    var controller;
    beforeEach(angular.mock.module("mainApp"));
    beforeEach(angular.mock.inject(function (_$controller_) {
        controller = _$controller_('sampleController',{});
    }));
    it("controller specs", function () {
        dump(angular.mock.dump(controller));
        expect(controller).toBeDefined();
        // expect(controller.prop1).toBeDefined();
        // expect(controller.prop1).toEqual("Name");
    });
});