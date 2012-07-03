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
     (h1 :class "h2" :id "pl_title")
     (nav
      (ul :class "compact center"
       (li (button :id "pl_first" :accesskey "f" "&lt;&lt; " (u "f") "irst"))
       (li (button :id "pl_previous" :accesskey "p" "&lt; " (u "p") "revious"))
       (li
        (form :id "pl_step_form"
         (input :type "number" :id "pl_step" :size "3")
         "&nbsp;/&nbsp;" (span :id "pl_steps")
         (button :type "submit" :accesskey "g" (u "g") "o")))
       (li (button :id "pl_next" :accesskey "n" (u "n") "ext &gt;"))
       (li (button :id "pl_last" :accesskey "l" (u "l") "ast &gt;&gt;")))))
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
