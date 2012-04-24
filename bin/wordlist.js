#!/usr/bin/env js 

/* Extracts a word list from a player's .js datafile given as an argument.
   This is useful for another script to record audio files.

   Syntax: extract_wordlist.js path/file.js [1|2|3]
   Language number default to 2.

   Ref.
   https://developer.mozilla.org/en/Introduction_to_the_JavaScript_shell */

load(arguments[0]);

var lang = parseInt(arguments[1]), sent = [];

if (isNaN(lang)) {
  lang = 2;
} else if (lang < 1) {
  lang = 1;
} else if (lang > 3) {
  lang = 3;
}

function s2a(value) {
  return value instanceof Array ? value : [value];
}

// Extract sentences.
for (var slide = 0; slide < lesson.length; slide++) {
  sent = sent.concat(s2a(lesson[slide][lang]));
}

// Sort and unique (omit repeated sentences).
// See: http://stackoverflow.com/questions/4833651/javascript-array-sort-and-unique/
sent = sent.sort().filter(function(value, index, array) {
  if (index && value == array[index - 1]) {
    return false;
  }
  return true;
});

// Print sentences.
for (var i = 0; i < sent.length; i++) {
  /* Windows NTFS forbids the following characters: " * : < > ? \ / |
     Trim or replace the ones we happen to use,
     for now only replace ? with Q.
     TODO: this code should match with the similar found in player.js */
  print(sent[i].replace(/\?/g, 'Q'));
}
