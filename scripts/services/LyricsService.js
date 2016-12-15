'use strict';

matfApp.service('LyricsService', function ($http) {
    var self = this;
    var songs = [];

    $http.get('api/lyrics.php').then(function (response) {
        for (var i = 0; i < response.data.length; i++) {
            songs.push(response.data[i]);
        }
    });

    self.getAllSongs = function () {
        return songs;
    };

    self.getSongById = function (id) {
        for (var i = 0; i < songs.length; ++i) {
            if (songs[i].id != id) {
                continue;
            }

            return songs[i];
        }

        return null;
    };
});
