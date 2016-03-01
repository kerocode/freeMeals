'use strict';
describe('free_meals step 1 unit test', function () {
    var
        scope,
        Step1Ctrl,
        step1Inputs,
        $location,
        step1Cache;

    beforeEach(function() {
        var mockStep1Inputs = {};
        module('myform', function ($provide) {
            $provide.value('step1Cache', mockStep1Inputs);
        });
        inject(function() {
            mockStep1Inputs.data = [{
                "firstName": "john",
                "middleName": "m",
                "lastName": "luke",
                "isStudent": "yes",
                "isHomeless": "no",
                "isFosterChild": "yes"
            }];
        })
        mockStep1Inputs.getChildern = function() {
            return this.data;
        };

        mockStep1Inputs.setChildern = function(name) {
            this.data = name;
        };
    });


    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope,_$location_,_step1Cache_) {

        $location=_$location_;
        step1Cache=_step1Cache_;
        scope = $rootScope.$new();
        Step1Ctrl = $controller('Step1Ctrl', {
            $scope: scope,
            $location:$location,
            step1Cache:step1Cache
        });
        scope.$digest();
    }));
    it('Step1ctrl object length should be 0 ', function () {
        expect(scope.childernNo).toEqual(1);
    });

    it('should have a method to check if the path ', function() {

        $location.path('/step1');
        expect($location.path()).toBe('/step1');
    });
    it('should scope.childern be ', function() {
        expect(scope.childern).toEqual([
            {
                "firstName": "john",
                "middleName": "m",
                "lastName": "luke",
                "isStudent": "yes",
                "isHomeless": "no",
                "isFosterChild": "yes"
            }
        ]);
    });

});