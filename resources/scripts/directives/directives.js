form.directive('step1Tips', function ($mdDialog) {
    return {
        templateUrl: 'resources/views/step1/step1-tips.html'
    };
});
form.directive('step2Tips', function () {
    return {
        templateUrl: 'resources/views/step2/step2-tips.html'
    };
});
form.directive('step3Tips', function () {
    return {
        templateUrl: 'resources/views/step3/step3-tips.html'
    };
});
form.directive('step4Tips', function () {
    return {
        templateUrl: 'resources/views/step4/step4-tips.html'
    };
});
form.directive('childIncome', function () {
    return {
        templateUrl: 'resources/views/step3/child-income.html'
    };
});

form.directive('adultIncome', function () {
    return {
        templateUrl: 'resources/views/step3/adult-income.html'
    };
});
form.directive('childSupport', function () {
    return {
        templateUrl: 'resources/views/step3/child-support.html'
    };
});
form.directive('otherIncome', function () {
    return {
        templateUrl: 'resources/views/step3/other-income.html'
    };
});