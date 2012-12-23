(tvar
 (%level1% '|method|
  %level2% 'teacher
  %tagline% "good teachers have no bad students"
  %title% "About Antonio Bonifati's teaching methods, to other teachers"
  %content%
   (article :id "top_article"
    (inc "includes/menu/method.lisp")
    (p (em "New")
     ": Download my report &ldquo;A mnemonic method to teach languages&rdquo; in "
     (a :href "language-teaching.pdf" "PDF") " or "
     (a :href "language-teaching.abw" "Abiword") " format.")
    (p (em "NB")
     ": I have written this page because other teachers who exchanged languages with me got very interested in my ground-breaking teaching techniques. I am always open to share my ideas with anybody and accept thankfully any constructive criticism." (br)
     "Anyway, this is neither a comprehensive nor a scientific account of my teaching methods. I am not sure if such a report can ever be made. To see what I mean, if you are another teacher, try to do the same with "
     (em "your") " teaching methods." (br)
     "I will not even try to embark in the wild-goose chase of winning the respect of all teachers. It gives me satisfaction only to gain the gratitude of students. My aim is to make all my students learn Italian better, faster and effortlessly than with traditional "
     (em "naïve")
     " language teaching methods, the ones based on rota learning or silly books
full of aimless pictures and grammar rules difficult to digest.")
    (section
     (header
      (h1 :class "h3" "My masters"))
     (p "I combine some teaching devices I have thinked up, e.g. practical phonetics hints and grammar-less comparative analysis of sentences structure, with the most useful findings and methods of great linguists, psycholinguist and historically influential teachers, like "
      (a :target "_blank" :href "http://en.wikipedia.org/wiki/Noam_Chomsky"
       "Chomsky")
      ", "
      (a :target "_blank" :href "http://en.wikipedia.org/wiki/Paul_Pimsleur"
       "Pimsleur")
      " and "
      (a :target "_blank" :href "http://en.wikipedia.org/wiki/Michel_Thomas"
       "Kroskof")
      " (aka Michel Thomas).")
     (p "In a nutshell, my method is heavily based on language structure (syntax) rather than explicit grammar. The former is taught implicitly by a careful choice of example sentences and conversational situations. In this respect my approach is akin to Kroskof's methodology, but still covers all aspects of language acquisition. Listening and speaking always come first, but reading and writing are not neglected too.")
     (p "Like Pimsleur, my method is based on a more varied lexicon than the one used, for instance, by Kroskof, but still centred on general vocabulary, especially for beginners courses. I prefer to teach directly sentences that are commonly said by natives, to reproduce real-life dialogs, monologues and situations. I do not reduce sentences complexity artificially, for the sole purpose of illustrating a grammar rule. I rather add any needed complexity little by little. This strategy is coupled with a step by step process of constructing sentences, similar to the one used extensively by Kroskof and my students do not even notice how elaborate the sentenced I make them say are."))
    (section
     (header
      (h1 :class "h3" "No difficult grammar or meta-language jargon"))
     (p "I generally avoid teaching boring, finicky grammar rules directly, but if for a certain aspect of the language there happens to be a simple rule or a regularity — e.g. something that helps students to make the necessary agreements between words — I make students aware of it without thinking twice. Not only I entirely avoid giving rules if they are too complex, I also resist the temptation to list all possible cases of a rule if they do not apply to the sentence I am working on at the moment along with my student, and usually only one or at most two cases do apply.")
     (p "I reckon teaching complete rules at one bound as useless and even counterproductive: students usually learn nothing from it, simply because they find difficult to remember. Rather than rules, it is easier for people to keep in mind examples that show rules in action. Despite this, I do not overdo the examples, just for rounding-off the explanation of a complex rule during one lesson. I just introduce the rule cases that apply to the current example. No matter if all the others cases are simple too, I always postpone any further explanation until it is actually needed.")
     (p "Namely, when I afterward come across another case for the same rule — and if not by chance I make this happen purposely — I first recall those cases the students should already know, or better challenge them, so that they make the effort to remember and connect old and new cases to the same rule, and then I introduce the new case. I always restrain from overwhelming students with rules and exception, of which languages abound, even if they are all simple.")
     (p "This strategy is based on the assumption that the human brain long-term memory is initially short or volatile. I believe it can only be fed a bit at a time, and a certain number of repetitions of the same notion or concept is needed before it is learned forever and never forgotten again.")
     (p "Here is a trivial example of my ubiquitous put off strategy: I do not want my students to learn to conjugate verbs, not even a single tense of a certain mood, e.g. the simple present. I just explain how to obtain a single conjugated form from the infinitive when it is needed to make a up a sentence. I make pupils use and learn effortlessy all conjugated forms gradually, by example only.")
     (p "I also try not to use grammar jargon. It can get rather convoluted at times. Please do not get me wrong here: I do not deny the importance of grammar terminology for adepts, but I believe it is indeed something that should be used only among teachers and linguists. In my opinion, knowing the grammar metalanguage is not needed to learn to speak a language well. Indeed most natives do not know anything about grammar.  The matter should be better left to grammarians or used by teachers when they teach to other teachers only.")
     (p "In my experience there are no added benefits in learning grammar meta-language and grammar rules for all non-teachers. It only adds an unnecessary burden, with the risk to frighten and to discourage students, by making things look more complex than they actually are. As Pimsleur and Kroskof showed us, teaching without any grammar lingo is not only possible, but even more straightforward.")
     (p "For instance, when it comes to explain the structure of a sentence, making comparisons with the student mother tongue is worth more than using difficult words.  Like Kroskof I even use incorrect English to draw these fruitful parallels. It server the purpose quite well and since I always tell my students when I do so if English is not their native language, there is no risk they learn wrong English from me. Like Kroskof, I take full advantage of the fact that students already know another language very well, that is their mother tongue.  E.g. I use appropriate non-literal translations to convey the semantic meaning of a sentence or idiom accurately.")
     (p "Last but not least, I do this job to teach with good results and to serve knowledge humbly, "
      (a :href "fee.html" "neither for money")
      " nor to boastfully show how literate I am by making students life more difficult with grammar."))))

(echo
  (inc "layouts/default.lisp")))
