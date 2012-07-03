(tvar
 (%level2% 'fee
  %title% "Follow Antonio Bonifati"
  %content%
   (article :id "top_article"
    (header
     (h1 :class "h2" "Follow my activities"))
    (div :class "in_a_row"
     (a :rel "me" :href "https://twitter.com/AntonioBonifati"
      :class "twitter-follow-button" :data-show-count "false"
      :data-size "large" "Follow @AntonioBonifati")
     (script "!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=\"//platform.twitter.com/widgets.js\";fjs.parentNode.insertBefore(js,fjs);}}(document,\"script\",\"twitter-wjs\");"))
    (div :class "in_a_row tumblr"
     (a :href "http://www.tumblr.com/follow/antoniobonifati" :target "_blank"
      (img :src "http://assets.tumblr.com/themes/redux/sidebar-follow-on-en_US.png" :alt "Follow on Tumblr")))))

 (echo
  (inc "layouts/default.lisp")))
