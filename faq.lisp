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
        (li :class "question answer-at" :id "Q:spesa"
         (a :href "#A:spesa" "What's the difference between "
          (i "fare la spesa") " and " (i "fare spese") "?"))))))
          
     (section
      (header
       (h1 :class "h3" "Questions &amp; answers"))
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
