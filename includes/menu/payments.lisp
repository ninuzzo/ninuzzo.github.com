(echo
 (nav :id "top_article_menu"
  (ul
   (unless (eq %level2% 'payments)
    (li (a :href "payments.html" "How to donate/pay")))
   (unless (eq %level2% 'donate)
    (li (a :href "donate.html" "Why donate")))
   (unless (eq %level2% 'fee)
    (li (a :href "fee.html" "What's my fee?"))))))
