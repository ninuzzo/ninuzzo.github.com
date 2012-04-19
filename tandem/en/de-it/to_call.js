/*

Structural language learning and tandem method.
A JavaScript computer program for coaching.

Copyright (c) 2012 Antonio Bonifati http://ninuzzo.github.com/about.html

This work is licensed under the Creative Commons
Attribution-NonCommercial-ShareAlike 3.0 Unported License. To view a copy of
this license, visit http://creativecommons.org/licenses/by-nc-sa/3.0/ or send a
letter to Creative Commons, 444 Castro Street, Suite 900, Mountain View,
California, 94041, USA.

*/

var title='to call',
  date='2012-04-18', lk='en', l1='de', l2='it', lesson=
[
 ['def', "you", "du", "tu", "English: both subject and object. Italian and German: only subject."],
 ['def', "to call (out)", "rufen", "chiamare", "In person, e.g. by shouting."],
 ['def', "to call (up)", "anrufen", "chiamare", ["On the telephone that is by phone or by radio, etc. Synonyms: to ring, to phone.", "In German you have to add an an- prefix. This is commonly done in German to produce new meanings, more often than English and Italian: to form/formare, to inform/informare, to perform/performare. Like in English and Italian, not all prefixes have a meaning, and even if they have, it can be unrelated to that of a particular compound word, as in the case of anrufen. an- generally mean at, to. E.g. in ankommen, literally to come to, that is to arrive (arrivare), an- has indeed this meaning. Note the stress is on the an-: all separable suffixes are stressed, inseparable like un- are not stressed."]],
 ['def', "I", "ich", "io"],
 ['def', ["I call (out)", "I'm calling (out)"], "ich rufe", ["io chiamo", "chiamo"], ["This means to call in person. You commonly omit io and similar personal pronoun in Italian, unless you want to stress it. The action may happen both right now (I'm calling) or is repeated/usual (I call) or is scheduled in the near future, e.g. a promise (I will call) or a plan/intention (I'm going to call) . In all cases you can use the present in both German and Italian.", "German: ruf-en &rarr; ich ruf-e, -e sounds like the English schwa sound. Italian: chiam-are &rarr; (io) chiam-o, -o sounds like 'o' in 'point' never like 'o' in 'also', as always in Italian."]],
 ['tra', "you (subject)", "du", "tu", "Note this is a 'you' subject."],
 ['def', ["you (object)", "to you"], "dich", ["te", "a te", "ti"], "But 'you' object - that is when you can add to as in English 'to you' - is different in both languages. In Italian since 'to' is 'a', 'to you' is thus 'a te'. These words are all informal, both in German and Italian."],
 ['tra', "I'm calling you (out)", "ich rufe dich", ["ti chiamo", "chiamo te", "chiamo a te"], "To call out or in person. I am calling to you. 'Te', 'a te' go after the verb. 'ti' always goes between the subject - which can be missing but its place is still there - and before the verb, the first verb if there is more than one in sequence."],
 ['def', ["I'm calling (up)", "I call (up)"], "ich rufe an", "chiamo", "To call (up) by phone or other media. German: 'an' always has the stress on itself and not on the following root word and separates from the verb, that is it goes at the end of the sentence."],
 ['tra', ["I'm calling you (up)", "I call you (up)"], "ich rufe dich an", ["ti chiamo", "chiamo te", "chiamo a te"]],
 ['def', "tomorrow", "morgen", "domani"],
 ['tra', ["I'm calling you (up) tomorrow", "I call you (up) tomorrow"], "ich rufe dich morgen an", ["ti chiamo domani", "domani ti chiamo"]],
 ['def', "to stay", "bleiben", "stare", "bleib-en, st-are"],
 ['tra', "I", "ich", "io"],
 ['tra', ["I'm staying", "I stay"], "ich bleibe", "sto", "st-are &rarr; st-o"],
 ['tra', "to call up", "anrufen", "chiamare"],
 ['def', "I'm calling (up) (right now)", ["ich rufe an", "ich rufe jetzt an"], ["sto chiamando", "sto chiamando adesso", "adesso sto chiamando"], ["Instead of 'to be calling' in Italian we say 'to stay calling'. The -ando suffix corresponds to the -ing suffix, it denotes that the action (the call in this case) is in progress. Depending on the intonation, when you use adesso in Italian, it could just mean that you are calling right now or, if you both stress adesso and use an angry tone, it means 'do not bother me. I am busy calling now and cannot do anything else, e.g. listen to you'.", "In German if you want to precise the action happens now, you can add e.g. 'now' (jetzt, adesso), but there is no -ing form or equivalent: ich rufe jetzt an=I'm calling now."]],
 ['tra', "I'm calling you (up) (right now)", ["ich rufe dich an", "ich rufe dich jetzt an"], ["ti sto chiamando", "ti sto chiamando adesso", "sto chiamandoti adesso", "sto chiamando te adesso", "sto chiamando a te adesso"], "Remember, stare (to stay) is also used in the Italian equivalent of the English -ing form instead of to be. You can add io to all possible answers to stress the subject: it always goes at the beginning, as the first word."],
 ['def', "he calls", "er ruft", ["chiama", "lui chiama"], "German: ruf-en &rarr; ruf-t. Italian: chiam-are &rarr; chiama"],
 ['tra', "he stays", "er bleibt", "sta", "German: second b sounds like a p."],
 ['def', "who", "wer", "chi", "In Italian 'ci' is always pronounced like chee- in cheese (but the i is short) and it means 'to us' or 'there', depending on the context. 'Chi' is pronounced like 'key', but again with a short vowel sound. The h is silent, but it changes the word pronounciation and differentiates these two words different in writing."],
 ['tra', ["who is calling?", "who calls?"], ["wer ruft?", "wer ruft an?"], ["chi chiama?", "chi sta chiamando?"], "Remember that Italian uses inflection in questions more than German, even in those cases where it is clear from the structure and the words used that it is a question."],
 ['def', "good, thank you!", "gut, danke!", "bene, grazie!"],
 ['def', "goodbye!", "auf Wiedersehen!", "arrivederci!"],
];
