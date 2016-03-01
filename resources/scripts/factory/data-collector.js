'use strict'
angular.module('DataCollector', [])
    .factory('step1Cache', function () {
        var self = 'step1Cache';
        var childern = [{}];
        return self = {
            getChildern: function () {
                return childern;
            },
            setChildern: function (val) {
                childern = val;
            }
        }
        return childern;

    })
    .factory('step2Cache', function () {
        var self = 'step2Cache';
        var answer = {};
        return self = {
            getAnswer: function () {
                return answer;
            },
            setAnswer: function (val) {
                answer = val;
            }
        }
        return answer;
    })
    .factory('step3aCache', function () {
        var self = 'step3aCache';
        var childIncome = {};
        return self = {
            getIncome: function () {
                return childIncome;
            },
            setIncome: function (val) {
                childIncome = val;
            }
        }
        return childIncome;
    })
    .factory('step3bCache', function () {
        var self = 'step3bCache';
        var houseHolders = [{}];
        return self = {
            gethouseHolders: function () {
                return houseHolders;
            },
            sethouseHolders: function (val) {
                houseHolders = val;
            }
        }
        return houseHolders;

    })
    .factory('step3cCache', function () {
        var self = 'step3cCache';
        var house = {};
        return self = {
            getHouse: function () {
                return house;
            },
            setHouse: function (val) {
                house = val;
            }
        }
        return house;
    })
    .factory('step4aCache', function () {
        var self = 'step4aCache';
        var optional = {};
        return self = {
            getOptional: function () {
                return optional;
            },
            setOptional: function (val) {
                optional = val;
            }
        }
        return optional;
    })
    .factory('step4bCache', function () {
        var self = 'step4bCache';
        var user = {};
        return self = {
            getUser: function () {
                return user;
            },
            setUser: function (val) {
                user = val;
            }
        }
        return user;
    })
    .factory('step4cCache', function () {
        var self = 'step4cCache';
        var races = [];
        return self = {
            getRace: function () {
                return races;
            },
            setRace: function (val) {
                races = val;
            }
        }
        return races;
    });