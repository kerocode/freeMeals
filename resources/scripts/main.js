    angular.module("MyApp", ['ngRoute', 'ngMaterial', 'ngAnimate', 'myform'])
            .config(function ($routeProvider, $locationProvider) {
                $routeProvider
                    .when('/intro', {
                        controller: 'IntroCtrl',
                        templateUrl: 'views/intro.html'
                    });
                $routeProvider
                    .when('/step1', {
                        controller: 'Step1Ctrl',
                        templateUrl: 'views/my-step1.html'
                    });
                $routeProvider
                    .when('/step2', {
                        controller: 'Step2Ctrl',
                        templateUrl: 'views/my-step2.html'
                    });
                $routeProvider
                    .when('/step3', {
                        controller: 'Step3Ctrl',
                        templateUrl: 'views/my-step3.html'
                    });
                $routeProvider
                    .when('/step4', {
                        controller: 'Step4Ctrl',
                        templateUrl: 'views/my-step4.html'
                    });
                $routeProvider
                    .when('/preview', {
                        controller: 'PreviewCtrl',
                        templateUrl: 'views/preview.html'
                    });
                $routeProvider
                    .otherwise({
                        redirectTo: '/intro'
                    });

                $locationProvider.html5Mode(true);

            });