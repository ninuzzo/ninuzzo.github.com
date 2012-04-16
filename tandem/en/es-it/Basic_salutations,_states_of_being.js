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

var title='Basic salutations, states of being',
  date='2012-04-12', lk='en', l1='es', l2='it', lesson=
[
 ['def', "I", "yo", "io", "Spanish: pronunciation varies between countries. E.g. in Venezuela is pronounced like French j in Jean, same sound as the ll, that is llo. In Spain and other areas of Latin America it is more common to pronounce the y as in English 'yes'. Anyway, it is always spelt yo everywhere. Never write 'jo'."],
 ['def', "to be", "ser", "essere", "Instead of 'to' before a word meaning an action or state with no subject (the bare verb), in Spanish you have endings like -er and in Italian like -ere."],
 ['def', "not", "no", "non"],
 ['tra', "not to be", "no ser", "non essere"],
 ['def', "or", "o", "o"],
 ['tra', "to be or not to be", "ser o no ser", "essere non essere", "That is the question, as Hamlet said!"],
 ['tra', "I", "yo", "io", "I is always capitalized in English, but the equivalents in Italian and Spanish are only capitalized if at the beginning of a sentence."],
 ['def', "I am", ["yo soy", "soy"], ["io sono", "sono"], ["Spanish: there is slight irregularity: s-er &rarr; s-o regularly, but then a y is added. Yo can be understood.", "Italian: there is an irregularity. It is not (io) ess-o, regularly from ess-ere. Because in Italian 'esso' is another word meaning 'it' (masculine), ess- is changed into son-. Io can be understood, as in Spanish and unlike English."]],
 ['def', "tired", ["cansado", "cansada"], ["stanco", "stanca"], "In both languages, use -o if speaking of a man, -a if speaking of a woman."],
 ['def', "to stay", "estar", "stare", ["Spanish uses est-ar (to stay) mostly for temporary conditions that are likely to change (like locations of things and people, temporary states of being) and ser (to be) generally for things more permanent, fixed (e.g. nationality, gender, physical description). The difference is idiomatic and best learned by practice. E.g. craziness or marriage is not considered to be permanent :)", "Italian: st-are. Despite their similarity, the use of stare does not correspond to estar. We use stare in the meaning of to stay, to remain and also figuratively to feel, but in the latter case only when followed by a word that can refer to a verb, not with words that can only refer to a subject. E.g. in English you can use both to feel or to be in I am/feel well/ill, but in Italian you have to make the decision based on which word follows: use stare with well - to be/feel well = stare bene - because bene can only refer to a verb, not to a subject. Use essere with ill - to be/feel ill = essere malato - because malato can only refer to a subject, not to a verb. We also use stare for another completely different meaning, that is to live, to be in a place, but in this case you can use both essere and stare, just as in English, while in Spanish it is mandatory to use estar."]],
 ['def', ["I stay", "I'm staying"], "estoy", "sto", ["Spanish: est-ar &rarr; est-o &rarr; (irregularly) est-o-y (like soy we add a y at the end)", "Italian: st-are &rarr; st-o (all regular)"]],
 ['tra', "I am tired", ["estoy cansado", "estoy cansada"], ["sono stanco", "sono stanca"], ["Do not use ser (to be) in Spanish because it is a temporary state of being. So in Spanish is like 'I stay tired'.", "Do not use stare (to stay) in Italian because stanco is a word that you can only use to say how you are, that is to refer to the subject (io) and not to the verb. In other words, stanco cannot refer to how you feel - remember that to feel is one of the figurative meanings of stare (to stay) in Italian - but only to how you are, that is to you. It is as if it were a mathematical equality: I=tired, io=stanco. Since stanco refers to io, the equal sign can only be replace by sono and not sto."]],
 ['def', "busy", ["ocupado", "ocupada"], ["occupato", "occupata"], "Very often, but not always, Spanish -ado becomes italian -ato. D turns into a T. In Italian double consonants must always be prolonged, e.g. cc is a long key sound as in English 'back kick'. Spanish does not prolong consonant sounds. cc in Spanish is pronounced ks. Don't do that in Italian. cc is always kk in Italian, that is a long k. Spanish has also double l and r (ll and rr) but they are not long consonants, just single ones with a distinctive pronunciation."],
 ['tra', "I am busy", ["estoy ocupado", "estoy ocupada"], ["sono occupato", "sono occupata"], "Both in Italian and Spanish we often leave 'I' understood. In Italian remember that I=busy, while in Spanish, take into account that busy is a temporary condition."],
 ['def', "now", "ahora", ["ora", "adesso"], "H is always silent both in Spanish and Italian, it is just a sign, unlike English h which is aspirated! Italian ora and adesso both mean now. Ora also means hour in Italian, just like hora in Spanish."],
 ['tra', "I am busy now", ["ahora estoy ocupado", "estoy ocupado ahora"], ["adesso sono occupato", "sono occupato adesso", "ora sono occupato", "sono occupato ora"], "Often, you put the time information at the beginning in both languages, but not necessarily. In English you usually put now at the end, unless you don't want to put emphasis on the time."],
 ['tra', "I am", ["soy", "estoy"], ["sono", "sto"], "As we have seen before, whether you use one or the other words, depends on what follows, but the reasons of your choice are different in Spanish and Italian."],
 ['tra', "I am not", ["yo no soy", "yo no estoy", "no soy", "no estoy"], ["io non sono", "non sono", "io non sto", "non sto"], "'I not am' or simply 'not am', in both languages."],
 ['tra', "I am not tired", ["yo no estoy cansado", "no estoy cansado"], ["io non sono stanco", "non sono stanco"], "E.g. suppose you are a man. You use I in both languages only if you want to stress that you are talking of you specifically, e.g. in contrast to someone other (you are tired but <b>I</b> am not tired) or as if you wanted to say 'it is not true that I am tired!'."],
 ['def', ["ill", "sick"], "enfermo", "malato", "In British English you use ill as in 'I am ill', and sick in 'a sick man', although informally (and normally in American English) you can also say 'I am sick'. In Spanish and Italian we only have one word for this meaning."],
 ['def', "illness", "enfermedad", ["malattia", "infermità"], "In Italian malattia is more common, infermità is more similar to Spanish, but formal. They are both feminine. The majority, but not all, of both Spanish and Italian words ending in -a are feminine, but exceptions exists in both languages. But if you have to guess, the guessing rule is -a ending is feminine."],
 ['def', "neither ... nor ...", ["ni ... ni ...", "no ... ni ..."], ["né ... né", "non ... (né) ... né"], "neither ... nor means 'not one and not the other of two'. In Italian you can use né two times even if you have said non before! This is a double negation, but it does not equate to an affirmation! If you want to be more logical, like Spanish or English always are in this case, you can omit the first né, so that you don't have a double negation that actually affirms."],
 ['tra', "neither tired nor ill", "ni cansado ni enfermo", "né stanco né malato", "If there isn't non in Italian or no in Spanish, both 'neither' and 'nor' are respectively 'né' and 'ni', the same word instead of two different ones in English."],
 ['tra', "I'm neither tired nor ill", "no estoy cansado ni enfermo", ["non sono né stanco né malato", "non sono stanco né malato"], ["estoy ni cansado ni enfermo is incorrect in Spanish. You have to use one 'no' e one 'ni'.", "sono né malato né infermo is incorrect in Italian. You have to use one 'no' and either one or two 'né'."]],
 ['def', "well", "bien", "bene", "Also good in English."],
 ['tra', ["I am well", "I feel well", "I'm doing well", "I'm good"], "estoy bien", "sto bene"],
 ['def', "bad", "mal", "male", "Both in Italian and Spanish these words only mean how you feel, how you are doing, how it is getting on and not how you are as a person."],
 ['tra', ["I am bad", "I feel bad"], "estoy mal", "sto male"],
 ['def', ["I am bad", "I'm evil"], "soy malo", "sono cattivo", "If you want to say: I'm not a good person, both in Spanish and Italian you use other words, while in English I am bad remains ambiguous out of any context. It can either mean 'I feel bad' or 'I am evil', depending on the situation and surrounding sentences."],
 ['def', ["I am good", "I'm a good person"], "soy bueno", "sono buono", "Estoy bueno is wrong. Sto buono in Italian means a completely different thing: I'm quiet."],
 ['def', "goodbye", ["adiós", "chao"], ["ciao", "arrivederci"], "chao and ciao are more informal in both languages. In Venezuela we always say chao when you hang up the phone. A-r-ri-veder-ci: this Italian word has a lot structure: vedere is to see; ri- means again, thus ri-vedere is to see again. -ci means (to) us. So veder-ci is to see (to) us. ri-veder-ci is to see us again. a means until. A-r-ri-veder-ci = until we see us again. The r is doubled when joining a to rivederci. An entire sentence in a single word!"],
 ['def', "see you soon", "hasta pronto", "a presto", "Note that pronto is also an Italian word, but it only means ready, which is listo in Spanish. Pronto in Italian is presto. In other words the Italian pronto and the Spanish pronto are false friends: although they are the same word they mean completely different things. Hasta corresponds to Italian 'a', meaning 'until'."],
];
