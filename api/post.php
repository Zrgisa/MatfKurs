<?php

$postData = json_decode(file_get_contents('php://input'), true);

//ako je neki od potrebnih parametara prazan ispisujemo "SPECIFICIRAJ" i izlazimo
if (empty($postData) || empty($postData['name']) || empty($postData['author']) || empty($postData['text'])) {
    echo 'Specificiraj';
    exit;
}


/** @var array $niz */
$niz = json_decode(file_get_contents('lyrics.txt'), true);

//dodaje na poslednji ID 1 i dodaje novu pesmu u niz sa tim IDjem
$duzinaNiza = count($niz);
$noviId = $niz[$duzinaNiza-1]['id'] + 1;

$niz[] = [
    'id'     => $noviId,
    'name'   => $postData['name'],
    'author' => $postData['author'],
    'lyrics' => $postData['text'],
];

//u datotetku upisujemo niz u JSON formatu
file_put_contents('lyrics.txt', json_encode($niz));

