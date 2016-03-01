/**
 * Created by kero on 2/29/2016.
 */
describe('free_meals step 2 unit test', function () {
    var
        scope,
        Step2Ctrl,
        $location,
        step2Cache;
    beforeEach(function() {
        var mockStep2Inputs = {};
        module('myform', function ($provide) {
            $provide.value('step2Cache', mockStep2Inputs);
        });
        inject(function() {
            mockStep2Inputs.data = {
                "anr": "yes",
                "caseNo": "000000000"

            };
        })
        mockStep2Inputs.getAnswer = function() {
            return this.data;
        };

        mockStep2Inputs.setAnswer = function(val) {
            this.data = val;
        };
    });
    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope,_$location_,_step2Cache_) {

        $location=_$location_;
        step2Cache=_step2Cache_;
        scope = $rootScope.$new();
        Step2Ctrl = $controller('Step2Ctrl', {
            $scope: scope,
            $location:$location,
            step2Cache:step2Cache
        });
        scope.$digest();
    }));
    // check answer object returns from step2Cache
    it('should scope.answer be ', function() {
        expect(scope.answer).toEqual(
            {
                "anr": "yes",
                "caseNo": "000000000"
            }
        );
    });
    it('should go to step 4 ',function(){
        spyOn($location, 'path');
        // clicknext step button
        scope.checkNextStep("Yes",true);
        // then should takes us to step 4 page
        expect($location.path).toHaveBeenCalledWith('/step4');
    });
    it('should go to step 3 ',function(){
        spyOn($location, 'path');
        // clicknext step button
        scope.checkNextStep("No",true);
        // then should takes us to step 3 page
        expect($location.path).toHaveBeenCalledWith('/step3');
    });
});