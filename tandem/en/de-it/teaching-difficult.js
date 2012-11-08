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

var title='Teaching is difficult',
  date='2012-11-07', lk='en', l1='de', l2='it', lesson=
[
 ['def', "the course is good", "der Kurs ist gut", "il corso è buono"],
 ['tra', "the German course is not good", "der Deutschkurs ist nicht gut", "il corso di tedesco non è buono", ["German: use compound word. der deutsche Kurs means: il corso tedesco.", "Italian: the course of German, genitive with preposition"]],
 ['def', "the German course is not so good", "der Deutschkurs ist nicht so gut", "il corso di tedesco non è molto/tanto buono", "Italian: not much good. so is così, but you only use it in a comparison (so/as... as)."],
 ['def', "it has to/must", "es muss", "deve", ["German: this is a handle and so it does not change", "Italian: dov-ere &rarr; (esso) d<i>e</i>v-e, the o is changed into e because dove means where and we want a different word."]],
 ['def', "it should", "es sollte", "dovrebbe"],
 ['def', "it should be", "es sollte sein", "dovrebbe essere"],
 ['def', "as", "wie", "come", "Both italian and German: just like how at the beginning of a sentence, a question"],
 ['tra', "the German course is not so good as it should be", "der Deutschkurs ist nicht so gut wie er sein sollte", "il corso di tedesco non è tanto/così buono come dovrebbe essere", ["German: watch out for the subject: it is masculine. Moreover it is a weil situation.", "Italian: with comparative sentences do not use molto but the other word for molto that means the same, or the word for così. Both words have the meaning of enough in this case of a negative sentence: it is not enough good. Indeed you can also say: il corso di tedesco non è abbastanza buono come dovrebbe essere, bastare is to be enough and abbastanza (stress on second a) means enough."]],
 ['def', "it is simple", "es is einfach", "è semplice", "German: Fach means subject (materia, disciplina; disciplina is only a subject of study, while materia also means physical matter, depending on the context). A way to remember einfach: remember that a subject is simple, or: a simple subject."],
 ['tra', "that is simple", "das ist einfach", "questo è semplice", ["German: there is one generic word which is used when the subject can be either that or this.", "Italian: we prefer to say this, although you can also use that, especially if it isn't one of your ideas, you feel it emotionally distant from you, it is off-topic or not what you have been talking about till now etc."]],
 ['def', "it is easy", "es ist leicht", "è facile", ["German: easy is like light, leicht: easy to lift.", "Italian: to remember facile, remember that it starts with the f, just like to do/make (fare) (something easy is usually easy to do, to do or fare is the most common verb easy refers to) and is similar to its opposite difficult (difficile)."]],
 ['def', "to teach", "lehren", "insegnare", ["German: similar to to learn (lernen). To teach and to learn are similar in German.", "Italian: to give sign(s), to in sign. Sign is segno (not to be mistaken with sogno, dream). Since we usually believe that dreams are premonitory, they foretel the future, remember that un sogno è un segno, a dream is a sign (a clue) and that will helps you to remember what sogno is if you know segno and to differentiate their meaning."]],
 ['tra', "teaching is easy", "lehren ist einfach", "insegnare è facile", "German and Italian: teaching is just to teach, the full verb. There is no -ing form which makes a noun out of a verb as in English."],
 ['def', "difficult", "schwer", "difficile", "German: same as heavy."],
 ['tra', "teaching is difficult", "lehren ist schwer", "insegnare è difficile"],
 ['tra', "the German course is not very good but teaching is not easy", "der Deutschkurs ist nicht sehr gut, aber lehren ist nicht einfach", "il corso di tedesco non è tanto buono ma insegnare non è facile", "Italian: tanto is preferred to molto, because it has more the meaning of as it should be, come dovrebbe essere, which is indeed understood here. Anyway, you can still use molto or even buonissimo, if you want want to say very good in the negative."],
 ['def', "this is the money", "das ist das Geld", "questi sono i soldi", ["Italian: soldo is coin, which is also moneta. The latter is more similar to money, while the former is akin to soldier (soldato, Soldat). Roman soldiers were paid with money and also salt (sale), from which salary, salario comes. Soldo is coin, and soldi means both coins and, collectively and generically money and so, unlike German and English, it is plural, just like a bunch of coins is."]],
 ['def', "I'm doing", "ich tue", "(io) faccio"],
 ['def', "I would do/make", "ich würde tun", "(io) farei", ["German: it is irregular, it should be werdeten or ich werdete from werden but it is würden, ich würde", "Italian: you just use verb endings, not another helper verb: f-are &rarr; f-arei, regularly, while e.g. dov-ere &rarr; dov-erei &rarr; dovrei (the e is dropped to make it one syllable shorter: do-ve-rei is three  syllabes, while do-vrei only one, this is a little irregularity)."]],
 ['def', "I would like", "ich möchte", ["mi piacerebbe", "vorrei"], ["German: from mögen.", "Italian: literally I'd like is mi piacerebbe, which structurally is: it to me would please, but we also use: I would want, vorrei, to want volere. In this mood (conditional) to want is still polite in Italian, even if you are asking someone to do something for you."]],
 ['def', "I don't know", "ich weiß nicht", "non so"],
 ['tra', "I don't know what to do", "ich weiß nicht was zu tun", "non so cosa fare", ["German: you have two sentences: I don't know is one and to do is another. You need a connecting word (to, zu), although in English the to in to do signifies just the whole verb, so there is no connector, that is needed in German.", "Italian: no connector as in English. What is what (thing) and as usual, you have three choices: just che, just cosa, or both: che cosa."]],
 ['tra', "I don't know how to do", "ich weiß nicht wie zu tun/machen", "non so come fare", "Italian: to do/make is just one verb."],
 ['def', "I don't know what I must/have to do", "ich weiß nicht was ich machen muss", "non so che (cosa)/cosa devo fare"],
 ['def', "I don't know what I should do", "ich weiß nicht was ich machen sollte", "non so che (cosa)/cosa dovrei fare"],
 ['def', "I don't know how to do it", "ich weiß nicht wie ich es tue", "non so come farlo", "German: less common variant (where the comma is mandatory): ich weiß nicht, wie es zu tun."],
 ['def', "I don't know how I should do", "ich weiß nicht wie ich tun sollte", "non so come dovrei fare"],
 ['def', "I don't know how I should do it", "ich weiß nicht wie ich es tun sollte", "non so come dovrei farlo"],
 ['def', "to find", "finden", "trovare", "Italian: trovare is akin to trove in treasure trove, a treasure (tesoro, Schatz) found again that becomes property of the state. So to find in Italian is to find a treasure trove, trovare."],
 ['def', "to find oneself", "sich finden", "trovarsi"],
 ['def', "I find myself", "ich finde mich", "mi trovo"],
 ['def', "the situation is difficult", "die Situation ist schwer", "la situazione è difficile"],
 ['def', "in the situation", "in der Situation", "nella situazione", "die Situation, but in the situation is: in to the situation in German, because in wants to, so the feminine die becomes der masculine. So: in die &rarr; in der and similarly in eine &rarr; in einer. But in die becomes in der only if die is the singular, in die plural instead becomes den: in den (neuen) Situationen, in (neuen) Situationen, nelle (nuove) situazioni, in (nuove) situazioni."],
 ['tra', "I find myself in a new situation", "ich finde mich in einer neuen Situation", "mi trovo in una situazione nuova", ["German: eine Situation, but in wants the masculine: einer. Since einer already has the strong ending -er, neuen takes the weak ending -en.", "Italian: not any situation which is new because I am just into it, but a NEW (quite special) situation. This is why new goes after situation and not before!"]],
 ['tra', "when I find myself in a new situation I don't know what to do", "wenn ich mich in einer neuen Situation finde, ich weiß nicht, was zu tun ist", "quando mi trovo in una situazione nuova non so che (cosa)/cosa fare", "German: I know not, what to to do is, what it is to be made, what must be made."],
 ['def', "I know what I want to do, but I don't know where to begin", "ich weiß, was ich machen will, aber ich weiß nicht, wie es zu tun ist", "quanto a me, io so cosa voglio fare, ma non so come", ["This is a famous sentence by Sir Francis Bacon (Francesco Bacone). Translations are not litera, but you can know understand them.", "Italian: quanto is how much, but quanto a means: as of me, personally. The Italian translator chose to add this."]],
];
