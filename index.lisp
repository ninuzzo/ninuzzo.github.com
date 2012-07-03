(tvar
 (%level1% '|index|
  %content%
   (article :id "top_article" 
    (aside :id "top_article_side" 
     (h1 :class "h3" "Why learn Italian?")
     "For "
     (a :target "_blank" :href "http://en.wikipedia.org/wiki/Italy" "Italy")
     "'s"
     (ul 
      (li "rich art and architecture")
      (li "delicious cuisine")
      (li "profound literature and music")
      (li "millenia-long history")
      (li "renowned fashion")
      (li "stunning nature")
      (li "and, of course, for the beauty of the language itself!")))
    (header 
     (h1 :class "h2" "Learn Italian, one of the most musical languages"))
    (p "Learn Italian " (a :href "contact.html" "with me")
     " the easy way, by first speaking and listening. Neither grammar to study nor boring homework to do. I just accelerate your natural process of language acquisition.")
    (p "You can gain an insight into "
     (a :href "method-to-students.html"
      "how I teach Italian to English speakers")
     " by taking "
     (a :href "teaching.html?en/it/first"
      "my first lesson for absolute beginners")
     " on line. It is completely free of charge as well as "
     (a :href "tandem-conditions.html" "my tandem programme") ".")))

 (echo
  (inc "layouts/default.lisp")))
