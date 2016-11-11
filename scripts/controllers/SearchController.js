'use strict';

matfApp.controller('SearchController', ['$scope', 'LyricsService', function ($scope, LyricsService) {
    $scope.linkovi = LyricsService.getAllSongs();
}]);
