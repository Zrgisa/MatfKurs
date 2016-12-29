'use strict';

matfApp.controller('PostController', ['$scope', '$http', function ($scope, $http) {
    $scope.songName = '';
    $scope.songAuthor = '';
    $scope.songLyrics = '';

    $scope.submit = function () {
        $http.get('api/post.php?name='+$scope.songName+"&author="+$scope.songAuthor+"&text="+$scope.songLyrics).then(function (response) {
            if(response.data=="Specificiraj"){
                window.alert("Fale parametri");
            } else {
                window.alert("UspesnoExi dodata pesma");
            }
        });
    };
}]);
