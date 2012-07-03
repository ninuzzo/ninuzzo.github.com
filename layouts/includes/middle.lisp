(echo 
 (header :id "top_header" 
  (hgroup 
   (h1
    (a :href "index.html"
     (img :src "imgs/logo-name.png" :alt "Antonio Bonifati"
      :title "Click to return to Antonio Bonifati homepage")))
   (h2
    (if (boundp '%tagline%)
        %tagline%
        "Italian language teacher")))
  (nav :id "top_menu" 
   (ul
    (loop for (page desc url) in '((|index| "Home") (|demo| "Demo lessons")
     (|dic| "Dictionary" "http://ninuzzo.freehostia.com/ant_dictionary.html")
     (|tandem| "Tandems" "tandem-conditions.html")
     (|method| "My method" "method-to-students.html") (|contact| "Contact")
     (|faq| "FAQ") (|about| "About me")) collect
     (li
      (a :href
       (if url
           url
           (cat page ".html"))
       (if (and (boundp '%level1%) (eq %level1% page))
           '(:class "selected")) desc))))))
 (div :id "top_content" %content%)
 (aside :id "side_tab" 
  (nav 
   (ul 
    (li (a :href "payments.html" "Donate"))
    (li (a :href "share.html" "Share"))
    (li (a :href "follow.html" "Follow"))))))
