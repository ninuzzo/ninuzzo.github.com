(tvar
 (%level2% 'donate
  %title% "Why donate to Antonio Bonifati"
  %content%
   (article :id "top_article"
    (header
     (inc "includes/menu/payments.lisp")
     (h1 :class "h2" "Why donate"))
    (p "Whenever I receive donations, no matter how small, whether anonymous or
     not, I feel compelled to spend more time to produce and publish more
     free teaching material on this site.")))

 (echo
  (inc "layouts/default.lisp")))
