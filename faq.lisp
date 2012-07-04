;;; TODO: once the structure is clear,
;;; write some Lisp code to generate the TOC automatically.

(tvar
 (%level1% '|faq|
  %tagline% "I am happy to answer your questions about Italian"
  %title% "Antonio Bonifati's Italian language FAQ"
  %content%
   (article :id "top_article"
    (section
     (header
      (h1 :class "h2" "Italian language FAQ")
      (h2 :class "h3" "Question index")
      (nav
       (ul :class "faq-list"
        (li
         "Your question here... just "
         (a :href "contact.html" "send it by email") ".")
        (li :class "question answer-at" :id "Q:-unque"
         (a :href "#A:-unque" "What does the suffix " (i "-unque") " mean?"))
        (li :class "question answer-at" :id "Q:spesa"
         (a :href "#A:spesa" "What's the difference between "
          (i "fare la spesa") " and " (i "fare spese") "?"))))))
          
     (section
      (header
       (h1 :class "h3" "Questions &amp; answers"))
      (article :id "A:-unque" :class "faq"
       (h1 :class "question"
        (a :href "#Q:-unque" "What does the suffix " (i "-unque") " mean?"))
       (p :class "answer" "It means " (i "any") " or " (i "ever") ". E.g. "
        (i "come") " is " (i "how") " and " (i "comunque") " means "
        (i "however") " or " (i "anyhow") ". " (i "Dove") " is " (i "where")
        " and " (i "dovunque") " translates to " (i "anywhere") " or "
        (i "wherever") ". " (i "Quale") " is " (i "what") " and "
        (i "qualunque") " means just " (i "any") ", " (i "-unque")
        " is not a word that can be used alone, but only a word ending. "
        (i "Anything") " or " (i "whatever") " is " (i "qualunque cosa")
        ", the word for " (i "thing") " is " (i "cosa") ". "
        (i "Chi") " is " (i "who") " and " (i "chiunque") " means "
        (i "whoever") ". " (i "I'm not just anyone") ", "
        (i "Non sono uno qualunque") " (" (i "not am one any") ").")
       (p "You can also find " (i "-unque") " in other words, e.g. "
        (i "dunque") ". Here the prefix is just " (i "d")
        " and does not have any meaning by itself. In this case just learn that this word as a connector (" (i "conjuction")
        " in grammar jargon) means " (i "therefore") ", " (i "so") "."))
      (article :id "A:spesa" :class "faq"
       (h1 :class "question"
        (a :href "#Q:spesa" "What's the difference between "
         (i "fare la spesa") " and " (i "fare spese") "?"))
       (p :class "answer" (i "Shopping") " has no plural in English, but "
        (i "spesa") " has a plural: " (i "spese") ". " (i "Far(e) la spesa")
        " is grocery shopping, while " (i "far(e) spese/compere/acquisti")
        " is shopping for clothes etc.")))))

(echo
  (inc "layouts/default.lisp")))
