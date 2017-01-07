'use strict';

matfApp.controller('PostController', ['$scope', '$http', function ($scope, $http) {
    $scope.songName = '';
    $scope.songAuthor = '';
    $scope.songLyrics = '';

    $scope.submit = function () {
        var data = {
            name: $scope.songName,
            author: $scope.songAuthor,
            text: $scope.songLyrics
        };

        $http.post('api/post.php', data, {
            headers: {'Content-Type': 'application/json'}
        }).then(function (response) {
            if(response.data=="Specificiraj"){
                window.alert("Fale parametri");
            } else {
                window.alert("UspesnoExi dodata pesma");
            }
        });
    };
}]);
