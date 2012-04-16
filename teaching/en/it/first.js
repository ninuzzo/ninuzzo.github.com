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

var title="Italian beginner's first lesson: loan words, cognates and correct vowel pronunciation",
  date='2012-03-30', lk='en', l1='it', lesson=
[
 ['def', "a", "a", "Second-most common letter in Italian. 'a' is always pronounced similarly to 'a' in father (long), body (short), or the 'a' in bite or now (short), never like the 'a's in alpha, make, bear. 'a' in Italian is central, meaning tongue is positioned halfway in your mouth, neither at the front like the 'a' of bite nor at the back like the 'a' of father."],
 ['def', "to", "a", "a is also an Italian word, meaning 'to', like the 'to' in 'going to'."],
 ['tra', "pasta, dough, pastry, paste", "pasta", "One Italian word has all these meanings. Stressed vowels in syllables ending with a vowel, like pà of pà-sta, can *optionally* be long; unstressed vowels like the second a of pà-sta are always short. Anyway, vowel length is never used to distinguish different words, but accent sometimes is. For instance, see next slides."],
 ['def', "pope", "papa"],
 ['def', "papa", "papà", "Meaning father, dad, daddy and papa in English. Stressed vowel at the end of the word, like -pà of pa-pà, are always short, because it would be difficult to make a stressed vowel last longer when it is at the end of a word, since in Italian we always put a brief pause between each word and the following."],
 ['def', "e", "e", "Most common Italian letter."],
 ['def', "and", "e", "This is a closed e, the acute accent (é) is left out in this word. Stressed 'e's can be open as in bed or closed like the 'e' in make; unstressed 'e's are always closed."],
 ['def', "you are (formal), he/she/it is", "è", "Open e, with a mandatory grave accent when it is a word meaning 'is'. The subject of a sentence is usually understood in Italian. More exactly, we specify the subject only if it cannot be made clear from the context or there is ambiguity."],
 ['tra', ["it's", "it is"], "è"],
 ['tra', "and", "e", "On a Windows computer, if you don't have a keyboard with an Italian layout you can get the è using Alt+0232; é with Alt+0233. Mac users: hold down the option key, then ` (the backtick, located in the upper-left corner), release both keys and type a lowercase e. To type é on a Mac: Option + E, then lowercase e."],
 ['tra', "spaghetti", "spaghetti", "A kind of long pasta; guess correct Italian pronunciation. spa|ghét|ti (3 syllables). Stressed vowels in syllables ending with a consonant, like |ghèt|, are always short; the 'e' in this case happens to be closed, but generally there is no simple rule that states whether a stressed vowel is open or closed in Italian words. The phonetic script will tell you: /E/ is open, /e/ is closed."],
 ['def', ["string", "twine"], "spago", "Spaghetti means little strings or threads; string or twine is spago and -etto (singular) or -etti (plural) makes a diminutive, although not for all words. Double consonants must always be pronounced longer than single consonants. E.g. tt is pronounced like the two t's in 'night train', but the Italian t is sharper than the English t and no escaping of breath occurs."],
 ['def', "i", "i", "The italian i always sounds like the English i of ship (short) or sheep (long). i as a word means 'the' followed by the majority of masculine plural nouns."],
 ['tra', "the papas", "i papà", "Papà does not vary in the plural in Italian."],
 ['def', "or", "o", "Closed 'o', ó, Alt+0243 (Windows), Option+E o (Mac). O has two sounds: open (ò, Alt+0242, Option+` o) like the 'o' in point (short) or lord (long); closed like the 'o' in rose, but never diphthongize it, by adding a 'u' sound as in English."],
 ['tra', "broccoli", "broccoli", "The first 'o' of broccoli is open and short, in the phonetic script denoted by /O/. The second 'o' is closed and short: /o/. The first o of broccoli is short because its syllable broc| ends with a consonant: broc|co|li."],
 ['tra', "pasta with broccoli", "pasta e broccoli", "Say: pasta and broccoli. We use 'and' instead of with because we mix broccoli _and_ pasta. So 'and' really means 'mixed with' here."],
 ['def', "what", ["che cosa", "che", "cosa"], ["'che cosa' is literally 'what thing'. Che has a stressed closed 'e' sound."]],
 ['def', "thing", "cosa"],
 ['def', ["cause", "reason"], "causa", "Cosa comes from the word causa, which Italian has inherited unmodified from Latin. Since a thing can cause an action, phenomenon or condition, just like a person, we call a thing 'cosa'. As a mnemonic: a 'thing' in Italian is something that 'causes', thus it is a... 'cosa'!"],
 ['def', "is it?", "è?", "When asking a question in Italian always rise the intonation of your voice toward the end of the sentence."],
 ['tra', ["what is it?", "what's that/this?"], ["che cosa è?", "che cos'è?", "che è?", "cosa è?", "cos'è?"], "Cosa and è are contracted into cos'è. The 'a' is substituted by an apostrophe. This elision is to speed up speaking."],
 ['tra', "What's that? It's pasta with broccoli", ["Cos'è? È pasta e broccoli", "Cos'è? Pasta e broccoli"], "All ways to say 'what' in Italian can be used here."],
 ['tra', "studio", "studio", "Studio in Italian means study but also, as in English, a workroom for an artist, a place where cinema films are made or a room from which television broadcasts are made."],
 ['def', "u", "u", "Pronounce the Italian u always as in boot (long) or shorter; never like cut, cute or focus. In Italian there are only 7 vowel sounds against 16 of English!"],
 ['tra', "a e i o u", "a è é i ò ó u", "a=to, è=is, e (é)=and, i=the (plural, masculine), o=or, u has no meaning by itself."],
 ['def', "possibility", "possibilità", "-ity &rarr; -ità. Many English and Italian words have a common origin, usually from Latin. Most of the times only a suffix changes in their spelling, but pronunciation and stress is almost always different. You must refrain from pronouncing Italian words the English way!"],
 ['tra', "opportunity", "opportunità"],
 ['tra', "identity", "identità"],
 ['tra', "quality", "qualità"],
 ['tra', "vanity", "vanità"],
 ['def', "activity", "attività", "ct &rarr; tt, we never have 'ct' in Italian words."],
 ['def', "absurdity", "assurdità", "bs &rarr; ss, we rarely have 'bs' in Italian words."],
 ['def', "city", "città", "-ity &rarr; -ittà, in this case we also double the 't'. Ci is always pronounced as in chip. The /si/ sound of city is always written directly 'si' and not 'ci' in Italian. Except very few cases we will see as we go, words are pronounced the same way they are written, that is to say Italian is an almost perfectly phonetic language."],
 ['def', "able", "abile", "We just insert an 'i'. This is a word, but there is also a suffix -able, found in many other words, conveying the same meaning."],
 ['tra', "probable", "probabile", "-able &rarr; -abile, stress shifts on the a. Probable and probabile both mean 'able to be proved', the suffix -able or -abile means having the ability."],
 ['def', "desirable", "desiderabile", "There are exceptions: in this case a 'de' is also added."],
 ['tra', "inevitable", "inevitabile"],
 ['def', "sociable", "socievole", "'sociabile' is wrong. The combination 'cie' always sounds like 'che' in check in all Italian words where it is found. The 'i' in 'cie' is silent, a rare case where a letter is silent in Italian, which is otherwise a phonetic language. 'i' in cie has been inserted only to signify an open 'e', because the 'e' of 'ce' is always closed. Moral: always check your guesses in a dictionary. There could be some subtle variations or it can be a completely different word in Italian. But do not be scared to guess because of this! Even if you say sociabile you will be understood!"],
 ['def', "possible", "possibile", "-ible &rarr; -ibile, stress on the 'i' of -ible."],
 ['tra', "terrible", "terribile", "-ible &rarr; -ibile"],
 ['def', "normal", "normale", "A vowel is added at the end. Italian words very often end with a vowel, very few native Italian words end with a consonant, except short prepositions and words that have been elided or clipped when used before other words. Words imported or adapted from foreign languages are likely to end with a consonant, though."],
 ['def', "normally", "normalmente", "-ly &rarr; -mente, stress on the first 'e' of ménte."],
 ['def', "mind", "mente", "Mente is an Italian word meaning mind. The -mente suffix similarly means 'with a certain mind', e.g. normalmente means 'with a normal mind', 'in a normal way', that is normally."],
 ['def', "probably", "probabilmente", "-ably &rarr; -abilmente"],
 ['def', "preferably", "preferibilmente", "For this word -ably &rarr; -ibilmente and not -abilmente!"],
 ['def', "incredibly", "incredibilmente", "-ibly &rarr; -ibilmente"],
 ['tra', "it's normal", "è normale"],
 ['def', "not", "non", "The 'o' is closed. You have a non- prefix in English too: e.g. in the English word nonexistent."],
 ['def', ["it is not", "it isn't", "it's not"], "non è"],
 ['tra', "it isn't normal", "non è normale"],
 ['tra', "is it normal?", "è normale?", "Remember to use an interrogative intonation."],
 ['tra', "isn't it normal?", "non è normale?"],
 ['def', "but", "ma"],
 ['tra', "it is not probable", "non è probabile"],
 ['tra', "possible", "possibile"],
 ['tra', "it is possible but (it is) not probable", ["è possibile ma non è probabile", "è possibile ma non probabile"]],
 ['tra', "it's not probable but (it is) possible", ["non è probabile ma è possibile", "non è probabile ma possibile"]],
 ['tra', "normally this/it isn't possible", ["normalmente, non è possibile", "non è normalmente possibile"]],
 ['com', 'This is just a computer reduction of my teaching methods. But computers are not really intelligent and thus no computer can teach you a language as well as a good teacher. If you want to really learn Italian, <a href="contact.html">book a personalized lesson with me</a>.'],
];
