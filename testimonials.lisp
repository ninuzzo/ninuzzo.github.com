(tvar
 (%level1% '|testimonials|
  %title% "What my students think of me"
  %content%
   (article :id "top_article"
    (header
     (h1 :class "h2" "Customer testimonials"))
     ; See: http://blog.neilpie.co.uk/web-dev/html5-quote-attribution
     (ul
      (li
       (q "I always enjoy the Italian lesson with Mr. Bonifati. The way he teaches me is easy to understand and remember!" (br)
        (small :class "author" (a :target "_blank" :href
         "http://blog.sina.com.cn/thedoublesingle" "Yan W.")
         ", architect from China. "
         (a :target "_blank" :href
          "http://blog.sina.com.cn/s/profile_1886275532.html#write" "Contact her")
         ".")))
      (li
       (q "Antonio Bonifati is a devoted teacher, who works at the student's desired pace. His method is systematic but entertaining, always with the ultimate objective of speaking fluently. Antonio Bonifati è un insegnante devoto, che lavora al ritmo voluto dallo studente. Il suo metodo è sistematico ma divertente, e lo scopo finale è sempre quello di farti parlare in modo fluente." (br)
        (small :class "author" (a :target "_blank" :href
        "https://plus.google.com/118109327955865862643" "Andrew O'Callaghan")
        ", manager from Adelaide, Australia. "
        (a :target "_blank" :href
         "http://www.linkedin.com/pub/andrew-o-callaghan/5/1aa/197" "1st linked-in connection of mine") "."))))))
(echo
  (inc "layouts/default.lisp")))
