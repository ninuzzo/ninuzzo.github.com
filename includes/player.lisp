(echo
 (h1 :class "h2" :id "pl_title")
 (nav
  (ul :class "compact center"
   (li
    (button :id "pl_first" :accesskey "f" "&lt;&lt; " (u "f") "irst"))
   (li
    (button :id "pl_previous" :accesskey "p" "&lt; " (u "p") "revious"))
   (li
    (form :id "pl_step_form"
     (input :type "number" :id "pl_step" :size "3")
     "&nbsp;/&nbsp;" (span :id "pl_steps") " "
     (button :type "submit" :accesskey "g" (u "g") "o")))
   (li
    (button :id "pl_next" :accesskey "n" (u "n") "ext &gt;"))
   (li
    (button :id "pl_last" :accesskey "l" (u "l") "ast &gt;&gt;")))))
