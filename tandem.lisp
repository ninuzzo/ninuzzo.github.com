(tvar
 (%level1% '|tandem|
  %tagline% "exchange your mother tongue for Italian with me, gratis!"
  %tandem% t
  %content%
   (article :id "top_article"
    (header
     (nav :id "top_article_menu"
      (ul
       (li
        (a :id "pl_idx"))
       (li
        (a :href "contact.html" "Email your questions,"
         (br) "corrections &amp; feedback"))))
     (inc "includes/player.lisp"))
    (section :id "pl_translations")
    (aside :id "audio_controls"
     (form
      (fieldset
       (legend "I'm learning:")
       (p
        (input :type "checkbox" :id "pl_l1")
        (label :id "pl_ll1" :for "pl_l1"))
       (p
        (input :type "checkbox" :id "pl_l2" :checked "")
        (label :id "pl_ll2" :for "pl_l2")))))
    (section :id "pl_comments")
    (footer
     (p "Chat date: "
      (datetime :id "pl_date")))))

(echo
  (inc "layouts/player.lisp")))
