'use strict';

matfApp.controller('LyricsController', ['$scope', 'LyricsService', '$stateParams', function ($scope, LyricsService, $stateParams) {
    $scope.song = LyricsService.getSongById($stateParams.id);
}]);
