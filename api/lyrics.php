<?php

$lyrics = [
    [
        'id'     => 1,
        'name'   => 'One',
        'author' => 'Metallica',
        'lyrics' => 'I can\'t remember anything',
    ],
    [
        'id'     => 2,
        'name'   => 'Vivir Mi Vida',
        'author' => 'Marc Anthony',
        'lyrics' => 'Voy a reír, voy a bailar',
    ],
];

echo json_encode($lyrics);
