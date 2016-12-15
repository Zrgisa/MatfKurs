'use strict';

matfApp.controller('PostController', ['$scope', '$http', function ($scope, $http) {
    $scope.songName = '';
    $scope.songAuthor = '';
    $scope.songLyrics = '';

    $scope.submit = function () {
        alert('submit');
    };
}]);
