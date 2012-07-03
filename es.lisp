(tvar
 (%level1% '|tandem|
  %level2% 'es
  %tagline% "la lengua de Cervantes, the language of Cervantes"
  %title% "Spanish-Italian Tandem language coaching by Antonio Bonifati"
  %tandem% t
  %content%
   (article :id "top_article"
    (header
     (inc "includes/menu/tandems.lisp")
     (h1 :class "h2" "Spanish-Italian Tandem language coaching"))
    (section
     (header
      (h1 :class "h3" "Task-based practising"))
      (nav
       (ul
        (li
         (a :href "tandem.html?en/es-it/Basic_salutations,_states_of_being"
          "Basic salutations, states of being")))))))

(echo
  (inc "layouts/player.lisp")))
