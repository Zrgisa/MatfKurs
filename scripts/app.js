'use strict';

var matfApp = angular.module('matfLyrics', ['ui.router']);

matfApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state(
        {
            name: 'home',
            url: '/',
            templateUrl: 'view/home.html'
        }
    ).state(
        {
            name: 'search',
            url: '/search/:search',
            templateUrl: 'view/search.html',
            controller: 'SearchController'
        }
    ).state(
        {
            name: 'about',
            url: '/about',
            templateUrl: 'view/about.html'
        }
    ).state(
        {
            name: 'lyrics',
            url: '/lyrics/:id',
            templateUrl: 'view/lyrics.html',
            controller: 'LyricsController'
        }
    ).state(
        {
            name: 'postLyrics',
            url: '/postLyrics',
            templateUrl: 'view/postLyrics.html',
            controller: 'PostController'
        }
    );
}]);
