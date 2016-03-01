form.controller('Step3Ctrl', function ($scope, $location, $mdMedia, $mdDialog, step1Cache, step3aCache, step3bCache, step3cCache) {
    $scope.childernN = step1Cache.getChildern().length;
    $scope.child = step3aCache.getIncome();
    $scope.houseHolders = step3bCache.gethouseHolders();
    $scope.houseHolderN = 1;
    $scope.total = $scope.childernN + $scope.houseHolderN;

    console.log('totalnow:' + $scope.total);
    $scope.house = step3cCache.getHouse();
    $scope.house.IsChecked = false;


    $scope.addHoulder = function () {
        $scope.houseHolders.push({});
        $scope.houseHolderN = $scope.houseHolders.length;
        $scope.total = $scope.childernN + $scope.houseHolderN;


        console.log('totalnow:' + $scope.total);
    };

    $scope.removeHoulder = function (array, index) {
        if ($scope.houseHolders.length > 1) {
            array.splice(index, 1);
            $scope.houseHolderN = $scope.houseHolderN - 1;
            $scope.total = $scope.childernN + $scope.houseHolderN;
            console.log('totalnow:' + $scope.total);

        }
    };
    $scope.checkNextStep = function (isValid) {
        if (isValid) {
            $location.path('/step4'); //step4
        };
    }

    $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
    $scope.childIncomeh = function (ev) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
        $mdDialog.show({
            templateUrl: 'resources/views/step3/dialog-child-income.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: useFullScreen
        });
    };
    $scope.adultIncomeh = function (ev) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
        $mdDialog.show({
            templateUrl: 'resources/views/step3/dialog-adult-income.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: useFullScreen
        });
    };
    $scope.childSupporth = function (ev) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
        $mdDialog.show({
            templateUrl: 'resources/views/step3/dialog-child-support.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: useFullScreen
        });
    };
    $scope.otherIncomeh = function (ev) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
        $mdDialog.show({
            templateUrl: 'resources/views/step3/dialog-other-income.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: useFullScreen
        });
    };


    step3aCache.setIncome($scope.child);
    step3bCache.sethouseHolders($scope.houseHolders);
    step3cCache.setHouse($scope.house);


});