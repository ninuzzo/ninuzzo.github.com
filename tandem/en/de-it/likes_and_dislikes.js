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

var title="Talking about likes and dislikes",
  date='2012-05-18', lk='en', l1='de', l2='it', lesson=
[
 ['def', "to like", "mögen", "piacere", "Italian: 'piacere' also means 'pleasure': the pleasure, il piacere."],
 ['def', "I like", "ich mag", "mi piace", ["German: mögen &rarr; ich mag, irregular", "Italian: it pleases me &rarr; (it) pleases to me &rarr; (esso/essa) piace a me &rarr; (it) to me pleases &rarr; (esso/essa) mi piace &rarr; to me pleases (it) &rarr; mi piace (esso/essa). 'It' (esso/essa for a thing or wild animal) is often understound. If expressed it can be put either at the beginning or the end of the sentence. 'mi' is 'to me' and equivalent to 'a me', but with less stress on 'me': 'piace a me' is also correct but used less frequently, only when there is a need to stress 'me', e.g. 'piace a me come a te' is preferred to 'mi piace come ti piace'. It means 'I like it as you like it'. If you say '(esso/essa) piace', without saying 'who' likes the thing, it means 'it is liked' by everbody or almost everybody, 'it is generally liked'."]],
 ['def', "I like it", "ich mag es", "mi piace", ["German: same structure as English, that is mögen is used just like to like. The subject is the one who likes, the object the thing liked.", "Italian: 'it' is understood, but again notice the sentence structure which is flipped: (it) pleases (to) me, (it) (to) me pleases. What in English is the subject (I) becomes the object in Italian ((to) me, a me after 'piace' or simply mi before 'piace'). What in English is the object (it) becomes the subject in Italian, often understood and for emphasis put at the end of the sentence rather than the beginning: mi piace esso. Remember this inversion. Piacere is always used in this inverted way in Italian, like 'to please' in English. This is a complication you have to get used with. You may just want to learn that 'I like' is 'mi piace', without too much thinking, but it is good for you to know the structure to make up more complex sentences with it. BTW 'mi piace a me', 'a me mi piace' are wrong if said with a plain tone, because 'mi' already means 'a me', so saying it two times is redundant. But, if you stress 'me' of 'a me' and you make a small pause, in writing marked by a comma as in 'a me, mi piace', everything is perfectly correct. Because in this case, the 'a me' part means 'as of me', 'if you want my opinion' or 'as far as I'm concerned', etc. Therefore, it is not a mere repetition and picky grammarians ought to accept it!"]],
 ['def', "the music", "die Musik", "la musica", ["German: stress on 'i' to be correct, but colloquially on 'u' as in English. The 'u' of Musik has an 'oo' sound, not a 'you' sound as in English.", "Italian: stress on 'u': mùsica."]],
 ['tra', "I like music", "ich mag Musik", "mi piace la musica", ["German: no article when speaking in general, as in English.", "Italian: I like the music. 'The' is needed, even if talking generally."]],
 ['tra', "I like Beethoven's music", "ich mag die Musik von Beethoven", "mi piace la musica di Beethoven", ["German: with a specific kind of music, the article is needed. And with proper nouns without 'the' use 'von' for 'of'.", "Italian: I like the music of Beethoven. B's A is 'A of B' in Italian."]],
 ['def', "much", "sehr", ["molto", "tanto"], "Italian: they are the same, with 'tanto' being a bit more informal."],
 ['def', "very much", "sehr", ["moltissimo", "tantissimo"], ["German: you do not usually translate 'very' directly, although there may be other indirect ways to say 'very', depending on the context. E.g. if you want to say 'thank you very much', that is 'danke schön', 'thanks beautifully' or 'vielen dank', 'many thanks'.", "Italian: you can still simply say 'molto/tanto' for 'very much' as well as 'much'. If you really want to translate 'very' - an this is done especially in informal language - substitute -o for -ìssimo and note the stress goes on the first 'i'."]],
 ['tra', "I like music very much", "ich mag sehr Musik", ["mi piace molto la musica", "mi piace moltissimo la musica", "mi piace tanto la musica", "mi piace tantissimo la musica"], ["English: 'very much' or, informally, 'a lot'. Both must be put at the end.", "German: sehr goes before Musik, just as in Italian!", "Italian: mind 'much' or 'very much' goes before 'the music'! You can use both words for 'much' (and 'very much'), four alternatives in total. 'The music' can also go at the beginning of the sentence. There is not difference in meaning if you put 'the music' at the beginning or at the end. Generally speaking, if you put it at the end, it means somethings like 'the music' and not something else, but it is not relevant in this case."]],
 ['tra', "I like it", "ich mag es", "mi piace"],
 ['tra', "I don't like it", "ich mag es nicht", "non mi piace", ["Both German and Italian do not use 'to do' to make negative sentences, you just put 'not'. In more formal English you can say: I dislike it.", "German: I like it not", "Italian: not to me pleases. The subject (it) can go either at the end or the beginning, but it is more often understood, so its position doesn't matter."]],
 ['def', "to cook", "kochen", "cucinare", ["German: o is short because there are two consonants following. It is very similar to English 'cook', in German you just add the usual -en ending for whole verbs and the 'k' becomes a guttural 'ch', as in Scottish 'loch'.", "Italian: stress on 'a': kutSinàre."]],
 ['tra', "I cook", "ich koche", "cucino", ["German: -en &rarr; -e.", "Italian: -are &rarr; -o."]],
 ['tra', "I like cooking", ["ich mag kochen", "ich koche gern"], "mi piace cucinare", ["Germans like to use 'gern', 'gladly', 'happily' and so the sentence 'I cook gladly' is a more common way to say 'I like cooking', but both are correct. 'gern' or 'gerne' is the same, you choose.", "Italian: 'I like to cook' which becomes '(it) to me pleases to cook'. There is no -ing form in Italian, we just use the full verb."]],
 ['def', "gladly", ["gern", "gerne"], ["volentieri", "con piacere"], "Italian: con piacere means 'with pleasure' and volentieri (stress on 'ie', which sounds like 'ye' in 'yes') means 'with will'. 'volentieri' is similar to 'voluntarily', although we have another word for that (volontariaménte), remembering this will help you to guess its meaning. Also note that 'to want', 'to have the will' is 'volere' and there is this root 'vol' in 'volentieri' too. 'ich koche gern(e)' would be 'cucino con piacere' or 'cucino volentieri' but you actually use it in Italian only if you want to offer your help to cook, e.g. if you are asked 'do *you* want to cook?' you can say 'yes, cucino volentieri/con piacere'. While in German such a construction is still a general statement meaning 'I like cooking', in Italian for this latter meaning it is more common to say 'mi piace cucinare'."],
 ['def', "I like cooking pasta", ["ich koche Nudeln gerne", "ich mag Nudeln kochen"], "mi piace cucinare la pasta", ["German: 'pasta' is countable in German: 'a piece of pasta' is 'die Nudel' (like noodles, which is just a long kind of pasta), 'but pasta' is 'die Nudeln' and the plural is needed because there are a lot of pieces of pasta in a dish of pasta.", "Italian: 'I like to cook the pasta'. 'La pasta' is mostly singular, 'le paste' is not wrong. It can be used in reference to different kinds/brands of pasta products, but 'a dish/plate of pasta' is always singular in Italian as in English: 'un piatto di pasta' ('ia' of 'piatto' sounds like ya or ja)."]],
 ['def', "to eat", "essen", "mangiare", ["German: Essen is also a city in Western Germany, in the Ruhr region, but it seems its name has nothing to do with eating. Its ancient name was Astnide and slowly transformed into Astnidum, Assinde, Essendia and Esnede. BTW in German 'das Essen' means 'the food'.", "Italian: 'i' is silent here: mandZàre. As you can see, Italian is not a perfectly phonetic language, but almost phonetic."]],
 ['tra', "I like eating", ["ich esse gerne", "ich mag essen"], "mi piace mangiare"],
 ['tra', "I don't like cooking, but I like eating", ["ich koche nicht gerne, aber ich esse gerne", "ich mag nicht kochen, aber ich mag essen"], ["non mi piace cucinare, ma mi piace mangiare", "cucinare non mi piace, ma mi piace mangiare", "non mi piace cucinare, ma mangiare mi piace", "cucinare non mi piace, ma mangiare mi piace"]],
 ['def', "I like cooking, but I like eating better", ["ich koche gerne, aber esse lieber", "ich koche gerne, aber ich esse lieber", "ich esse lieber als ich koche", "ich esse lieber als koche"], ["mi piace cucinare, ma mi piace di più mangiare", "mi piace cucinare, ma mangiare mi piace di più"], ["In both languages, there is a word for 'better' as in 'to feel better' (besser, meglio), but it is not used in this case, when expressing likings to a better degree. Italian uses 'of more/plus', that is 'di più'. In other words, you cannot say 'piacere meglio'. You have to say 'piacere di più'. German uses the other sentence construction, but with 'more gladly' instead of simply 'gladly'. There is a specific irregular word for the former: lieber.", "German: 'ich' can be left out in the second sentence. 'lieber gerne' is wrong, you cannot put a second 'gerne' or 'gern' because 'lieber' already means 'more gladly', 'più volentieri', 'con più piacere'! The last two translations mean, literally, 'I eat more gladly than (I) cook', or, said in unlikely but still correct Italian: 'mangio di più di quanto cucino' (I eat of more of how (I) cook) or 'mangio più volentieri/con più piacere di quanto cucino' (I eat more gladly of how (I) cook). These are both unlikely said in Italian. BTW 'when' is 'quando', but 'how' is 'quanto'. You can also put 'cucinare' ad the beginning of the sentence."]],
 ['def', ["I prefer eating to cooking", "I would rather eat than cook"], "TODO", ["preferisco mangiare che cucinare", "preferisco mangiare piuttosto che cucinare"], ["Here is another way to say the same thing!", "Italian: 'rather' is 'piuttòsto' and it is a nice addition to 'che' (that) - the sentence sounds more complete if you add 'iuttosto'. In other words when the alternatives you are talking about are expressed using verbs rather than nouns, Italian uses 'piuttosto che=rather than' instead of 'to', which would be 'a' and can only be used for nouns in this case: 'preferisco il pane alla pasta' or 'preferisco il pane piuttosto che la pasta=I prefer bread to pasta. 'preferisco mangiare a cucinare' would sound strange, 'a' cannot be be used between two verbs in this case. Here we have mangiare and cucinare; you can say 'andare a cucinare', but that means 'to go to cook', 'mangiare a cucinare' would mean 'to eat to cook' which does not have sense. It is correct to say: 'preferisco andare a cucinare', I prefer to go to cook (rather than to do something else). (io) prefer-isc-o is irregular from preferire, an -isc- (pronounced like -isc of 'disc') is added, because 'prefero' would sound ugly."]],
 ['tra', "I like it", ["ich mag es", "es gefällt mir", "das gefällt mir"], "mi piace", "German: you can also use 'gefallen', 'die Gefallen' means 'the pleasure' but also 'the favour'. BTW 'piacere' in Italian has this two different meanings too. A synonym for 'the favour' meaning is 'il favóre'. 'gefallen' is always followed by a 'to', so you need to put 'to me' or 'mir', not 'mich' which just means 'me'. 'gefallen' irregularly becomes 'er/sie/es gefällt', the 'ä' is stressed and pronounced like 'e'of 'bed'. Note how 'es gefällt mir' and 'esso piace a me' (it pleases to me) have exactly the same structure and word order. 'esso piace a me' is correct Italian, just a bit pleonastic. For that reason, it then undergoes other two simple transformations: 'esso' is left understood and 'a me', unless 'me' is stressed becomes 'mi' and shifts before the verb 'piace' and you have the short form 'mi piace'."],
 ['tra', "I don't like it", ["ich mag es nicht", "es gefällt mir nicht", "mir gefällt es nicht"], ["non mi piace", "a me non piace"], ["German: if you want to stress 'mir', you put it at the beginning. Informally, especially when speaking, you use the contracted version: mag es &rarr; mag's. 'ich mag nicht es' is not very common, you usually do not put 'nicht' before the object, unless you are in an (unlikely) context where you want to stress 'nicht'.", "Italian: 'I not like', or better '(it) not to me pleases'. If you want to stress that *you* do not like it, you use 'a me' instead of 'mi' in Italian and put it at the beginning. 'a me non mi piace' is wrong, unless it is 'a me (with a stressed me), (a short pause here) non mi piace'."]],
 ['def', ["I like it very much", "I like it a lot"], ["es gefällt mir gut", "das gefällt mir gut"], ["mi piace moltissimo"], ["English: 'a lot' is informal.", "German: it pleases to me good. You can use 'gut' for 'very much'.", "Italian: also tantissimo, tanto or just molto, the latter especially in formal situations."]],
 ['def', "to love", "lieben", "amare"],
 ['tra', "I love it", "ich liebe es", ["l'amo", "l'adoro"], ["German: 'es' object and 'es' subject happen to be the same, but this is not true for other words.", "Italian: when you say l'amo or l'adoro, it depends on the context whether you are referring to a thing or person, because 'lo' means both 'esso' or 'lui'. 'la' means 'essa', 'lei', but both 'lo' and 'la' before a vowel - very often but not necessarily - get elided into l' and this introduces even more ambiguity, not only about whether it is a person or thing, but also about the gender of the person or the thing! 'Amare' can be used for both things and people in Italian as in German or English. A bit less strong is 'adoràre', 'to adore'. Of course, you can also translate 'I love it' with 'mi piace moltissimo/tantissimo', because the meaning is the same."]],
 ['tra', "you love it", ["du liebst es", "Sie lieben es"], ["l'ami", "tu l'ami", "Lei l'ama"], ["German: lieb-en &rarr; du lieb-st, regularly. With a formal 'you': Sie lieben.", "Italian: am-are &rarr; (tu) am-i, regularly. With a formal 'you': Lei am-a."]],
 ['def', "I will love", "ich werde lieben", ["io amerò", "amerò"], ["English: you make the future using another verb, to will, as if you have a will in the future to do something or be in a certain state.", "German: as in English you use another verb, but a different one, werden, which by itself means 'to become'. So you become something in the future or, by extension, you do something in the future.", "Italian: we do not use another helping verb for making the future, but just different verb endings than the present. I'm loving, I love=(io) am-o, I'll love=(io) am-erò, both regularly."]],
 ['def', "you will love", ["du wirst lieben", "Sie werden lieben"], ["tu amerai", "amerai", "Lei amerà"], ["German: wirst, not werdst. It is irregular!", "Italian: am-are &rarr; (tu) am-i &rarr; (tu) am-erài, both regular."]],
 ['tra', "you will love it", ["du wirst es lieben", "Sie werden es lieben"], ["l'amerai", "l'amerà"], "Italian: the subject, 'tu' or formally 'Lei' can be espressed as well: tu l'amerai, Lei l'amerà. l' is the contraction of either 'lo' (masculine person or thing) or 'la' (feminine person or thing). So when you see l' you know nothing, it is just a placeholder for the object. You have to understand who or what it is from the context!"],
 ['tra', "thank you", "danke", "grazie"],
 ['tra', "thank you too", "danke dir auch", "grazie anche a te", "Italian: you can say 'grazie a te, anche' only if you forget to say 'anche' (too, as well) and you want to put it after a pause, at the last minute. But, most commonly, you put 'too' before 'to you', unlike English and German."],
];