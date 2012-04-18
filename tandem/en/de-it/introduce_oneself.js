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

var title='Introducing oneself',
  date='2012-03-16', lk='en', l1='de', l2='it', lesson=
[
 ['def', "it", "es", ["esso", "essa"], "ess-o is masculine, ess-a feminine. Italian double consonants are always long: ss sounds like a long s."],
 ['def', "it is", "es ist", "è", "It should be esso/a è, but in Italian the subject is often understood, unless you want to stress it."],
 ['def', "name", "Name", "nome", "In Italian we only capitalize proper names, e.g. geographical names, people names, etc."],
 ['def', "the name", "der Name", "il nome", "Masculine, both in German and Italian, but beware, gender do not generally match! We must learn the article along with names. Note der has a long e sound."],
 ['def', "it is the name", "es ist der Name", "è il nome"],
 ['def', "my", "mein", "mio", "Masculine in Italian; masculine or neuter in German; there is no neuter gender in Italian."],
 ['tra', "my name", "mein Name", "il mio nome", "In Italian you have to use the article and say: the my name, not simply my name. Always use the before the possessive, except when the possessed noun is a specific family relative or in some idioms."],
 ['tra', "my name is Antonio", "mein Name ist Antonio", "il mio nome è Antonio"],
 ['def', "your", "dein", "tuo", ["Italian: masculine. My: mi-o, your: tu-o.", "German: masculine subject and neuter subject/object before a noun. My: m-ein, your: d-ein."]],
 ['tra', "your name", "dein Name", "il tuo nome", "Italian: the your name. Both dein and tuo are informal, e.g. when speaking to a friend."],
 ['def', "your name", "Ihr Name", "il Suo nome", "German Ihr and Italian Suo is a formal possessive. In English you always say your, even if you are speaking to the Queen. Note: mi-o, tu-o and Su-o all end with a -o."],
 ['def', "Charles", "Karl", "Carlo", "German l is weak. The final o in Carlo must be heard clearly. Almost all Italian words end with a vowel."],
 ['tra', "your name is Charles", "dein Name ist Karl", "il tuo nome è Carlo", "Translate informally."],
 ['tra', "your name is Antonio", "Ihr Name ist Antonio", "il Suo nome è Antonio", "Translate formally."],
 ['def', "how", "wie", "come"],
 ['def', "what", "was", ["che cosa", "che", "cosa", "quale"], "che=what, cosa=thing. The Italian for what is either che cosa (what thing) or even just one of these two word! Sometimes what is translated into quale, especially when translating the English word which, which is preferred when choosing between just two or three options. Qu in Italian is always pronounced like the English qu in quark, not like kv as in German."],
 ['def', "what is", "was ist", ["quale è", "qual è"], "In spoken language we often drop the -e of quale to speak faster and avoid a cacophony. There is no apostrophe, it is not qual'è because we do not consider it an elision but rather a truncation. Elision means replacing the final vowel of a word with an apostrophe because the following words begins with a vowel too. Truncation means just dropping the final vowel, regardless of whether the following word begins with a vowel or a consonant. Since quale in some idioms is spoken and written qual even if the next word begins with a consonant, it is reckoned as a truncation, not an elision, so no apostrophe should occur between qual and the next word."],
 ['def', "what's your name?", ["wie ist dein Name?", "was ist dein Name?"], ["qual è il tuo nome?", "quale è il tuo nome?", "come è il tuo nome?", "com'è il tuo nome?"], "This is the most literal translation of the English question both in German and Italian. In Italian you can use either what (quale) or how (come, corresponding to German wie) in this case, but you cannot use che cosa/che/cosa meaning what. In German what (was) is informal and less correct than wie too. Wie ist dein name is the recommended form for this meaning in German. Note that com'è is an elision and the apostrophe is thus needed; qual è is a truncation, hence there is no apostrophe."],
 ['def', "to call", "nennen", "chiamare", "meaning to name, to give a name, title, etc"],
 ['def', "to be called", "heißen", "chiamarsi", "meaning to call oneself, to have the name of, to be called, to be named. Chiamarsi is the reflexive version of chiamare, as it were sich heißen, but heißen does not exist as a reflexive verb in German; chiamarsi corresponds both to heißen alone, without sich, or to the reflexive version of nennen (sich nennen). Note that sich is si in Italian and we add it at the end, joined with the verb to form the reflexive infinitive."],
 ['def', "what is your name?", "wie heißt du?", "come ti chiami?", ["Another common way to ask what's your name? in both Italian and German is to use the verbs heißen and chiamarsi.", "If we want to say what's your name? in Italian we have to say how do you call yourself?, actually we don't use do and we put yourself before the verb: how yourself call? yourself is ti like dich in German; myself is mi in Italian, mich in German.", "chiam-are &rarr; (io) chiam-o &rarr; (tu) chiam-i; chiamarsi &rarr; (io) mi chiam-o &rarr; (tu) ti chiam-i. heiß-en &rarr; (ich) heiß-e &rarr; (du) heiß-t (not -st, because there is already ß)."]],
 ['def', "I", "ich", "io", "ch after i in German is like sh in English, but articulated a bit more back in your mouth."],
 ['def', "you", "du", "tu", ["Italian: you: tu, your: tuo.", "German: you: d-u, your: d-ein. Note how tu and du are similar, d becomes a t in Italian, but the u German in du is long. Both are informal.", "Italian: you: tu, your: tu-o. Italian u is short. Vowels in Italian are always short, they can optionally be long only if they are at the end of a stressed syllable, but not the end of the word. The u in tu is at the end of a syllable, but since it is the end of the word, it cannot be long. If you pronounce all the vowels in Italian as short vowels, it is fine, because even when a vowel can be long, it is not mandatory to make it long, just optional. This is to allow one to speak a bit faster."]],
 ['def', "you", "Sie", "Lei", "Both formal. German ie is a long i, the e at the end means that the i is long."],
 ['tra', "what is your name?", "Wie heißen Sie?", ["come si chiama?", "come si chiama Lei?", "Lei come si chiama?"], "This time be formal!"],
 ['def', "to be", "sein", "essere"],
 ['def', "not", "nicht", "non"],
 ['tra', "not to be", "nicht sein", "non essere"],
 ['def', "or", "oder", "o", "A conjunction used to express alternatives."],
 ['tra', "to be or not to be", "sein oder nicht sein", "essere o non essere"],
 ['tra', "I", "ich", "io"],
 ['def', "I am", "ich bin", ["sono", "io sono"], "to-verbs in Italian end with either -are, -ere or -ire. If to be were regular you would strip -ere from ess-ere and it would become ess-. You would then add an -o, and the result would be ess-o. Unfortunately this is another word, meaning it. This explains why essere is irregular: it's io sono, you cannot say io esso, it would be like saying I it in English. If you want to say I am, do not say io essere too, this is incorrect Italian. Essere is just to be, where that to means it's an infinitive. Essere must be conjugated when used with a subject like I: (io) sono. Bin, am, sono are the same thing and all irregular. They have to be used with I in the present."],
 ['def', "you are", "du bist", ["sei", "tu sei"]],
 ['def', "from", ["von", "aus"], ["de", "di", "da"], "There are many different translations for this preposition, depending on the context and idiomatic use. It is only right that we clarify the matter!"],
 ['def', "to be from", ["sein aus", "sein von"], ["essere di", "essere de"], ["German: note the English out derives from the German aus (s is changed into a t), so sein aus literally means to be out of a place, but also to be/come from a place. Von is literally from. sein von is still to be from, but not implying nationality, e.g. it could imply heritage.", "Italian: to indicate a place of origin we do not actually use from, which incidentally is da in Italian, but of. In other words instead of to be from we say to be of. There are two words for of in Italian: of is di if there is no definite article following and de if there is a definite article following. In the latter case de and the article very often join together in one word, therefore you rarely find de as a word by itself in Italian. Now if the noun is a city name, there should be no article following, unless the article is really part of the name of the city. So, for cities you very often say: essere di + name of the city, because when there is no article you have to use di, not de. But for a region, state or country name, the article is usually needed and you have to use de and not di, because di doesn't go together with a definite article, de does: essere + (de + article joined together) + name of the region/country/state."]],
 ['def', "Bavaria", ["Bayern", "das Bayern"], "la Baviera", ["German: das, the neuter definite article for a subject/object is optional in this case: (das) Bayern..", "Note that in Italian we call it Baviera, stress on the e and we put the feminine article la before."]],
 ['def', "I'm from Bavaria", "ich bin aus Bayern", ["sono della Baviera", "io sono della Baviera"], "Sono di Bavaria is incorrect in Italian. First because it is Baviera and not Bavaria as in English and second because it requires the feminine article: la Baviera. Therefore you have to say like (I) am of the Bavaria. In Italian when di (of) is followed by an article (that is you have the combination of the), di becomes de and  then de joins together with the following article: de il &rarr; del; de la &rarr; della (remember to pronounce the l of della as a double l, not a single one). Sono de la Baviera &rarr; Sono della Baviera. If you say: sono di Bavaria, an Italian could think that Bavaria is the name of a city and not a region/state, because you didn't use the article, but no city with that name really exists. So, there can be a misunderstanding if you forget to use the article!"],
 ['tra', "I am from Wunsiedel", "ich bin aus Wunsiedel", "sono di Wunsiedel", "Wunsiedel is a small town in Baviera. Cities and towns are never preceded by the definite article in Italian, unless it is really part of the name of the city. Therefore of is translated into di here, not de."],
 ['def', "to come", "kommen", "venire"],
 ['def', "I come", "ich komme", "io vengo", ["German: komm-en &rarr; komm-e", "Italian: ven-ire &rarr; (io) veng-o, irregular, we add a g, it's not veno."]],
 ['def', "to come from", ["kommen aus", "kommen von"], "venire da", ["Both aus and von mean from but aus here additionally implies place of origin, that is indicates nationality. That is kommen von is a bit like to be coming from in English, while to come from  is kommen aus. Germans likes to attach very precise meanings to prepositions and often have many variations of the same English or Italian preposition to express that.", "While to be from is really to be of in Italian, to come from can be translated literally from English, that is we use the Italian word for from along with to come, just as in English. From is da. So, to come from is venire da. When da is followed by an article, it joins with the article in one word. Just as we saw that de il &rarr; del and de la &rarr; della, we have: da il &rarr; da; da la &rarr; dalla."]],
 ['tra', ["I come from Calabria", "I'm coming from Calabria"], ["ich komme aus Kalabrien", "ich komme von Kalabrien"], ["sono della Calabria", "vengo dalla Calabria"], ["If you use aus in German it means that Kalabrien is your home, the place where you were born, if you use von just means that you are coming from there, that is where you started your journey before arriving where you are or it is just the place where you usually live, not your home country/city/region/...", "In Italian the article is required before region names. Calabria is feminine, indeed it ends with -a, so the article is la, not il. In Italian, if you use venire rather than essere, it remains ambiguous whether the place is actually your home region/city/country/..., you just travelled from there or just lived there before getting to where you are now. If you want to indicate nationality rather than just where you come from geographically, use essere and not venire. In German you make this distinction by changing the proposition, in Italian by changing the verb, in English by changing the present tense into the progressive tense."]],
 ['tra', "I am from Bavaria", ["ich bin aus Bayern", "ich komme aus Bayern"], "sono della Baviera", "Let's suppose Bavaria it's my home region and we want to state this precisely in both languages."],
 ['tra', "I'm coming from Bavaria", "ich komme von Bayern", "vengo dalla Baviera", "Here Bavaria is not your home, just the place you are coming from and we want to say precisely that in both languages."],
 ['tra', "I'm coming from Rome", "ich komme von Rom", "vengo da Roma", "It means you just started your journey from Rome, it is not your home town."],
 ['def', "where ... from", "woher", ["da dove", "di dove"], ["German: wo means where; her means to here. Literally woher means where to here, where hereto. The stress in on the second syllable (her).", "Italian: The choise between da and di depends on the verbs used after dove (dove just means where in Italian): choose da with venire (to come, expressing nationality or just geographical origin) and di with essere (to be, expressing only nationality in this case). de is not used in this question because there is no article after de, thus only di can be used."]],
 ['tra', "where are you from?", "woher bist du?", "di dove sei?", "Informal, singular."],
 ['tra', "where do you come from?", "woher kommst du?", "da dove vieni?", "Informal, singular."],
 ['def', "where are you from?", "woher sind Sie?", ["di dov'è?", "di dove è?", "di dov'è Lei?"], "This is the formal, more polite form, still singular."],
 ['def', ["to descend", "to be descended"], "abstammen", "discendere", "abstammen is the infinitive. Ab- is a separable prefix meaning from. Ab does not mean up, although they look similar in pronounciation. Up is auf in German. In spoken German, separable prefixes are stressed. In most cases when you conjugate a separable verb, the prefix separates and almost always goes at the end of the sentence. Italian has no separable verbs."],
 ['def', ["I descend", "I am descended"], "ich stamme ab", "discendo", "Note how you split ab from the infinitive abstammen and put it at the end!"],
 ['def', "discent", "Abstammung", "discendenza", "This is the noun, feminine in both languages, so the articles are die and la."],
 ['def', "the trunk", "der Stamm", "il tronco", "Both masculine. Stamm means trunk, but also line, lineage, in reference to a family tree, just like Abstammung. In Italian tronco is just a tree trunk as in English."],
 ['def', "tree", "Baum", "albero"],
 ['def', "I'm coming from Calabria", "ich komme von Kalabrien", "vengo dalla Calabria", "Meaning: I have just moved from my home to another place. In English you don't say I come from, because that would be a permanent truth, meaning that it is your home region."],
 ['def', ["I come from Calabria", "I am from Calabria originally", "I come from Calabria originally"], "ich stamme aus Kalabrien", ["sono originario della Calabria", "provengo dalla Calabria"], "Meaning: Calabria is my home, where I come from, this time we use a more specific verb for this meaning both in German and Italian, while in English you just add an adverb, originally. In this meaning you cannot use von after stamme, you have to use aus. In other words ich stamme von Kalabrien would be wrong. In Italian we use an expression more similar to the English to be/come from a place originally: essere originario di/de+article place name or you add a pro- before venire, making another verb, provenire, that corresponds to stammen."],
 ['def', ["I descend from Napoleon", "I am descended from Napoleon", "I'm a descendant of Napoleon"], "ich stamme von Napoleon ab", ["discendo da Napoleone", "sono un discendente di Napoleone"], ["German: note how you need to put ab at the end, separated from stamme.", "Italian: discend-ere &rarr; (io) discend-o"]],
 ['def', "to see", "sehen", "vedere"],
 ['def', "to see again", "wiedersehen", "rivedere", "ri- means again in Italian, just like wieder in German. ri- or wieder- are prefixes that before a verb mean to do the same action again."],
 ['def', "goodbye", "auf wiedersehen", "arrivederci", "ci means we in Italian. a-r-ri-veder-ci, ri means again, veder- to see (it's the truncation of vedere), ci, we and a means until. The r or rivederci is doubled, but until is a in Italian, not ar. Ar is not an Italian word. So, arrivederci in Italian is a expression meaning, literally: until we see again. Similarly auf wiedersehen means until again see."],
];
