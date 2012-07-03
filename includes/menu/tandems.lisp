(echo
 (nav :id "top_article_menu"
  (ul
   (unless (eq %level2% 'index)
    (li (a :href "tandem-conditions.html" "Conditions and requirements")))
   ;;; TODO: use for loop here when there are many languages.
   (unless (eq %level2% 'de)
    (li (a :href "de.html" "German-Italian")))
   (unless (eq %level2% 'es)
    (li (a :href "es.html" "Spanish-Italian"))))))
