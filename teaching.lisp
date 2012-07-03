(tvar
 (%level1% '|demo|
  %tagline% "what you learn with me you will never forget"
  %tandem% nil
  %content%
   (article :id "top_article"
    (header
     (nav :id "top_article_menu"
      (ul
       (li (a :href "demo.html" "Other demo lessons"))
       (li
        (a :href "contact.html" "Email your questions," (br)
         "corrections &amp; feedback"))))
     (inc "includes/player.lisp"))
    (section :id "pl_translations")
    (aside :id "audio_controls"
     (form
      (fieldset
       (legend "Autoplay:")
       (p (input :type "checkbox" :id "pl_l1" :checked "")
        (label :id "pl_ll1" :for "pl_l1" "autoplay")))))
    (section :id "pl_comments")
    (footer
     (p "Lesson date: " (datetime :id "pl_date")))))

 (echo
  (inc "layouts/player.lisp")))
