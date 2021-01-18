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
    (p "And also the first few lessons of my intensive language course:
     (a :href "teaching.html?en/it/intensive/01" "01") ", "
     (a :href "teaching.html?en/it/intensive/02" "02"))
    (p "Other intermediate and advanced demo lessons will be available here at some near future date.")
    (p "I also run a "
     (a :href "tandem-conditions.html" "free language exchange programme")
     " on this same site.")
    (iframe :width "560" :height "315" :src "https://www.youtube.com/embed/ooUMpGyk1Ww" :frameborder "0"
     :allow "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
     :allowfullscreen)))

 (echo
  (inc "layouts/default.lisp")))
