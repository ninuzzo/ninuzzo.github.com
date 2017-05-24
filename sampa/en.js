/*

Structural language learning and tandem method.
A JavaScript database of English SAMPA pronunciations.

Copyright (c) 2017 Antonio Bonifati http://ninuzzo.github.com/about.html

This work is licensed under the Creative Commons
Attribution-NonCommercial-ShareAlike 3.0 Unported License. To view a copy of
this license, visit http://creativecommons.org/licenses/by-nc-sa/3.0/ or send a
letter to Creative Commons, 444 Castro Street, Suite 900, Mountain View,
California, 94041, USA.

*/

/*
JavaScript does not have a hash data type. We can use an object instead, but
key searches are case sensitive. Fortunately, JavaScript string.toLowerCase()
follows Unicode standards and can be used to make an object property lookup
case-insensitive. For that to work, please write all keys in small letters,
even if capital letters would be required in the original word (e.g. a proper
name).

http://stackoverflow.com/questions/3559070/are-there-dictionaries-in-javascript-like-python
http://stackoverflow.com/questions/7700987/performance-of-key-lookup-in-javascript-object-hashing
*/

pl_sampa.en = {
  /* To sort this list in VIM use :'a,.sort i assuming you have marked the
     first line with ma and the current line is the last. You can also select
     the list typing V on the first line, then G 3k and type :sort i */
  /* Refer to http://www.phon.ucl.ac.uk/home/sampa/english.htm */
  // Nouns
  "time": 'taIm',
  "person": '"p3:s(@)n',
  "year": 'jI@',
  "way": 'wEI',
  "day": 'dEI',
  "thing": 'TIN',
  "man": 'm{n',
  "world": 'w3:ld',
  "life": 'laIf',
  "hand": 'h{nd',
  "part": 'pA:t',
  "child": 'tSaIld',
  "eye": 'aI',
  "woman": '"wUm@n',
  "place": 'plEIs',
  "work": '"w3:k',
  "week": 'wi:k',
  "case": 'kEIs',
  "point": '"pOInt',
  "government": '"gVv@nm@nt',
  "company": '"kVmp@nI',
  "number": '"nVmb@',
  "group": 'gru:p',
  "problem": '"prQbl@m',
  "fact": 'f{kt',

  // Verbs
  "be": 'bi(:)',
  "have": 'h{v',
  "do": 'du:',
  "say": 'sEI',
  "get": 'gEt',
  "make": 'mEIk',
  "go": 'g@U',
  "know": 'n@U',
  "take": 'tEIk',
  "see": 'si:',
  "come": 'kVm',
  "think": 'TINk',
  "look": 'lUk',
  "want": 'wQnt',
  "give": 'gIv',
  "use": 'ju:z',
  "find": 'faInd',
  "tell": 'tEl',
  "ask": 'A:sk, {sk',
  "work": 'w3:k',
  "seem": 'si:m',
  "feel": 'fi:l',
  "try": 'traI',
  "leave": 'li:v',
  "call": 'kO:l',

  // Adjectives
  "good": 'gUd',
  "new": 'nju:',
  "first": 'f3:st',
  "last": 'lA:st',
  "long": 'lQN, lO:N',
  "great": 'grEIt',
  "little": '"lIt(ə)l',
  "own": '@Un',
  "other": '"VD@',
  "old": '@Uld',
  "right": 'raIt',
  "big": 'bIg',
  "high": 'haI',
  "different": '"dIfr@nt',
  "small": 'smO:l',
  "large": 'lA:dZ',
  "next": 'nEkst',
  "early": '"3:lI',
  "young": 'jVN',
  "important": 'Im"pO:tnt',
  "few": 'fju:',
  "public": '"pVblIk',
  "bad": 'b{d',
  "same": 'sEIm',
  "able": '"EIbl',

  // Prepositions
  "to": 't@, tU, tu:',
  "of": '@v, Qv',
  "in": 'In',
  "for": 'f@(r), fO:r',
  "on": 'Qn',
  "with": 'wID, wiT',
  "at": '@t, {t',
  "by": 'baI',
  "from": 'frQm',
  "up": 'Vp',
  "about": '@"baUt',
  "into": '"IntU, "Int@',
  "over": '"@Uv@(r)',
  "after": '"A:ft@(r), "{ft@r',
  "beneath": 'bI"ni:T',
  "under": '"Vnd@',
  "above": '@"bVv',

  // Others
  "the": 'D@, DI, Di:',
  "and": '(@)nd, (@)n, {nd',
  "a": '@',
  "that": 'D{t',
  "i": 'aI',
  "it": 'It',
  "not": 'nQt',
  "he": 'hi:',
  "as": '@z',
  "you": 'j@, jU, ju:',
  "this": 'DIs',
  "but": 'bVt',
  "his": 'hIz',
  "they": 'DEI',
  "her": 'h3:',
  "she": 'SI, Si:',
  "or": 'O:',
  "an": '@n, A:n',
  "will": 'wIl',
  "my": 'maI',
  "one": 'wVn',
  "all": 'O:l',
  "would": 'wUd',
  "there": 'DE@(r)',
  "their": 'D@(r), DE@(r)',

  // Short forms
  "i'm": 'aIm',
  "you're": 'j@(r), jO:(r), jOr, jU@r',
  "we're": 'wI@(r), wi:@(r)',
  "isn't": '"Iz(@)nt',
  "it's": 'Its',
  "he's": '(h)iz, hi:z',
  "they're": 'D@(r), DE@(r), DEI@(r)',
  "aren't": 'A:nt, "Ar(@)nt',
  "where's": 'wE@z, wE@rz',
  "can't": 'kA:nt, k{nt',
  "couldn't": '"kUdnt',
  "don't": 'd@Unt',
  "mustn't": '"mVs(@)nt',
  "must've": '"mVst@v',
  "wouldn't": '"wUd(@)nt',
  "it'll": 'Itl',
  "it'd": '"It@d',
  "weren't": 'w3:nt, "w3r@nt, w3rnt',
  "wasn't": '"wQz(@)nt, wAs-',
  "would've": '"wUd@v',
  "won't": 'w@Unt',
  "what'd": 'wVd',
  "where'd": 'wE@rd',
  "when'd": 'wend, hwend',
  "shan't": '"SA:nt, "S{nt',
  "that'd": '"D{t@d',
  "that's": '"D{tz',
  "shouldn't": '"SUd(@)nt',
  "should've": '"SUd@v',
  "haven't": '"h{v(@)nt',
  "ain't": 'EInt',

  "am": '{m',
  "your": 'j@(r), jO:(r), jOr, jU@r',
  "we": 'wI, wi:',
  "its": 'Its',
  "where": 'wE@(r)',

};
