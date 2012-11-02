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

var title='Do not worry, the dog is good',
  date='2012-11-01', lk='en', l1='de', l2='it', lesson=
[
 ['def', "the dog", "der Hund", "il cane", ["Italian: Cane is like canine in English, which is canino in Italian.", "German: Hund is like hunt in English. Indeed dogs have been extensively used for hunting."]],
 ['def', "good", "gut", "buono", "Tasty, but also quiet, both meanings in all three languages."],
 ['def', "well", "gut", "bene", "In Italian you cannot use good for well. You can sometimes formally in English (e.g. I'm good for I'm well), but not in Italian. No problem in German, well and good are the same: gut."],
 ['def', "is", "ist", "è"],
 ['def', "it is", "es ist", "è", "In Italian it is esso/essa. But it is often clear from the context who or what you are talking about and so we leave it out."],
 ['tra', "it is the dog", "es ist der Hund", "è il cane", "An answer to the question: what's that?, who made that noise?, etc."],
 ['tra', "the dog is good", "der Hund ist gut", "il cane è buono", "Meaning it is quiet, it doesn't bite."],
 ['def', "to worry", ["sich sorgen", "sich Sorgen machen"], "preoccuparsi", ["Italian: to worry is to preoccupy. pre-=before, occupare=to occupy, so preoccupare is literally to occupy before, to occupy your mind before with worries.", "German: machen=to make, sich=oneself,-si, sorgen=to occupy, sich sorgen=to occupy oneself, preoccuparsi, but it is also common to say: oneself worries make, to make oneself worries: sich Sorgen machen."]],
 ['def', "worry", "Sorge", "preoccupazione"],
 ['def', "worries", "Sorgen", "preoccupazioni", ["Italian: -e becomes -i", "German: -e becomes -en"]],
 ['def', "action", "Aktion", "azione", "This word is sometimes used in Italian to build a noun from a verb. Eg. from preoccupare (to worry/preoccupy), you have the concept worry (preoccupazione) or worries (preoccupazioni)."],
 ['def', "it is a bad action", "es ist eine schlechte Aktion", ["è una cattiva azione", "è una brutta azione"], ["German: ein-e and schlecht-e tell you that Aktion is die Aktion. Both words have to take the ending -e.", "brutt-a tells you that azione is feminine: la azione &rarr; l'azione. -e ending in Italian can be either masculine or feminine. Unlike endings -a and -o, it does not give you any hint. cattiva (evil, nasty) is more appropriate than brutta in this case, but the latter can also be accepted informally."]],
 ['def', "bad", "schlecht", ["cattivo", "cattiva", "brutto", "brutta"], "-a ending is for feminine in Italian, -o is for masculine, with a very few exceptions. Literally cattivo/a means more evil, while brutto is ugly, but brutto referred to an action, a deed cannot mean ugly, deeds are not beautiful or ugly. It will rather mean, figuratively, evil, as if ugliness would automatically imply wickedness, just like in fairy tales :)"],
 ['def', "not", "nicht", "non"],
 ['def', "yourself", "dir", ["ti", "a te"], "Italian: the long version is a te, but only used if you want to stress you: to you and not to someone else. If you do not need or want to stress you, te becomes ti, without a before."],
 ['tra', "don't worry", "mach dir keine Sorgen", "non ti preoccupare", ["Italian: (you) not yourself preoccupy. The Italian grammatical sentence most similar to: mach dir keine Sorgen is: non farti alcuna/nessuna preoccupazione. n-essuna corresponds to k-eine (n- is the n- of non, so it is a negation). Italian uses double negation if nessuna is used along with non. If you want to avoid a double negation, you can use alcuna (any) instead of nessuna. Alcuna does not contain any n-, so you use it along with non. For masculine you have alcuno/nessuno, of course. Anyway, non farti nessuna preoccupazione in Italian does not mean to not worry about a danger, but it rather means you're welcome. The former meaning is just: non ti preoccupare.", "German: make to you no worry, not a worry: k-=not and -eine=a, so keine means: not a. You cannot use nicht, you have to use k- to negate."]],
 ['tra', "I have no worries", "ich habe keine Sorgen", ["non ho alcuna preoccupazione", "non ho nessuna preoccupazione"], "Hint for Italian: (I) not have any worry, or: (I) not have no [no one] worry. Worries is used in English and German, but worry in Italian."],
 ['tra', "don't worry, the dog is good", "mach dir keine Sorgen, der Hund ist gut", "non ti preoccupare, il cane è buono"],
];
