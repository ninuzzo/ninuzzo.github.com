(tvar
 (%level1% '|contact|
  %tagline% "thank you for choosing me"
  %title% "Antonio Bonifati's details"
  %content%
   (article
    (p :class "vcard"
     (em :class "fn" "Antonio Bonifati") " ("
     (span :class "nickname" "ninuzzo") ", " (span :class "nickname" "ant")
     ") — "
     (a :class "url" :href "http://ninuzzo.github.com/"
      "http://ninuzzo.github.com") (br)
     (span :class "street-address" "Please ask for my current address by means of email") (br)
     (span :class "postal-code" 0) " "
     (span :class "locality" "because I wander Europe") " "
     (span :class "region" "") (br)
     (b :class "country" "") (br)
     (span :class "tel" "Telephone: " (span :class "value" "Ditto"))
     (br) "Email: "
     (script :src "mini/oe.js")
     (canvas :id "jc6wQSIo7R7DM") (br)
     (a :href "http://www.skype.com" :target "_blank" "Skype") ": "
     (a :href "skype:antonio.bonifati?add" "antonio.bonifati") " "
     (script
      :src "http://download.skype.com/share/skypebuttons/js/skypeCheck.js"
      :title "Skype 'My status' button http://www.skype.com/go/skypebuttons")
     (a :class "url" :href "skype:antonio.bonifati?call"
      (img :alt "My Skype status"
       :src "http://mystatus.skype.com/smallclassic/antonio%2Ebonifati"
       :width 114 :height 20)))
    (script :src "mini/tz_clock.js")
    (p (script "tz_clock.explain()"))))

 (echo
  (inc "layouts/default.lisp")))
