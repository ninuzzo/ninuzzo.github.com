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

var title='Scotland',
  date='2012-09-23', lk='en', l1='de', l2='it', lesson=
[
 ['def', "I'm going to eat now", "ich gehe jetzt (zu) essen", "adesso vado a mangiare"],
 ['def', "you don't need that 'zu'", "das 'zu' brauchst du nicht", ["quel 'zu' non è necessario", "non hai bisogno di quel 'zu'"]],
 ['def', "do you understand?", "verstehst du?", "capisci?", "Italian: comprendi? is also right, but a bit more formal in this case."],
 ['def', "my Italian is not good", "mein Italienisch ist nicht gut", "il mio italiano non è buono", "Italian: bene is wrong here, because it means 'well' not 'good'."],
 ['def', "my German isn't good either", "mein Deutsch ist auch nicht gut", ["neanche il mio tedesco è buono", "non è buono neanche il mio tedesco", "anche il mio tedesco non è buono"], ["Italian: you can use either neanche (neither/nor) with an affirmative sentence, anche (either, too, as well) with a negative sentence or even an apparently double negation (non and then neanche).", "German: Mein Deutsch ist nicht gut, auch is wrong. auch must be put before gut."]],
 ['def', "but we understand each other and that/this is the important thing, isn't it?", "aber wir verstehen uns und das ist die Hauptsache, nicht wahr?", ["ma ci capiamo e questo/quello è l'importante, vero?", "ma ci capiamo e questa/quella è la cosa principale/importante, vero?"], "German: das Haupt is 'the boss', il capo/principale, also figuratively."],
 ['tra', "the thing", "die Sache", "la cosa"],
 ['def', "enjoy your meal!", "guten Appetit!", "buon appetito!", "From French: bon appetit! In German the 'i' of Appetit is long and stressed. der Appetit, l'appetito, both masculine."],
 ['def', "yes, exactly!", "ja, genau!", ["sì, esatto/giusto!", "sì, precisamente!"], "We can use this e.g. to confirm that a translation is right."],
 ['def', "thanks for your correction", "danke für die Korrektur", "grazie per la correzione"],
 ['def', "the physics", "die Physik", "la fisica", ["Italian: stress on the first 'i'.", "German: stress on 'i', 'y' sounds like a short open u umlaut."]],
 ['def', "I have to stay there three years", "ich muss dort drei Jahre bleiben", "ci devo (re)stare/rimanere tre anni", "ci in Italian may also mean here. So it means either here or there, it is indeterminate, a bit like German da, although the latter mostly mean hier. But, unlike da, we often use ci to replace either lì or qui, without loss of precision, since its meaning is usually determined by the context."],
 ['def', "I study biology at the uni", "ich studiere Biologie an der Uni", "io studio biologia all'università", "You cannot abbreviate 'university' in Italian."],
 ['def', "is it very difficult?", "ist es sehr schwer?", "è molto difficile?"],
 ['def', "yes, if one wants to become a scientist", ["ja, wenn man will, Wissenschaftler zu werden", "ja, wenn man ein Wissenschaftler werden will"], ["sì, se si vuole diventare scienziati", "sì, se si vuole diventare uno scienziato", "sì, se uno vuole diventare uno scienziato"], "der Wissenschaftler. das Wissen is knowledge (conoscenza, sapere), wissen is to know (conoscere, sapere), Wissenschaft is science (scienza). Wrong: wenn man einen Wissenschaftler werden will, there is no accusative (enein Wissenschafteler), because there are two sentences and ein Wissenschaftler is the subject of the second, so not an object."],
 ['def', "'einen' is another case", "'einen' ist ein anderer Fall", "'einen' è un altro caso", "der Fall also means the fall (caduta)."],
 ['def', "Now I understand", "jetzt verstehe ich", "adesso/ora capisco"],
 ['def', "easy", "leicht", "facile"],
 ['def', "light", "leicht", "leggero", "German uses the same word for easy and light meaning lightweight."],
 ['def', "to say", "sagen", "dire"],
 ['def', "you say", "du sagst", "(tu) dici", "Italian: d-ire &rarr; (tu) d-i-ci, irregular. If it were regular, it would be d-i, but 'di' already means 'of', so we add a ci to disambiguate and make it a bit longer. For instance, to serve is servire (regular) and you serve is tu serv-i. So the regular ending of -ire verbs for tu is -i."],
 ['def', "you have", "du hast", "(tu) hai"],
 ['def', "said", "gewesen", "detto", ["German: for regular verbs, e.g. for sagen (to say, dire) you have: sagen &rarr; ge-sag-t (detto, said). But note verbs in -ieren are weak and do not add ge-: studier-en &rarr; studier-t.", "Italian: d-ire &rarr; (irregularly) d-etto. If it were regular it would be d-ito like serv-ire &rarr; serv-ito, but 'dito' already means finger (any finger, generically, similar to the English digit, indeed fingers can be used for counting). So we change the 'i' into an 'e' and also double the 't': d-ito &rarr; d-e-t-to."]],
 ['def', "you have said", "du hast gesagt", "hai detto"],
 ['def', "you have been", "du bist gewesen", "sei stato", ["Italian: you are been, since it is a condition, a state, we use to be and not to have as an auxiliary, just as in German!", "German: gewesen is irregular."]],
 ['def', "you said you (that) have been in Scotland", "du hast gesagt, dass du in Schottland gewesen bist", "hai detto che sei stato in Scozia", "'that' (che, dass) cannot be left out, both in German and Italian. Note been (bist, stato) goes at the very end of the sentence in German, because dass pushes it there. Also, the past participle used as a second verb always goes at the end in German: du bist in Schottland gewesen, you have been in Scotland, (tu) sei stato in Scozia. du bist gewesen in Schottland is wrong."],
 ['def', "already", "schon", "già", "Or 'before' in English, when meaning 'already'."],
 ['tra', ["you said (that) you have been in Scotland before", "you said (that) you have already been in Scotland"], "du hast gesagt, dass du schon/einmal in Schottland gewesen bist", "(tu) hai detto che sei già stato in Scozia", "Note this is not a question, just an affirmative sentence. In Italian you put already in the same position as in English, between the first and the second verb."],
 ['def', "once", "einmal", "una volta", ["German: compound of ein (one) and mal (time): onetime", "Italian: also: un tempo, if 'once' means 'formerly'."]],
 ['tra', "you said (that) you have been in Scotland once", "du hast gesagt, dass du einmal in Schottland gewesen bist", ["hai detto che sei stato in Scozia una volta/un tempo", "hai detto che sei stato una volta/un tempo in Scozia", "hai detto che una volta/un tempo sei stato in Scozia"]],
 ['tra', ["you said (that) you have been in Scotland before?", "did you say (that) you have already been in Scotland?"], "hast du gesagt, dass du schon in Schottland gewesen bist?", "hai detto che sei già stato in Scozia?", "Now this is a question. In Italian, nothing changes in structure, but be sure to use inflection to a question. In German, a subject-verb inversion suffices, but in Italian the only way to tell a question from a statement is inflection! So intonation is important in Italian. Rise your voice a bit at the end of the sentence to make it a question."],
 ['def', "once already", "schon einmal", "già una volta", "German: einmal schon is wrong, the wrong order."],
 ['tra', "you said (that) you have already been in Scotland once", "du hast gesagt, dass du schon einmal in Schottland gewesen bist", ["hai detto che sei già stato in Scozia una volta/un tempo", "hai detto che un tempo/una volta sei già stato in Scozia", "hai detto che sei già stato una volta/un tempo in Scozia"]],
 ['def', ["already... once", "once before"], "schon einmal", "già (...) una volta"],
 ['def', ["yes, I have already been there once", "yes, I have been there once before"], "ich bin schon einmal dort gewesen", ["sì, ci sono già stato una volta", "sì, ci sono stato già una volta"], "In Italian you can also use lì, but put it after stato. In German you cannot use da here, because you are now far away from Scotland, you have to be specific and use dort, there."],
 ['def', ["I was there once before", "I was already there before"], "ich war schon einmal dort", ["ci sono già stato una volta", "ci sono stato già una volta"], "Actually, German in this case (verb to be, sein, essere, an auxiliary) prefers 'war' (ich war, Präteritum, instead of ich bin gewesen, Perkeft), just like English prefers 'was'. Italian, on the other hand, prefers the perfect, in order to stress that the action is completed (I was, but I am no more there now). Italians perceive 'stato' like something passed: all past participles like stato, of all verbs, including to be and to have (so including auxiliaries) are completed actions for us. 'Io ero' is not completed or it still has some relationship with the present or with what you are saying or telling: c'era una volta means once upon a time, literally: there was a time. In this case was is translated with the imperfect era (it was). But: c'è stata una volta, would mean: there was and there is not any more. Then we also have: ci fu una volta, which is a remote past. The difference between 'ci fu una volta' and 'c'era una volta' is that the latter says nothing about how recent or remote the past is, while the former means there was a long time ago. So we have three tenses for the past in Italian, but I hope I have demistified them a bit! Anyway, just remember that ich war is often like ich bin gewesen in Italian. PS: In Austrian dialect, ich war schon einmal dort becomes: i wor scho amoi do."],
 ['def', "have I ever been to Italy?", "war ich nie/niemals in Italien?", "sono mai stata/stato in Italia?", "Both Italian and German use 'in'. Stata if the speaker is a female, stato if it is a male. This is a question you make to yourself, maybe trying to remember..."],
 ['def', "have you ever been to Italy?", "warst du schon einmal in Italien?", "sei mai stato/stata in Italia?", "Note in German ever is schon einmal, once before, while in Italian is it mai, which translates both ever and never (the latter by also adding another negation): I never go to Italy, non vado mai in Italia."],
 ['def', "no, never", "nien, nie", "no, mai", "nie/mai is never. Italian mai means both ever and never, in this case 'never', because it is supported by the negation expressed by 'no' before."],
 ['def', "no, not yet", "nein, noch nie/nicht", "no, ancora no", ["German: noch is 'still/ancora', nie is never, so 'noch nie' is 'still never' meaning 'not yet'. noch nicht means the same.", "Italian: ancora is anche+ora, anche=too, ora=now, toonow, but means tillnow, until now."]],
 ['tra', "yes, once", "ja, einmal", "sì, una volta", "the ein mal spelling is wrong, it has to be together!"],
 ['def', "see us (the) next time", "wir sehen uns das nächste Mal", "ci vediamo la prossima volta", ["Italian: prossima comes from Latin proxima. The 'x' of Latin becomes double s in Italian. E.g. Proxima Centauri is the nearest star, the next star after us, although it cannot be seen with the naked eye.", "German: because ä sounds like an Italian open 'e' (e.g. the first 'e' of 'bene'), and a,e,o are back-vowels (compared to i,u, which are front-vowels), che ch sounds like a back sh sound, to minimize tongue movements. So it is /\"nE:Cst@/, with a long 'e'. Also, nächst must be inflected into nächste."]],
];
