
form.controller('Step4Ctrl',
    function ($scope, $location, step4aCache, step4bCache, step4cCache) {
        $scope.races = ['American Indian or Alaskan Native', 'Asian', 'Black or African American', 'Native Hawaiian or Other Pacic Islander', 'White'];
        $scope.optional = step4aCache.getOptional();
        $scope.selected = step4cCache.getRace();
        $scope.toggle = function (item, list) {
            var idx = list.indexOf(item);
            if (idx > -1) list.splice(idx, 1);
            else list.push(item);
        };

        $scope.user = step4bCache.getUser();
        $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
            'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
            'WY').split(' ').map(function (state) {
            return {
                abbrev: state
            };
        });
        $scope.todayData = new Date();
        $scope.checkNextStep = function () {
            $location.path('/preview');

        };

        step4aCache.setOptional($scope.optional);
        step4bCache.setUser($scope.user);
        step4cCache.setRace($scope.selected);
    });
