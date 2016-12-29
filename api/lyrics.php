<?php

//postavlja tekst na QUERY parametar S ili na prazan string,ako on ne postoji
$text = !empty($_GET['s']) ? $_GET['s'] : '';

//preuzimamo teks u JSON formatu iz fajla, dekodujemo i stavljamo u promenljivu niz
$niz = json_decode(file_get_contents('lyrics.txt'), true);

//prolazimo kroz svaki element niza
foreach ($niz as $index => $pesma) {

    //ako je tekst prazan ili postoji u imenu pesme-> preskoci i prihvati
    if(empty($text) || stripos($pesma['name'], $text) !== false)
    {
        continue;
    }

    //ako je tekst prazan ili postoji u imenu autora-> preskoci i prihvati
    if(empty($text) || stripos($pesma['author'], $text) !== false)
    {
        continue;
    }

    //ako je tekst prazan ili postoji u tekstu pesme-> preskoci i prihvati
    if(empty($text) || stripos($pesma['lyrics'], $text) !== false)
    {
        continue;
    }


    //brise konkretan indeks u nizu(onaj koji treba da isfiltriramo)
    unset($niz[$index]);
}

//ispis naseg niza u JSON formatu
echo json_encode(array_values($niz));