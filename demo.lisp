(tvar
 (%level1% '|demo|
  %tagline% "I teach a perfect Italian"
  %title% "Antonio Bonifati's Italian language teaching demos"
  %content%
   (article :id "top_article"
    (header
     (h1 :class "h2" "Italian Language teaching demos"))
    (p "I'm giving online for free "
     (a :href "teaching.html?en/it/first"
      "my first lesson for all absolute beginners")
     ": some Italian loan words, cognates and correct vowel pronunciation.")
    (p "Other intermediate and advanced demo lessons will be available here at
     some near future date.")
    (p "I also run a "
     (a :href "tandem-conditions.html" "free language exchange programme")
     " on this same site.")))

 (echo
  (inc "layouts/default.lisp")))
