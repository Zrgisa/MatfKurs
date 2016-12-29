'use strict';

matfApp.controller('SearchController', ['$scope', '$stateParams', 'LyricsService', '$http', function ($scope, $stateParams, LyricsService, $http) {
    $scope.linkovi = LyricsService.getAllSongs($stateParams.search);


    $scope.delete = function(id){
        $http.get('api/delete.php?id='+id).then(function (response) {
            if(response.data=="Specificiraj"){
                window.alert("Fale parametri");
            } else {
                $scope.linkovi = LyricsService.getAllSongs($stateParams.search);
            }
        });
    };
}]);
