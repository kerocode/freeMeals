form.controller('Step1Ctrl', function ($scope, $location, step1Cache) {
    // array to collect all foster child 
    var fosterCatcher = [];
    // children object     
    $scope.children = step1Cache.getChildern();
    // children object length 
    $scope.childernNo = $scope.children.length;
    // mathod to add child 
    $scope.addChild = function () {
        $scope.children.push({

        });
    };
    // method to remove a child 
    $scope.removeChild = function (array, index) {
        if ($scope.children.length > 1) {
            array.splice(index, 1);
        }
    };
    // method check inputs and decide what will be next step 
    $scope.checkNextStep = function (FormValid) {

        for (var index = 0; index < $scope.children.length; index++) {
            if ($scope.children[index].IsFoster === true) {
                fosterCatcher.push("true");
            }
        }
        if (FormValid) {
            if (fosterCatcher.length === $scope.children.length) {
                $location.path('/step4'); //'step4'
            } else {
                $location.path('/step2'); // 'step2'
            }
        };


    };
    step1Cache.setChildern($scope.children);

});