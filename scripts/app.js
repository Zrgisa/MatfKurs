var matfApp = angular.module('matfLyrics', ['ui.router']);

matfApp.config(function ($stateProvider, $urlRouterProvider) {
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
            url: '/search',
            templateUrl: 'view/search.html'
        }
    );
});
