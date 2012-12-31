(tvar
 (%level1% '|testimonials|
  %title% "What my students think of me"
  %content%
   (article :id "top_article"
    (header
     (h1 :class "h2" "Customer testimonials"))
     ; See: http://blog.neilpie.co.uk/web-dev/html5-quote-attribution
     (q "I always enjoy the Italian lesson with Mr. Bonifati. The way he teaches me is easy to understand and remember!" (br)
      (small :class "author" (a :target "_blank" :href
       "http://blog.sina.com.cn/thedoublesingle" "Yan W.")
       ", architect from China. "
       (a :target "_blank" :href
       "http://blog.sina.com.cn/s/profile_1886275532.html#write" "Contact her")
       "."))))

(echo
  (inc "layouts/default.lisp")))
