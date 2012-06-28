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

var title="Shopping",
  date='2012-06-28', lk='en', l1='de', l2='it', lesson=
[
 ['def', "I", "ich", "io"],
 ['def', "to be", "sein", "essere", "In some cases you translate 'to be' with 'zu sein' or 'per essere'. This happens when it means 'for to be', where 'for to' is just 'to' in English, e.g.: froh zu sein, per essere felice, to be happy."],
 ['def', "I am", "ich bin", ["sono", "io sono"]],
 ['def', "here", ["hier", "da"], ["qui", "qua"], ["German: da means both 'here' and 'there', depending on the context and if you can show with your finger.", "Italian: qua is a bit more indeterminate than qui, but it cannot mean 'there', it still means near you, somewhere but not far away."]],
 ['tra', "I am here", "ich bin da", ["sono qui", "sono qua"]],
 ['def', "Italy", "Italien", "Italia", "Italian words very often end with a vowel."],
 ['tra', "I am in Italy", "ich bin in Italien", "sono in Italia", "'In' is 'in' in all three languages in this case."],
 ['def', "the shop", "der Laden", "il negozio", ["German: Laden also means 'window shutter', indeed most shops have one.", "Italian: negozio is like to negotiate (negoziare), negotiable (negoziabile). A place where you haggle, you negotiate prices."]],
 ['tra', "I'm in the shop", "ich bin im Laden", "sono nel negozio", ["German: im=in dem, der Laden subject becomes dem Laden object. You never use 'in dem', it is always shortened into 'im'.", "Italian: il negozio, subject or object is the same, but in + article always becomes ne + article, indeed ne coalesces with the article into only one word only, this way: ne + il &rarr; ne + l &rarr; nel. You always use 'nel' and never 'ne il' or 'neil'. The reason for this? We just think that 'in il' sounds ugly and is more difficult to utter."]],
 ['def', "wrong", "falsch", "sbagliato"],
 ['def', "right", "richtig", "giusto", ["German: there are two ich-like sounds here. -ig also sounds like ich in standard German. Some local variations and dialects shorten it to an ik (eek) sound.", "Italian: giusto is akin to English just and justice, indeed it means both right and just (said of a person or a think, e.g. a deed, a comment etc)."]],
 ['def', "to cost", "kosten", "costare", ["German whole-verb endings are: -en, -ern, -eln, -n, e.g. sei-n.", "Italian full-verb suffixes are: -are, -ere, -ire, e.g. ess-ere."]],
 ['def', "it", "es", ["esso", "essa"], "Italian: it and other similar words to denote a subject are often understood, unless you want to stress that the subject is right that and not another."],
 ['def', "it costs", "es kostet", "costa", "Italian: (esso/essa) costa, but the subject is understood."],
 ['def', "four", "vier", "quattro", ["German: vier and four are quite similar. V always sounds like f.", "Italian: quattro as in quadruple, a kwah or quah sound, not kv. Double consonants are always prolonged, so do not say 'quatro', with a short 't'."]],
 ['def', "euro", "Euro", "euro", ["German: eu always sounds like oi. Note all nouns are capitalized in German.", "Italian: eu sounds eu, that is 'ehoo' (but the h is silent, it is there just to show the pronunciation of the Italian 'e' which is always 'eh')."]],
 ['def', "euros", ["Euro", "Euros"], "euro", ["German: if you refer to a number of one-euro coins, you use Euros, but a price, a sum of money, e.g. four euros is 'vier/4 Euro', without 's'.", "Italian: there is no plural for this particular currency name: quattro euro. If it existed, the plural word would be 'euri', but that is considered wrong and not used, not even to denote a certain number of one-euro coins."]],
 ['tra', "it costs four euros", "es kostet vier Euro", "costa quattro euro"],
 ['def', "you", "du", "tu", "'You' subject."],
 ['def', "you", "dich", "ti", "'You' object."],
 ['tra', "it costs you four euros", ["dich kostet es vier Euro", "es kostet dich vier Euro"], "ti costa quattro euro", ["German: 'to you costs it four euro(s)'", "Italian: '(it) to you costs four euro(s)'"]],
 ['def', "for", "für", "per", "Italian uses 'per' for 'for', the same word you can find in some English expressions of frequency, like 'per month', although Italian does not use 'per' for the latter but 'to': al mese (literally, 'to the month')."],
 ['tra', "for you", "für dich", "per te", "Italian: before a verb you always use 'ti': ti costa, it costs you. But If you want to say 'to you', 'for you', after 'to', 'for' and similar words, you have to use 'te' instead of 'ti'. Another example: 'a te', 'to' is simply 'a' in Italian. 'a ti', 'per ti' is wrong."],
 ['tra', "for you it costs four euros", "für dich kostet es vier Euro", "per te costa quattro euro", "'For you' here means 'only for you', it is a special price!"],
 ['def', "how much", "wie viel", "quanto", "Italian has one specific word for 'how much', which is akin to 'quantum' as in 'quantum physics'. Indeed both 'quanto' and 'quantum' come from Latin 'quantum'."],
 ['tra', "how much does it cost?", "wie viel kostet es?", "quanto costa?", "Both Italian and German do not use 'to do' for questions and negative statements: 'how much costs it?'. Note 'it' is left out in Italian. In Italian the interrogative tone or inflection is mandatory, although the structure of the sentence and the presence of 'quanto' already make it clear that it is a question."],
 ['tra', "it costs four euros", "es kostet vier Euro", "costa quattro euro"],
 ['def', "goodbye", "auf wiedersehen", "arrivederci", ["German: auf wieder-sehen, until again to see", "Italian: a-r-ri-veder-ci, to again see us/ourselves. 'vedere' is to see, sehen."]],
 ['tra', "see you", "wir sehen uns", "ci vediamo", "Italian: (noi) ci vediamo, 'ci' means uns, it is a 'we' but object not subject, just like 'us' in English. 'ia' of 'vediamo' sounds like 'ya' or 'ja', one vowel sound."],
 ['tra', "ciao", "tschau", "ciao", "Informal salutation. In Italian it can be used both when meeting and when leaving someone, so it means both 'hi/hello' and 'bye/see you'. It has been imported into both English and German too. The German spelling can also be like the Italian one. Note the 'i' is silent: /tSao/."],
];
