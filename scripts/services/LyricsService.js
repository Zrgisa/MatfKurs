'use strict';

matfApp.service('LyricsService', function ($http) {
    var self = this;
    var songs = [];

    self.getAllSongs = function (search) {
        if(search!=='') {
            $http.get('api/lyrics.php?s=' + search).then(function (response) {
                songs.length = 0;
                for (var i = 0; i < response.data.length; i++) {
                    songs.push(response.data[i]);
                }
            });
        } else {
            $http.get('api/lyrics.php').then(function (response) {
                songs.length = 0;
                for (var i = 0; i < response.data.length; i++) {
                    songs.push(response.data[i]);
                }
            });
        }

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
