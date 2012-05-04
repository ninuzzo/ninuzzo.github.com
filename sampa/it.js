/*

Structural language learning and tandem method.
A JavaScript database of Italian SAMPA pronunciations.

Copyright (c) 2012 Antonio Bonifati http://ninuzzo.github.com/about.html

This work is licensed under the Creative Commons
Attribution-NonCommercial-ShareAlike 3.0 Unported License. To view a copy of
this license, visit http://creativecommons.org/licenses/by-nc-sa/3.0/ or send a
letter to Creative Commons, 444 Castro Street, Suite 900, Mountain View,
California, 94041, USA.

*/

/*
JavaScript does not have a hash data type. We can use an object instead, but key searches are case sensitive. Fortunately, JavaScript string.toLowerCase() follows Unicode standards and can be used to make an object property lookup case-insensitive. For that to work, please write all keys in small letters, even if capital letters would be required in the original word (e.g. a proper name).

http://stackoverflow.com/questions/3559070/are-there-dictionaries-in-javascript-like-python
http://stackoverflow.com/questions/7700987/performance-of-key-lookup-in-javascript-object-hashing
*/

pl_sampa.it = {
  /* To sort this list in VIM use :'a,.sort i assuming you have marked the
     first line with ma and the current line is the last. You can also select
     the list typing V on the first line, then G 3k and type :sort i */
  "a": 'a',
  "abile": '"abile',
  "adesso": 'a"dEsso',
  "andando": 'an"dando',
  "assurdità": 'assurdi"ta',
  "attività": 'attivi"ta',
  "Bonifati": 'boni"fa(:)ti',
  "broccoli": '"brOkkoli',
  "c'è": '"tSE',
  "causa": '"kauza',
  "che": '"ke',
  "ci": 'tSi',
  "città": 'tSit"ta',
  "cos'è": 'kO"zE',
  "cosa": '"kO(:)za',
  "da": 'da',
  "desiderabile": 'deside"rabile',
  "e": 'e',
  "essa": '"essa',
  "esse": '"esse',
  "essi": '"essi',
  "esso": '"esso',
  "falso": '"falso',
  "fare": '"fa(:)re',
  "i": 'i',
  "identità": 'identi"ta',
  "il": 'il',
  "incredibilmente": 'incredibil"mente',
  "inevitabile": 'inevi"tabile',
  "laggiù": 'lad"dZu',
  "loro": '"lo(:)ro',
  "là": '"la',
  "lì": '"li',
  "ma": 'ma',
  "me": 'me',
  "mente": '"mente',
  "nessuno": 'nes"suno',
  "niente": '"njEnte',
  "non": 'non',
  "normale": 'nor"male',
  "normalmente": 'normal"mente',
  "o": 'o',
  "oggi": '"OddZi',
  "opportunità": 'opportuni"ta',
  "papa": '"pa(:)pa',
  "papà": 'pa"pa',
  "pasta": '"pa(:)sta',
  "per": 'per',
  "possibile": 'pos"si(:)bile',
  "possibilità": 'possibili"ta',
  "preferibilmente": 'preferibil"mente',
  "probabile": 'pro"babile',
  "probabilmente": 'probabil"mente',
  "qua": 'kwa',
  "qualche": '"kwalke',
  "qualcosa": 'kwal"kOsa',
  "qualità": 'kwali"ta',
  "qui": 'kwi',
  "signor": 'siN"Nore',
  "socievole": 'so"tSE(:)vole',
  "sono": '"so(:)no',
  "spaghetti": 'spa"getti',
  "spago": '"spa(:)go',
  "sto": 'sto',
  "studio": '"stu(:)djo',
  "terribile": 'ter"ri(:)bile',
  "u": 'u',
  "vado": '"va(:)do',
  "vanità": 'vani"ta',
  "vero": '"vero',
  "è": 'E',
  "é": 'e',
  "ò": 'O',
  "ó": 'o',
};
