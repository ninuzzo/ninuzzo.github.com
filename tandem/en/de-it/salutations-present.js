/*

Structural language learning and tandem method.
A JavaScript computer program for coaching.

Copyright (c) 2012 Antonio Bonifati http://ninuzzo.freehostia.com/about.html

This work is licensed under the Creative Commons
Attribution-NonCommercial-ShareAlike 3.0 Unported License. To view a copy of
this license, visit http://creativecommons.org/licenses/by-nc-sa/3.0/ or send a
letter to Creative Commons, 444 Castro Street, Suite 900, Mountain View,
California, 94041, USA.

*/

var title='Basic salutations, questions, designating the person speaking, talking about the present',
  date='2012-03-13', lk='en', l1='de', l2='it', lesson=
[
 ['def', "you", "du", "tu", "Both pronouns are informal. German tu and Italian du are quite similar. Phonetically, t is a d without vibration of your vocal cords. But while the German u of du is prolonged, the Italian u of tu is short, as always vowels are at the end of a word in Italian."],
 ['def', "to be", "sein", "essere", ["To introduces the infinitive in English. In German the same tense is marked by a suffix, the most common being -en. For two verbs that already end with a vowel, sein (to be) and tun (to do), there is no e in -en and the infinitive suffix becomes -n: sei-n and not sei-en, tu-n, not tu-en. A handful of other German verbs use -ern and -eln, adding a r or l between e and n.", "In Italian there are only three infinitive endings: statistically the majority of verbs end in -are, but the other two endings, -ere, as in ess-ere, and -ire are used for many common verbs."]],
 ['def', "I am", "ich bin", ["sono", "io sono"], ["I (ich, io) and all other personal pronouns are always expressed in English and German, but often understood in Italian, because conjugated verbs already tell who or what the subject is. We believe this is one of the reasons why it is worth to conjugate verbs and so we take advantage of that. Whenever pronouns are expressed in Italian, it is because the speaker wants to emphasize the subject. Io sono, with io explicitly stated, emphatically means I am, that is I and not you or he, etc. In English you express the same emphasis by stressing the I, in Italian just by not letting io understood and optionally stressing it with a stronger intonation.", "In all three languages to be is irregular. When the subject is I, in English be of to be, becomes am. In German sei- becomes bi- and the you add a non-regular suffix -n (not the regular -e and not even -en). In Italian ess- becomes son- and then you add the regular -o ending: son-o. In Italian, there is also a definite reason for this irregularity, which is to avoid ambiguity with another word: the regular form would be ess-o, but this is another Italian word meaning it (masculine)."]],
 ['def', "you are", "du bist", ["sei", "tu sei"], ["German regularly adds -st, but irregularly changes the sei- root into bi-.", "Italian regularly adds -i, but not to the infinitive root ess-, because ess-i already means they. Instead, -i is added to the irregular root se-."]],
 ['def', "how", "wie", "come"],
 ['tra', "how you are", "wie du bist", ["come sei", "come tu sei"], "Note there is no question mark, so this is not a question. In German and Italian, to be cannot be used to enquire about someone's health as in a salution. You need other verbs to do that! One verb that can idiomatically be used in this specific sense, both in German and Italian, is to go."],
 ['tra', "you are like you are", "du bist wie du bist", "sei come sei", "Like can be translated as how, both in German and Italian"],
 ['def', "to go", "gehen", "andare"],
 ['def', ["I go", "I'm going"], "ich gehe", "vado", "In German you regularly drop the -n from the -en ending (geh-en &rarr; ich geh-e), but in Italian this particular verb, andare, is irregular. You not only have to turn the -ere into -o, but also have to change the root and- into vad-: and-are, (io) vad-o."],
 ['def', ["You go", "You are going"], "du gehst", "vai", ["German: geh-en &rarr; du geh-st", "and-are &rarr; (tu) va-i. -are, -ere, -ire all become -i for regular verbs in the second singular person of the simple present tense. But andare is irregular and and- has to be changed into va-."]],
 ['def', "it", "es", "esso", "Note the German and Italian words for it are similar, but in Italian there is a double s. All double consonants must be prolonged in pronunciation in Italian, because sometimes that is the only difference between two different words! We do not double vowels anyway, except in some stressed sillable, but that is not mandatory and does not make a phonemic distinction. Most Italian words end with a vowel, for musical reasons! Only a few Italian words, some imported words (e.g. tennis) and many short prepositions end in a consonant."],
 ['def', ["it goes", "it is going"], "es geht", ["va", "esso va"], ["In German you strip -en and add a t, for regular verbs like this one: geh-en &rarr; es geh-t. The h after a vowel (not in a sillable beginning with h and not followed by another vowel) cannot be pronounced. It only serves to prolong the preceding vowel sound.", "In Italian you change the suffix -are of and-are into -a (as you do for all regular verbs ending in -are), but in this case there is an irregularity too: the root and- becomes v-, not vad- as in (io) vad-o, I go."]],
 ['def', ["how are you?", "how's it going?"], ["wie geht's?", "wie geht es?", "wie geht es dir?"], ["come va?", "come ti va?"], ["Both translations mean literally how's it going?, a salutation. The verb to go is used in this sense in Italian and German. To be cannot be used for this meaning as in English. There is neither an -ing form, nor a do auxiliary in Italian and German, the simple present tense is used instead, as if it were how goes it (to you)? (German), how (to you) goes? (Italian). The abbreviated forms are more commonly used, both in German and Italian. Anyway wie geht's? is more informal in German, while 'come ti va?' is still informal in Italian because it uses an informal pronoun (ti). Note that the subject (es) is always expressed in German but always understood in Italian: come (esso) va? come ti va (esso)?", "German dir and Italian ti (or a te) mean to you, that is a you implying to you. In grammar terms this is known as the dative case, an in giving something to you. A you subject, not implying to you, in Italian is tu and in German du. In grammar lingo this is called the nominative case."]],
 ['def', "to stay", "bleiben", "stare"],
 ['def', ["I stay", "I'm staying"], "ich bleibe", ["sto", "io sto"], ["bleib-en &rarr; ich bleib-e, -en becomes -e, regularly.", "st-are &rarr; (io) st-o. Remember: when the verb is regular in the first person singular (I, io) of the simple present tense, both -are, -ere and -ire verbs become -o."]],
 ['def', ["you stay", "you are staying"], "du bleibst", ["stai", "tu stai"], ["bleib-en &rarr; du bleib-st, regular; when a b is followed by an s in German it sounds like p. This rule exists to ease pronunciation. In Italian words the consonant cluster bs is less frequent, anyway the b in bs still sounds like a b and not like a p. Italian is an almost-phonetic language, which means that it is spoken the way it is written.", "st-are &rarr; (tu) st-a-i, not st-i, there is a small irregularity, we add an a. 'sti is a dialectal form for questi, meaning these (masculine)."]],
 ['def', ["how are you?", "how's it going?"], ["wie geht's?", "wie geht es?", "wie geht es dir?"], ["come stai?", "tu come stai?", "come stai tu?", "come va?", "come ti va?"], "In Italian either to go (andare) or to stay (stare) can be used to translate this English salutation. They are both informal and equivalent, and the difference between them is the same difference between how's it going?,what's up? and how are you? respectively. Stare (to stay) in Italian takes the place of to be meaning to feel in English. To stay in German, bleiben, can not be used in this sense, use only to go. Note that in Italian you have to use inflection, that is rise your voice a bit at the end of a question. Since the subject is usually understood, there is no subject that can be inverted with respect to the verb to signal a question. If you want to express the subject (you, tu) because you want to stress who the subject is, you can put it at the beginning (tu come stai?) or even at the end (come stai tu?), but even in the latter case inflection is still needed. If you put tu before the verb in an interrogative sentence, that is you say come tu stai?, it sounds strange, we always omit tu and simply say: come stai? In German using inflection for a question is optional, if there are other elements, like wie, that make evident it is a question. Italian changes intonation more often than German and English."],
 ['def', ["fine", "well", "good"], "gut", ["bene", "buono"], ["In Italian we have two words corresponding to the German gut and the three English words fine, well, and good: bene and buono. Bene is an adverb that goes after verbs, e.g. andare bene (to go well) and stare bene (to stay fine/well, meaning to be/feel fine/well), while buono is an adjective like good, so it goes before words like day, man, etc.", "Gut is both an adverb and an adjective in German, there is no difference between adverbs and adjectives in the German language.", "In English, good should only be an adjective, but informal English uses it as an adverb too, instead of well, fine. You cannot do this in Italian, e.g. you can not answer buono to the question how are you?, but you have to use the adverb bene, while in English you could informally answer good instead of fine.", "The first e in bene is a stressed open e sound (optionally a bit longer), the second e is closed and unstressed. E and o are the only vowels that have two sounds in Italian: one open and one closed. Anyway not all stressed e and o vowels are open in Italian, you have to learn openness of these two vowels case by case and it can make a subtle phonemic difference sometimes. The German u in gut is a long u just as in the English word good."]],
 ['def', "bad", "schlecht", "male", "This is a quite direct answer in the negative in all three languages. It is perhaps too direct so that, depending on the tone, it may even look angry or sad. We will soon see alternatives, anyway, male (not male meaning masculine in English, but the Italian word pronounced as written) comes from Latin malus, an adjective meaning bad, evil and you have the same Latin root in some English words like malice or malicious. This is a mnemonic for all English speakers to remember the meaning of male in Italian. The l in schlecht is a soft l. There is no hard l at all in German."],
 ['def', "very", "sehr", ["molto", "tanto"], "Molto is a bit more formal than tanto. They are generally interchangable, but some Italian idioms may require the use of a specific one. Tanto sometimes means so, just like così - see next slides."],
 ['tra', ["very well", "very good"], "sehr gut", ["molto bene", "molto buono"], "In Italian if you translate very with tanto it actually means so as in so good: tanto buono. When answering to how are you?, or meaning well done, you usually say molto bene, although tanto bene is not completely wrong, it just means so well/good, not very well/good. Use molto/tanto buono when complimenting the quality of someone/something, e.g. a food. In German you use gut for both meanings."],
 ['def', "not", "nicht", "non", "You have non as a suffix in many English antonyms, meaning not or without, eg. nonexistent, non-governmental, non-stop, etc. The Italian pronounciation of the o in non is a close-mid back rounded vowel, a bit different from the English open back rounded vowel 'o' of not. As the phonetic terminology suggests the Italian o is definitely more closed than the English o in this case, for closeness and tongue position, quite similar to the German long o sound but much shorter in Italian."],
 ['def', "not bad", "nicht schlecht", "non male", "Another possible answer to the question how are you?"],
 ['tra', "not very well", "nicht sehr gut", ["non molto bene", "non tanto bene"], "This is an euphemistic alternative to the too direct answer: bad. In Italian in this negative sentence you can use both words for very, the meaning is the same."],
 ['tra', "not very good", "nicht sehr gut", ["non molto buono", "non tanto buono"], "We want to use good, not well, fine in Italian here. In German it is still gut."],
 ['def', "so", "so", "così", "German s at the beginning of a word and if followed by a vowel is always a voiced s sound (your vocal chords vibrate while pronouncing s). English s in so as well as s in Italian così is voiceless or unvoiced. Italian tanto, a variation of molto, meaning much or very can sometimes correspond to so and thus be an alternative to così."],
 ['def', "so-so", "so lala", "così così", "Another colloquial answer to the question how are you?, meaning fairly well, passably, tolerably, neither very good nor very bad, could be worse, could have been worse, etc."],
 ['tra', "not so good", "nicht so gut", ["non molto buono", "non tanto buono", "non così buono", "non troppo buono"], "Note how in Italian in this case, where there is no as... clause following, we prefer molto/tanto to così, while so is used more often in German. We use tanto/così + adjective + come, but we do not use così + adjective by itself, we prefer molto/tanto + adjective in this case. Troppo is a more euphemistic way to say the same thing and literally means too, that is non troppo buono is not too good"],
 ['tra', "not so well", "nicht so gut", ["non così bene", "non molto bene", "non tanto bene", "non troppo bene"], "Alternative to not very well, the whole sentence would be: not so well as I should be/feel, as I normally am/feel. See a previous slide about the choice between così and molto/tanto/troppo, because it is the same rule whether you are using bene or buono. In a nutshell we do not use così here because there is no 'as I should' clause following."],
 ['def', "why?", "warum?", "perché?", ["German: the stress is on the second syllable, on the u. w is always pronounced v.", "Italian: stress on the last e, which is closed or constricted because it is at the end of the word. This is why the acute accent (é) should be used and not the grave one (è). The latter marks a stressed open e. Per means for in Italian and che means what. In ancient Italian the word perché was written as two separate words: per che. Therefore perché is actually a compound word literally meaning for what, that is both why and because. You have learnt three Italian words for one."]],
 ['def', ["per", "by means of"], "per", "per", "In this particular meaning, that is by means of, per is the same word in all three languages. As a matter of fact per comes unchanged from Latin. Per has a broader usage in Italian than English and German, because Italian derives directly from Latin, e.g. in Italian you also use per meaning for and für."],
 ['def', "per/by post/mail", "per Post", "per posta"],
 ['def', ["because", "for"], ["weil", "denn"], "perché", ["Note in English for is a bit more formal synonim for because, but it also has other meanings as in a present for you. We are only considering its meaning as because here in the German and Italian translations. Another difference in English is that for used in the sense of because needs a comma before and cannot be used at the beginning of a sentence.", "Italian: same as the interrogative why (perché).", "German: it has two words for because. If you start a sentence with because, use weil. Denn, like for in English used in the sense of because, cannot be used as the first word in a sentence (there may be exceptions). Otherwise, when for/because joins two indipendent clauses, you can use either. But remember that weil requires the verb to be the last word in a sentence, even if there is only one verb and it's not the infinitive!"]],
 ['def', "tired", "müde", "stanco", "This word is different between all three languages."],
 ['def', ["to tire (out)", "to make tired"], "müde machen", "stancare", ["From an adjective, Italian derives a verb directly, in this case by replacing the adjective ending -o with a verb ending -are. From stanc-o, stanc-are", "For this derivation German uses the same model of the English expression to make tired, to make is machen in German, but inverts the two words in the infinitive: müde machen, literally tired to make."]],
 ['trans', "Because I'm tired", "Weil ich müde bin", "Perché sono stanco", "Note that bin goes at the end of the sentence because we are using weil! Use denn to connect sentences. Use weil for connection or starting an answer."],
 ['def', "something makes me tired", "etwas macht mich müde", "qualcosa mi stanca", "Note me (not implying to me) is mich in German and mi in Italian, same pronounciation as English, but always a short i sound in Italian. Cosa means thing in Italian and is feminime, in fact it ends with -a. qual is a contraction of quale, meaning what, which, so that qualcosa is what thing, actually meaning that thing, that is an undetermined thing. stanc-are &rarr; -> stanc-a; mach-en &rarr; mach-t."],
 ['def', "how so?", "wieso?", "come mai?", ["German: wie + so, just as in English.", "Italian: come + mai, we do not use so here (we do not say come così? this combination does not exist in Italian) but instead of so we idiomatically prefer to use mai, meaning never, or ever (incidentally, the latter used in negative English sentences to avoid a double negation, something that is acceptable in Italian). Remember this interrogative combination of come and mai, means neither however nor how never, do not translate it literally! It actually means why?, how so?, how's that?, why is that?, how come?, how is it that?, etc"]],
 ['def', ["I'm fine", "I am well"], "es geht mir gut", ["va bene", "sto bene"]],
 ['def', "I'm so-so", "es geht", ["va così così", "sto così così"]],
 ['def', "I'm not doing well", "es geht mir schlecht", ["va male", "mi va male", "sto male"]],
 ['def', ["I'm so fine", "I feel so good"], "es geht mir so gut", ["sto proprio bene", "sto davvero bene", "va proprio bene", "va davvero bene"], "Proprio, davvero mean really. Vero means true, real. da can mean as/like/from/for/with depending on the context and idiom you find it in. So, davvero can be thought as a compound word meaning for real, really, truly. You can say sto così bene or va così bene, but only if you continue the sentence, e.g. in English I'm so fine that I ..."],
 ['def', ["what's up?", "what's going on?", "what's wrong?", "what's the matter/problem?"], "was ist los", ["che accade?", "che c'è?", "che succede?", "cosa è successo?", "che è accaduto?"], "An alternative to warum?, wieso? or perché?, come mai? los is used as a slang term here, meaning the matter. In Italian there are many ways to say the same thing, for instance che c'è? means literally what is there?, che accade/succede? what happens?/what's happening?, che è successo? what happened?/what has happened?. You can freely choose one between cosa, che, che cosa. They all mean what."],
 ['def', "and", "und", "e", ["Italian: closed e sound, é, but the accent is not marked. Marking it on the next word (see next slide) is enough to avoid mix-up.", "German: d at the end of a word or syllable always sounds like t."]],
 ['def', "is", "ist", "è", ["Italian: open e sound. It is mandatory to mark the grave accent to distinguish it from the closed e meaning and, see previous slide.", "German: the t after the s must be heard clearly!"]],
 ['def', "mother", "Mutter", "madre", "They all come from Latin mater, as in alma mater, literally nourishing mother, meaning the school, college, or university that one once attended. In ancient Italian it was matre, then the t became a d, indeed these consonants are phonetically near. The German tt in Mutter sounds double. Anyway, consonant length is not phonemic in German, while there are some distinct Italian words that differ only because of a single or double consonant."],
 ['def', "romantic", "romantisch", "romantico", "Literally of or in the Roman style. It means sentimental, emotional. The Italian word romantico surprisingly comes from English, that adopted it from the French romantique, in turn derived from the ancient word romant, that is romance, a story of love and adventure, strange happenings, wizards and fairies set in the Middle Ages."],
 ['def', "bridge", "Brücke", "ponte", "German and English versions are pretty similar, they come from the same old German language, while the Italian word is very different, because it comes from a completely different ancient language, Latin."],
 ['def', "the night", "die Nacht", "la notte", "In Italian night is feminine. If a singular noun ends in -a in Italian is always feminine, if in -o is always masculine, but if in -e you cannot tell a priori, you have to learn the gender by heart. In German Nacht is feminine, but not always Italian and German genders match. Moreover Italian has no neutral gender."],
 ['def', "good night", "gute Nacht", "buona notte", ["Italian: buono means good in the masculine. Night is feminine in Italian so the ending -o of buon-o has to be changed into -a: buon-a notte.", "German: die Nacht, feminine. But if you want to say good night, you cannot simply put gut before night, you need to inflect gut into gute. That -e carries the information about gender and is needed because there is nothing else to denote the gender, in this case not even an article. To make things more complicated, adjective endings must also provide case and number information and so they vary contexualy according to these aspects. There are three declensions, because depending on whether there are other inflected words to provide this information already, the adjective endings can be somewhat simplified. In Italian adjectives are only inflected by gender and number, not by case and not in a contexual way, because in Italian we make use of word order instead of cases, so there are much less endings to remember."]],
];