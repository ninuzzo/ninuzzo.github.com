(tvar
 (%level1% '|tandem|
  %level2% 'de
  %tagline% "die Sprache von Goethe, Bach, Marx, Gutenberg, Mozart, Beethoven, Freud, Einstein ..."
  %title% "German-Italian Tandem language coaching by Antonio Bonifati"
  %tandem% t
  %content%
   (article :id "top_article"
    (header
     (inc "includes/menu/tandems.lisp")
     (h1 :class "h2" "German-Italian Tandem language coaching"))
    (section
     (header
      (h1 :class "h3" "Task-based practising"))
     (nav
      (ul
       (li
        (a :href "tandem.html?en/de-it/salutations-present"
         "Basic salutations, questions, designating the person speaking, talking about the present"))
       (li
        (a :href "tandem.html?en/de-it/introduce_oneself"
         "Introducing oneself"))
       (li "To call: "
        (a :href "tandem.html?en/de-it/to_call" "1st part") ", "
        (a :href "tandem.html?en/de-it/to_call-2" "2nd part"))
       (li
        (a :href "tandem.html?en/de-it/here,_there,_over_there,_there_is"
         "Here,_there,_over_there,_there_is"))
       (li "Talking about likes and dislikes: "
        (a :href "tandem.html?en/de-it/likes_and_dislikes" "1st part"))
       (li (a :href "tandem.html?en/de-it/shopping" "Shopping"))
       (li (a :href "tandem.html?en/de-it/Scotland" "Scotland")))))
    (section
     (header
      (h1 :class "h3" "Sentence-based practising"))
     (nav
      (ul
       (li
        (a :href "tandem.html?en/de-it/Live_your_life_as_if_every_day_were_your_last"
         "Live your life as if every day were your last"))
       #|(li
        (a :href "tandem.html?en/de-it/There_were_grammatical_errors_even_in_his_silence"
         "There were grammatical_errors even in his silence"))
       (li
        (a :href "tandem.html?en/de-it/aquila_non_capit_muscas"
         "Aquila non capit muscas"))|#)))))

(echo
  (inc "layouts/player.lisp")))
