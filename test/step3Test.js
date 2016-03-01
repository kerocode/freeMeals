/**
 * Created by kero on 2/29/2016.
 */
describe('free_meals step 3 unit test', function () {
    var
        scope,
        Step3Ctrl,
        $location,
        step3aCache,
        step3bCache,
        step3cCache,
        step1Cache;
    beforeEach(function () {
        var mockStep3aInputs = {};
        var mockStep1Inputs = {};
        var mockStep3bInputs = {};
        var mockStep3cInputs = {};
        module('myform', function ($provide) {
            $provide.value('step3aCache', mockStep3aInputs);
            $provide.value('step3bCache', mockStep3bInputs);
            $provide.value('step3cCache', mockStep3cInputs);
            $provide.value('step1Cache', mockStep1Inputs);
        });
        inject(function () {
            mockStep1Inputs.data = [{
                "firstName": "john",
                "middleName": "m",
                "lastName": "luke",
                "isStudent": "yes",
                "isHomeless": "no",
                "isFosterChild": "yes"
            },
                {
                    "firstName": "david",
                    "middleName": "m",
                    "lastName": "zillo",
                    "isStudent": "no",
                    "isHomeless": "no",
                    "isFosterChild": "yes"
                }];
            mockStep3aInputs.data = {
                "IncomeAmount": "150.00",
                "payPeriod": "Weekly"
            };
            mockStep3bInputs.data = [{
                "firstname": "mark",
                "lastname": "wrong",
                "incomeAmount":"420.00",
                "incomePeroid":"Bi-Weekly",
                "childSupport":"230.00",
                "childSupportPeroid":"Weekly",
                "retirement":"800.00",
                "retirementPeroid":"Monthly"
            }, {
                "firstname": "willo",
                "lastname": "mortea",
                "incomeAmount":"200.00",
                "incomePeroid":"Weekly",
                "childSupport":"290.00",
                "childSupportPeroid":"Bi-Weekly",
                "retirement":"820.00",
                "retirementPeroid":"Monthly"
            }];
            //
            mockStep3cInputs.data={
                "SNN":"00000",
                "IsChecked":"false",
                "No":"4"
            }
        })
        mockStep1Inputs.getChildern = function() {
            return this.data;
        };

        mockStep1Inputs.setChildern = function(name) {
            this.data = name;
        };
        mockStep3aInputs.getIncome = function () {
            return this.data;
        };

        mockStep3aInputs.setIncome = function (val) {
            this.data = val;
        };
        mockStep3bInputs.gethouseHolders = function () {
            return this.data;
        };

        mockStep3bInputs.sethouseHolders = function (val) {
            this.data = val;
        };
        mockStep3cInputs.getHouse = function () {
            return this.data;
        };

        mockStep3cInputs.setHouse = function (val) {
            this.data = val;
        };
    });
    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, _$location_, _step3cCache_,_step3bCache_,_step3aCache_, _step1Cache_) {

        $location = _$location_;
        step1Cache = _step1Cache_;
        step3aCache = _step3aCache_;
        step3bCache = _step3bCache_;
        step3cCache = _step3cCache_;
        scope = $rootScope.$new();
        Step3Ctrl = $controller('Step3Ctrl', {
            $scope: scope,
            $location: $location,
            step3aCache: step3aCache,
            step3cCache: step3cCache,
            step3bCache: step3bCache,
            step1Cache: step1Cache
        });
        scope.$digest();
    }));
    // check answer object returns from step2Cache
    it('should scope.child be ', function () {
        expect(scope.child).toEqual(
            {
                "IncomeAmount": "150.00",
                "payPeriod": "Weekly"
            }
        );
    });
    // check answer object returns from step3bCache
    it('should scope.houseHolders be ', function () {
        expect(scope.houseHolders).toEqual(
            [{
                "firstname": "mark",
                "lastname": "wrong",
                "incomeAmount":"420.00",
                "incomePeroid":"Bi-Weekly",
                "childSupport":"230.00",
                "childSupportPeroid":"Weekly",
                "retirement":"800.00",
                "retirementPeroid":"Monthly"
            }, {
                "firstname": "willo",
                "lastname": "mortea",
                "incomeAmount":"200.00",
                "incomePeroid":"Weekly",
                "childSupport":"290.00",
                "childSupportPeroid":"Bi-Weekly",
                "retirement":"820.00",
                "retirementPeroid":"Monthly"
            }]
        );
    });
    it('should scope.house be',function(){
        expect(scope.house).toEqual(
            {
                "SNN": "00000",
                "IsChecked": false,
                "No": "4"
            }
        );
    });
    //scope.total
    it('should scope.childern+scope.houseHolders length be ', function () {
        expect(scope.childernN + scope.houseHolderN).toEqual(3);
    });
    it(' after clicking addHousehold button should scope.childern+scope.houseHolders length be ', function () {
        scope.addHoulder();
        expect(scope.childernN + scope.houseHolderN).toEqual(5);
    });
    it('should scope.childern length be ', function () {
        expect(scope.childernN).toEqual(2);
    });
it ('after clicking next step button go to step4',function(){
    spyOn($location, 'path');
    // clicknext step button
    scope.checkNextStep(true);
    // then should takes us to step 4 page
    expect($location.path).toHaveBeenCalledWith('/step4');
});

});