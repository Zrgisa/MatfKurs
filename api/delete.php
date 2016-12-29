<?php

//proveravamo da li je prosledkjeni QUERY parametar prazan i ispisujemo 'SPECIFICIRAJ'
if (empty($_GET['id'])) {
    echo 'Specificiraj';
    exit;
}

//u niz upisujemo dekodirani sadrzaj datoteke Lyrics.txt
$niz = json_decode(file_get_contents('lyrics.txt'), true);

//Vrednost QUERY parametra id upisujemo u promenljivu i pretrazujemo niz
$id = $_GET['id'];
foreach ($niz as $index => $pesma) {
    if($pesma['id'] != $id)
    {
        continue;
    }

    unset($niz[$index]);
}


file_put_contents('lyrics.txt', json_encode(array_values($niz)));
