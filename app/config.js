(function () {
    'use strict';
    var id = 'app';

    var app = angular.module('app', ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeCtrl',
                templateUrl: 'app/main/views/index.html'
            })
            .when('/docs', {
                controller: 'DocsCtrl',
                templateUrl: 'app/docs/views/index.html'
            })
            .otherwise({
                controller: 'HomeCtrl',
                templateUrl: '404.html'
            });
    });
})();