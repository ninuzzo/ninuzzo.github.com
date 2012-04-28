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

var title='Live your life as if every day were your last',
  date='2012-03-05', lk='en', l1='de', l2='it', lesson=
[
 ['def', "I", "ich", "io", "Often understood in Italian, always expressed in German. After 'i', the German 'ch' is pronounced like a back or whispered sh sound."],
 ['def', "to live", "leben", "vivere", "Italian vowels in vivere are short, optionally the 'i' is longer. First 'e' in leben is long, second short and neutral, often left out. In Italian, vowel or consonants are almost always pronounced, except the h, which is always silent."],
 ['def', "I live", "ich lebe", "io vivo", ["viv-ere &rarr; viv-o; leb-en &rarr; leb-e", "Almost all italian infinitives end in -are (that is this is the most frequent suffix), others in -ere, -ire. The majority of German infinitives end in -en, very few in other endings, like -n only."]],
 ['def', "life", "Leben", "vita", "Vita, like vital in English. Same as the verb leben in German but with a capital 'l'. German capitalizes all nouns, not only proper ones. This makes very simple to tell whether a written word is a noun or not."],
 ['def', "the life", "das Leben", "la vita", ["Feminine in Italian, neuter in German. Genders must be memorized!", "'La' is the Italian singular feminine definite article in all cases. 'Das' is the German neuter definite article for subject and objects, but only when there is no 'to' and 'of' before the noun in English. This is a strange feature of German: articles carry case information, that is they change form according to linguistic case!", "In English there is no gender at all. In Italian there is no neuter gender, that is all nouns are either masculine or feminine. Nouns ending in -a are generally feminine, nouns ending in -o are generally masculine (there are some exceptions, but not many), but the gender of those ending in -e must be memorized because it varies a lot. In German the highest percentage of nouns are masculine, but rules are complex. It is better to learn any new German noun along with the definite article that goes with it. In this case you can tell that vit-a is feminine because of the -a, and the definite article that goes with it is l-a, both ending in -a. In German all infinitives used as nouns are are neuter: leben, das Leben"]],
 ['def', "my life", "mein Leben", "la mia vita", ["'the my life' in Italian, definite article required. German, as English, never uses the definite article before the possessive.", "In Italian my is mi-o with singular masculine nouns, mi-a with singular feminine nouns. mi-a vit-a, mio here is changed into mia, to agree with the gender of the possessed object (life, vita), not with the possessor. In German, for a singular subject, my is mein, for both masculine and neuter nouns. The feminine, in a subject, is mein-e", "ei (as in Einstein) is always pronounced /aI/ in standard German. It is pronounced /eI/ in the Austrian German spoken in Vienna, but that is a dialect with a limited diffusion. In Italian vowels are pronounced as written."]],
 ['tra', "I live my life", "ich lebe mein Leben", "(io) vivo la mia vita", "For a neuter object without implying 'of' or 'to', my is still mein in German."],
 ['def', "you", "du", "tu", "Informal you, both in German and Italian. German 'u' is long, Italian u is short as always at the end of a word."],
 ['def', "you live", "du lebst", "tu vivi", "Informal you, both in German and Italian. viv-ere &rarr; (tu) viv-i; leb-en &rarr; du leb-st; In German b before 's' is pronounced 'p' to ease pronunciation."],
 ['def', "your life", "dein Leben", "la tua vita", "Both tua and dein are informal; mnemonic: dein and du both have a 'd'. The Italian singular masculine possessive is tu-o. dein is only for masculine or neuter subjects and neuter objects."],
 ['tra', "you live your life", "du lebst dein Leben", "(tu) vivi la tua vita"],
 ['def', ["not", "do not"], "nicht", "non", "Both Italian and German do not use the auxiliary 'do'. nicht = n + ich + t."],
 ['def', "you don't live your life", ["du lebst dein Leben nicht", "du lebst nicht dein Leben"], "(tu) non vivi la tua vita", "Note that Italian allows only one position for 'non', before the verb, same position of \"don't\" in English."],
 ['def', "do you live your life?", ["lebst du dein Leben?", "lebst du dein Leben", "du lebst dein Leben?"], ["(tu) vivi la tua vita?", "vivi la tua vita tu?"], "In questions Italian just uses inflection, that is you simply raise your voice slightly at the end of the sentence. Since the subject (tu) is usually understood, you could not use inversion and indeed inversion is not used to express a question in Italian, although you can put the subject at the end for emphasis. In German you can generally use either intonation, inversion or both, since the subject is always expressed."],
 ['tra', "don't you live your life?", ["lebst du dein Leben nicht?", "lebst du nicht dein Leben?", "lebst du dein Leben nicht", "lebst du nicht dein Leben"], ["(tu) non vivi la tua vita?", "non vivi la tua vita tu?"]],
 ['def', "live!", "vivi!", "lebe!", ["Imperative, used to give an order, instructions, advice, make an invitation, etc. Both forms are informal.", "In Italian, for -ere verbs the informal singular imperative is the same as in the informal second person (you) of the simple present tense: (tu) vivi. In German, the informal 'du' form of the imperative is formed by dropping the final -en and usually adding a -e: leb-en &rarr; leb-e, as in ich leb-e."]],
 ['tra', "live your life", "lebe dein Leben", "vivi la tua vita"],
 ['def', "the day", "der Tag", "il giorno", ["The English word journal has a root similar to the Italian giorno and in fact it means daily. A 'g' at the end of a German word, if not preceded by an 'i', is always pronounced as a weak 'k'. Day happens to be masculine in both languages.", "The article 'the' for singular masculine nouns is 'il' in Italian, but not always. It is 'der' in German, but only if the singular masculine noun is (part of) the subject. The Italian article il changes depending on how the word that follows begins with: lo instead of il is used before masculine nouns beginning with s + consonant, z and other prefixes. The German article varies in the four linguistic cases."]],
 ['def', "the days", "die Tage", "i giorni", "The pronunciation of the 'g' changes in German in the plural. The article changes in the plural in both languages."],
 ['def', "to be", "essere", "sein", "ei pronounced ai; this verb ends in -n in German."],
 ['def', "I am", "ich bin", "(io) sono", ["Both irregular.", "If 'I am' were regular in Italian it would be (io) ess-o, but esso means 'it'. sein in German also means his."]],
 ['def', "he/she/it is", "(er/sie/es) ist", "(lui/lei/esso) è", ["Both irregular.", "Ist is the English is + t, the t has been dropped in English. È is an open 'e' sound as in 'bed'."]],
 ['tra', "it is the day", "es ist der Tag", "è il giorno", "'der Tag' has to be considered a subject in this sentence in German, even though 'it' is expressed. This is because the verb 'is' acts like an equal sign: es = der Tag."],
 ['def', "the last", "der Letzte", "l'ultimo", "Letzte is a noun, in fact it is capitalized. This is the singular subject form for 'last'. The second 't' must be heard clearly. In Italian the noun (and also adjective) ultim-o is masculine but since it begins with a vowel (u) it takes the 'lo' article, not 'il' like giorno: lo ultimo. This is always elided into l'ultimo, both to avoid a cacophony and to speed up speaking."],
 ['tra', "it is the last", "es ist der Letzte", "è l'ultimo"],
 ['def', "the last day", "der letzte Tag", "l'ultimo giorno", ["In Italian ultimo is both a singular masculine noun and adjective. In this sentence ultimo is an adjective because it qualifies a name (giorno).", "In German, if part of the subject, the adjective is letzte, for all three genders, but only when using the definite article, e.g. with the indefinite masculine article it changes, although we are in the same case (nominative): ein letzter Tag. letzt is not a word on its own. What is the reason for this change? Reckon it as a simplification: when there is der, there is no need to put another -r at the end of letzt to denote the masculine gender of the noun (Tag), so we simply put an -e: letzt-e. But if we say ein Tag, it does not tell us the gender of Tag, it could be either masculine or neutral (it is masculine). When adding last, we add the full -er ending to pinpoint that, and thus we show to the reader that Tag is masculine."]],
 ['tra', "it is the last day", "es ist der letzte Tag", "è l'ultimo giorno", "der letzte Tag is still the subject, not an object. It equates to 'es'. As a matter of fact you can also invert subject and object: l'ultimo giorno è esso, der letzte Tag ist es."],
 ['def', "every day", "jeder Tag", "ogni giorno", "You say je+der Tag as a subject only, like der Tag. You just add je- to the article, this is the nominative case or subject."],
 ['def', "I live my life every day", ["ich lebe mein Leben jeden Tag", "ich lebe jeden Tag mein Leben"], ["(io) vivo la mia vita ogni giorno", "ogni giorno (io) vivo la mia vita", "(io) vivo ogni giorno la mia vita"], "As an object it is je+den Tag. That is as an object, the masculine definite article der becomes den! Nothing varies in Italian, where word order and common sense tells a subject from an object. In every case the subject in Italian remains io, even if understood."],
 ['def', "everyday is your last", "jeder Tag ist dein letzter", "ogni giorno è l'ultimo", ["In Italian we prefer to use 'the' (lo, elided in l') before last, as it were 'everyday is the last day of your life'.", "In German, as in English, the possessive is preferred to the article. In German, letzter has to be used and not letzte because it is a pronoun referring to der Tag and there is nothing else to signify the masculine gender of Tag, dein is also used in the same nominative case for neutral nouns. Conversely, jeder and not jeden has to be used because it is part of the subject. There is no object here, both jeder Tag and dein letzer are subject and have to be in the nominative case. This makes sense, if you invert the subject and alleged object you don't change the meaning: you last (day) is everyday. By using cases German does not depend on word order like Italian and English, but in this case word order does not matter. It is clearly an equivalence and indeed you can also say jeder Tag dein letzer ist. In Italian you could say l'ultimo giorno è ogni giorno, l'ultimo giorno ogni giorno è, but they are less common. We prefer the order SVO (subject+verb+object)."]],
 ['def', "as if", "als ob", "come se", "Introduces something contrary to reality. als wenn is correct too, but wenn is less used with als. Note b at the end of a word or syllable always sounds like p in German. P and b are articulated in almost the same way, German do this to save a vocal chord vibration."],
 ['tra', "Live your life as if everyday is your last", "lebe dein Leben als ob jeder Tag dein letzter ist", "vivi la tua vita come se ogni giorno è l'ultimo", "This is still missing the past subjunctive, needed both in German and in Italian. Note how german prefers to put ist at the end of the sentence. Italian is a SVO language (subject+verb+object), while German has often a SOV structure, especially when there are two verbs, the infinitive always goes to the end of the sentence."],
 ['def', "if I were", "wenn ich wäre", "se (io) fossi", "were and wäre are very similar."],
 ['def', "if you were", "wenn du wärst", "se (tu) fossi"],
 ['def', "if he/she/it were", "wenn (er/sie/es) wäre", "se (lui/lei/esso) fosse"],
 ['tra', "Live your life as if everyday were your last", "lebe dein Leben als ob jeder Tag dein letzter wäre", "vivi la tua vita come se ogni giorno fosse l'ultimo"],
];
