(tvar
 (%level2% 'payments
  %tagline% "grazie tante, thank you very much"
  %title% "How to pay or donate to Antonio Bonifati"
  %content%
   (article :id "top_article"
    (header
     (inc "includes/menu/payments.lisp")
     (h1 :class "h2"
      "How to pay for my lessons or donate to support this site"))
    (section
     (header
      (h1 :class "h3" :id "online" "By online payment gateways"))
     (p "I currently accept the following online payment systems:")
     (div :class "in_a_row"
      (script "
(function() {
  var s = document.createElement('script'),
   t = document.getElementsByTagName('script')[0];
  s.type = 'text/javascript';
  s.async = true;
  s.src = 'http://api.flattr.com/js/0.6/load.js?mode=auto';
  t.parentNode.insertBefore(s, t);
})();
")
      (a :class "FlattrButton" :style "display:none"
       :href "http://ninuzzo.github.com")
      (noscript
       (a :href
        "http://flattr.com/thing/617758/Antonio-Bonifati-Italian-language-teacher"
        (img :alt "Flattr this" :title "Flattr this"
         :src "http://api.flattr.com/button/flattr-badge-large.png" ))))
     (form :target "_blank" :class "in_a_row"
      :action "https://www.paypal.com/cgi-bin/webscr" :method "post"
      (input :type "hidden" :name "cmd" :value "_s-xclick")
      (input :type "hidden" :name "hosted_button_id" :value "XDCYKD78ZBNBC")
      (input :type "image" :name "submit"
       :alt "PayPal — The safer, easier way to pay online." :src
       "https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif"))
     (a :class "in_a_row" :target "_blank"
      :href "https://www.moneybookers.com/send-money/"
      (img :width 85 :height 60 :src "imgs/skrill.png" :alt
       "Skrill, formerly Moneybookers, Online Payment and Money Transfer Service"))
     (p :class "newline" "To donate or pay through "
      (a :target "_blank" :href "https://www.skrill.com" "Skrill")
      ", be sure to use my full name and email address you can find on the "
      (a :href "contact.html" "contact") " page."))
    (section :class "newline"
     (header
      (h1 :class "h3" "By direct bank transfer"))
     (p "That is to pay directly in my Italian bank account. If you opt to pay
      this way you will first need to ask me my bank account number. I haven't
      published it here because I want people to be aware of bank fees "
      (em "before")
      " they pay money into my account — they usually apply both
      to me and you and in some cases can greatly reduce the sum I get.")
     (dl
      (dt "if you live in an European country using the euro or the Swedish crown
       (SEK), excluding the UK")
      (dd
       (a :target "_blank" :href
        "http://www.poste.it/bancoposta/pmi/incassi_pagamenti/bonifico_estero.shtml"
        "My Italian bank does not charge any fee for receiving cross-border bank
        transfers on condition that they are made in euros or SEK")
       "."
       (p "Anyway your bank may still charge a fee. Please check if the latter is not too much compared to the amount you want to donate or to pay for my one-to-one lessons.")
       (p "This is especially significant for single-lesson payments or small donations. In this case you are likely to donate to the bank rather than to me!")
       (p "PS: as set by current EEC regulations, any fee applied to bank transfers from euros/SEK to euros cannot exceed the amount you pay for domestic transfers. E.g. my Italian bank charges 1 euro for sending both domestic and international bank transfers."))
      (dt "if you live outside Europe or in the UK, namely your local currency is
       neither euros nor SEK")
      (dd
       (p "In this case my bank charges me € 7.5 + mininum between € 1.5 and
        0.15% of the amount received. Your bank will also charge similarly or
        even more to send the money. We would probably be both better off if you "
        (a :href "#online" "use an online payment method") ".")
       (p "Even if you are rich, please refrain from sending me large amount of money this way. "
        (a :href "contact.html" "Get in touch") " for better ways
        to sponsor me."))))))

(echo
  (inc "layouts/default.lisp")))
