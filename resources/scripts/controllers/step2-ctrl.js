form.controller('Step2Ctrl', function ($scope, $location, step2Cache) {
    $scope.answer = step2Cache.getAnswer();
    $scope.checkAnswer = function (value) {
        if (value === 'Yes') {
            return false;
        } else {
            return true;
        }
    };
    $scope.checkNextStep = function (answer, FormValid) {
        if (FormValid) {
            if (answer === 'No') {
                return $location.path('/step3'); // step3
            } else if (answer === 'Yes') {
                return $location.path('/step4'); //step 4
            }
        }
    };
    step2Cache.setAnswer($scope.answer);


});