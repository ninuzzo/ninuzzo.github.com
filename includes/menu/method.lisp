(echo
 (header
  (nav :id "top_article_menu"
   (ul
    (unless (eq %level2% 'student)
     (li (a :href "method-to-students.html" "To prospective students")))
    (unless (eq %level2% 'teacher)  
     (li (a :href "method-to-teachers.html" "To other teachers")))))
  (h1 :class "h2" "A brief account of my language teaching method")))
