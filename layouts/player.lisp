(echo
 (html
  (head
   (inc "includes/top.lisp")
   (link :rel "stylesheet" :href "mini/player.css")
   (script :src "mini/player.js")
   (title
    (if (boundp '%title%)
        %title%
        (cat "Language" (if %tandem% " Tandem")
         " Coaching, Antonio Bonifati's structural method"))))
  (body
   (inc "includes/middle.lisp")
   (footer :id "top_footer" 
    (div
     (p
      (a :rel "license" :target "_blank"
       :href "http://creativecommons.org/licenses/by-nc-sa/3.0/"
       (img :width 88 :height 31 :alt "Creative Commons License"
        :src "imgs/cc_by-nc-sa.png"))
      "Structural language learning method. A JavaScript computer program for "
      (if %tandem% " tandem") " coaching by "
      (a :href "about.html" :rel "author" "Antonio Bonifati")
      " is licensed under a "
      (a :rel "license" :target "_blank"
       :href "http://creativecommons.org/licenses/by-nc-sa/3.0/"
       "Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License") "."))))))
