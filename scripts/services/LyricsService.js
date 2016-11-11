'use strict';

matfApp.service('LyricsService', function () {
    var self = this;
    var songs = [
        {
            id: 1,
            name: 'One',
            author: 'Metallica',
            lyrics: 'I can\'t remember anything'
        },
        {
            id: 2,
            name: 'Vivir Mi Vida',
            author: 'Marc Anthony',
            lyrics: 'Voy a reír, voy a bailar'
        }
    ];

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
