(echo
 (html
  (head
   (inc "includes/top.lisp")
   (title
    (if (boundp '%title%)
        %title%
        "Antonio Bonifati, Italian language teacher")))
  (body
   (inc "includes/middle.lisp")
   (footer :id "top_footer" 
    (div
     (p
      (a :rel "license" :target "_blank"
       :href "http://creativecommons.org/licenses/by-nc-sa/3.0/"
       (img :width 88 :height 31 :alt "Creative Commons License"
        :src "imgs/cc_by-nc-sa.png"))
      "This web site is copyrighted "
      (a :href "about.html" :rel "author" "Antonio Bonifati")
      " 2012 and licensed under a "
      (a :rel "license" :target "_blank"
       :href "http://creativecommons.org/licenses/by-nc-sa/3.0/"
       "Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License")
      "."))))))
