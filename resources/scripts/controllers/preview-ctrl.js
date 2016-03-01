'use strict';

form.controller('PreviewCtrl', function ($scope, $location, $mdDialog, step1Cache, step2Cache, step3aCache, step3bCache, step3cCache, step4aCache, step4bCache, step4cCache) {
    var fosterCatcher = [];
    // cache data from step 1
    $scope.childern = step1Cache.getChildern();
    //cache data from step 2 
    $scope.answer = step2Cache.getAnswer();
    //cache data from step 3 part a 
    $scope.childIncome = step3aCache.getIncome();
    //cache data from step 3 part b 
    $scope.houseHolders = step3bCache.gethouseHolders();
    //cache data from step 3 part c
    $scope.house = step3cCache.getHouse();
    //cache data from step 4 part a  
    $scope.optional = step4aCache.getOptional();
    //cache data from step 4 part b  
    $scope.user = step4bCache.getUser();
    //cache data from step 4 part c  
    $scope.races = step4cCache.getRace();
    // go back to step 1
    $scope.goToStep1 = function () {
        $location.path('/step1');
    };
    // go back to step 2

    $scope.goToStep2 = function () {
        $location.path('/step2');
    };
    // go back to step 3

    $scope.goToStep3 = function () {
        $location.path('/step3');
    };
    // go back to step 4

    $scope.goToStep4 = function () {
        $location.path('/step4');
    };
    // add true to fosterCatcher array 
    for (var index = 0; index < $scope.childern.length; index++) {
        if ($scope.childern[index].IsFoster === true) {
            fosterCatcher.push("true");
        }
    };
    // check step 2 availability 
    $scope.checkStep2Availability = function () {

        if (fosterCatcher.length === $scope.childern.length) {
            return false; //hide step 2
        } else {
            return true; // show step 2
        }
    };
    // data hold all steps data 

    $scope.confirm = function (ev) {

        var data = {
            childName: [],
            IsStudent: [],
            ISFosterChild: [],
            IsHomeless: [],
            hasBenefits: "",
            caseNumber: "",
            childrenIncome: "",
            childrenPayPeroid: "",
            houseHoldName: [],
            incomeAmount: [],
            incomePeroid: [],
            childSupport: [],
            childSupportPeroid: [],
            retirement: [],
            retirementPeroid: [],
            IsChecked: "",
            SNN: "",
            houseHolderNo: "",
            IsHispanic: "",
            races: [],
            address: "",
            city: "",
            state: "",
            postalCode: "",
            phone: "",
            email: ""
        };

        for (var idx = 0; idx < $scope.childern.length; idx++) {
            data.childName.push($scope.childern[idx].firstName + ' ' + $scope.childern[idx].middleName + ' ' + $scope.childern[idx].lastName);
            data.IsStudent.push($scope.childern[idx].IsStudent);
            data.IsHomeless.push($scope.childern[idx].IsHomeless);
            data.ISFosterChild.push($scope.childern[idx].IsFoster);
        };
        console.log('$scope.checkStep2Availability' + $scope.checkStep2Availability)
            // check first if step 2 exist 	

        data.hasBenefits = $scope.answer.anr;
        data.caseNumber = $scope.answer.caseNo;

        //	check first if step 2 exist and user did not receive any benefits 

        data.IsChecked = $scope.house.IsChecked;
        data.SNN = $scope.house.SNN;
        data.houseHolderNo = $scope.house.No;
        data.childrenIncome = $scope.childIncome.IncomeAmount;
        data.childrenPayPeroid = $scope.childIncome.payPeriod;
        for (var i = 0; i < $scope.houseHolders.length; i++) {
            data.houseHoldName.push($scope.houseHolders[i].firstname + ' ' + $scope.houseHolders[i].lastname);
            data.incomeAmount.push($scope.houseHolders[i].incomeAmount);
            data.incomePeroid.push($scope.houseHolders[i].incomePeroid);
            data.childSupport.push($scope.houseHolders[i].childSupport);
            data.childSupportPeroid.push($scope.houseHolders[i].childSupportPeroid);
            data.retirement.push($scope.houseHolders[i].retirement);
            data.retirementPeroid.push($scope.houseHolders[i].retirementPeroid);

        };



        data.IsHispanic = $scope.optional.IsHispanic;
        for (var idx = 0; idx < $scope.races.length; idx++) {
            data.races.push($scope.races[idx]);
        };
        data.address = $scope.user.address;
        data.city = $scope.user.city;
        data.state = $scope.user.state;
        data.postalCode = $scope.user.postalCode;
        data.phone = $scope.user.phone;
        data.email = $scope.user.email;
        console.log('application data ' + data);

        // Appending dialog to document.body to cover sidenav in docs app
        // Modal dialogs should fully cover application
        // to prevent interaction outside of dialog
        $mdDialog.show(
            $mdDialog.alert()
            .parent(angular.element(document.querySelector('#popupContainer')))
            .clickOutsideToClose(true)
            .title('THANK YOU')
            .content('We will contact you soon,' + $scope.user.formName)
            .ariaLabel(' Confirmation Alert ')
            .ok('Got it!')
            .targetEvent(ev)
        );
        alasql('SELECT * INTO XLSX("Report.xlsx",{headers:true}) FROM ?', [data]);

    };
});