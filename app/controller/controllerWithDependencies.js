(function () {
    angular.module("mainApp")
        .controller("dcController", function (dcService) {
            this.prop1 = dcService.prop1();
        })
})();