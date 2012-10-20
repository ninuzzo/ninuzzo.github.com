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

var title='to be into something',
  date='2012-10-19', lk='en', l1='de', l2='it', lesson=
[
 ['def', "to need", "brauchen", "avere bisogno di"],
 ['def', "will you wait for me here tomorrow", "wollen Sie morgen hier auf mich warten", "potrebbe/può aspettarmi qui domani?", "Italian uses potere for polite requests, German uses wollen (to want, volere). wollen Sie auf mich morgen hier warten is not a common worder order in German."],
 ['def', "I didn't have the time to do it, because I was very busy", "ich hatte nicht die Zeit, es zu tun, weil ich sehr beschäftigt war", "non ho avuto il tempo di farlo perché sono stato molto occupato/occupatissimo", "German uses the Präteritum (preterite), but Italian requires strictly the  Perfekt, even with haben, because it is understood that the state is completed (I have the time now, I am not busy now). It would be acceptable to translate with avevo and ero if the state is not completed or you do not want to say that. In Italian you can also omit the article and/or use per instead of di: non ho avuto (il) tempo per/di farlo."],
 ['tra', "I have no time", "ich hatte keine Zeit", "non ho tempo", ["In German, if you don't put the article before Zeit, you have to use keine.", "In Italian you can also say: non ho il tempo (to do something you mentioned before, which is understood). But generally speaking, without the article."]],
 ['def', "one another", "einander", ["l'un (con) l'altro", "a vicenda"], "German ander is very similar to English other."],
 ['def', "the exercise", "die Aufgabe", ["l'esercizio", "il compito"], "Italian compiere is to accomplish, to carry out, compito is what a student carries out during an exam or as homework and it is countable."],
 ['tra', "the exercises", "die Aufgaben", ["gli esercizi", "i compiti"]],
 ['def', "to solve", "lösen", "risolvere", "German lösen is very similar to English to loosen and it means the same, but in German also means to solve, to work out. This figurative meaning is known to Italian too: e.g. sciogliere il nodo della questione (\"to loosen\" the crux/heart of the matter) is quite a common Italian idiom. Note in English to loose is a literary variant of to loosen."],
 ['def', "to lose", "verlieren", "perdere", "In English the difference between to loose and to lose is just the pronunciation of the s, which is unvoiced for to loose and voiced for to lose. Fortunately to loosen is more common than to loose. This is an English problem, German and Italian use very different words for this meaning."],
 ['tra', "I didn't have the time to solve the exercises", "ich hatte nicht die Zeit, die Aufgaben zu lösen", "non ho avuto (il) tempo per/di risolvere gli esercizi", "Or: di fare i compiti."],
 ['def', "to brush up", "wiederholen", "ripassare", "Italian: ri-passare, to pass again (ri-, -wieder- both mean again). In German: to take again, since holen is to go and take. But one has to be careful that if the main stress is on wieder-, wiederholen means to fetch again, while if it is on holen, then wieder- is not detachable and that is the figurative meaning: to brush up, to revise. In Italian ri- is never stressed."],
 ['def', "to forgot", "vergessen", "dimenticare", "It commonly happens that t becomes s or ss from English to German or vice versa. The Italian word contains -ment-, which helps to remember the meaning of the word, if you know that mente is mind."],
 ['def', "therefore", "deshalb", "perciò", ["Italian: perciò is for that. You can also say: for this, per questo (two words) or pertanto (for much) or quindi (hence). Ciò and questo/quello are interchangeable in Italian when they refer to an abstract concept or reason. This is because the difference between far and near is immaterial in this case.", "German: halb is similar to half and it means the same. To remember the meaning of deshalb, think of it as it were: for what has been said half a page before."]],
 ['tra', "I have forgotten all, therefore I will have to/must brush up all", "ich habe alles vergessen, deshalb muss ich alles wiederholen", "ho dimenticato tutto, perciò devo ripassare tutto", "German: note we have two separated sentences in other words deshalb is a conjunction. deshalb does not shift the first verb at the end like weil. Note, since vergessen changes irregularly the vowel in its conjugation (du	vergisst, you forget), the past participle is the same as the infinitive."],
 ['tra', "I have forgotten that", "das habe ich vergessen", "ciò/questo/quello l'ho dimenticato.", "In Italian that is not enough, we like to add lo, as it were: I have forgotten it that. It is a bit of a repetition, but idiomatic."],
 ['tra', "I have forgotten it", "ich habe es vergessen", "l'ho dimenticato", "Wrong: es habe ich vergessen. The object (es) cannot go at the beginning of the sentence."],
 ['def', "to get used to something", "sich an etwas gewöhnen", "abituarsi a qualcosa", "Reflexive, both in German and Italian. gewöhnen is abituare, while wohnen is abitare (to inhabit, to dwell, to live). They happen to be similar both in Italian and German."],
 ['def', "I'm getting used to it", "ich gewöhne mich daran", ["mi ci abituo", "mi ci sto abituando"], ["ci in Italian (in this case) means a questo/ciò (to it). Indeed, you can also say: mi abituo/sto abituando a questo/ciò. So ci is a short form for a questo/ciò that goes between between the verb and the reflexive particle mi. In Italian you can also simply say: mi abituo, without anything else, but in German you cannot say only: ich gewöhne mich.", "German: ich gewöhne mich an es/das is wrong. Here is what happens: <table border=\"1\"><tr><td>an + es/das</td><td>da+r+an</td></tr><tr><td>auf + es/das</td><td>da+r+auf</td></tr><tr><td>um + es/das</td><td>da+r+um</td></tr><tr><tr><td>aus + es/das</td><td>da+r+aus</td></tr><tr><td>in + es/das</td><td>da+r+in</td></tr><tr><td>unter + es/das</td><td>da+r+unter</td></tr></table> <p>So da has to be used instead of es or das and it merges with the preposition. If the preposition starts with a vowel an <b>r</b> is also inserted between the two words, but if it starts with a consonant, no <b>r</b> is added, since none is needed to join them.</p> <table border=\"1\"><tr><td>mit + es/das</td><td>da+mit</td></tr><tr><td>für + es/das</td><td> da+für</td></tr><tr><td>durch + es/das</td><td>da+durch</td></tr><tr><td>hinter + es/das<td>dahinter</td></tr></table>"]],
 ['def', "to be into sth", "sich interessieren für etwas", "interessarsi di qualcosa", "Note in Italian the preposition that goes with this idiom is <b>di</b> (of), not <b>a</b>."],
 ['tra', "I'm into that/this", "ich interessiere mich dafür", "mi interesso/m'interesso di ciò/questo"],
];
