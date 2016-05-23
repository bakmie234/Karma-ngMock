describe("controller with dependencies", function () {
    var controller;
    beforeEach(angular.mock.module("mainApp"));
    beforeEach(angular.mock.inject(function (_$controller_) {
        var dcService = {};
        dcService.prop1 = function () {
            return "prop2";
        }
        // Injecting casual js object as dependencies
        controller = _$controller_('dcController',{dcService : dcService});
    }));
    it("controller with dependencies specs", function () {
        expect(controller).toBeDefined();
        expect(controller.prop1).toBeDefined();
        expect(controller.prop1).toEqual("prop2");
    });
});