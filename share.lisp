(tvar
 (%title% "Share Antonio Bonifati's site on social networks"
  %content%
   (cat
    (div :id "fb-root")
    (script "
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = \"//connect.facebook.net/en_US/all.js#xfbml=1\";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));")
    (article :id "top_article"
     (header
      (h1 :class "h2" "Share on social networks"))
     (div :class "fb-like" :data-href "http://ninuzzo.github.com/"
      :data-send "true" :data-width 450 :data-show-faces "true"
      :data-action "recommend" :data-font "trebuchet ms")
     (div :class "in_a_row"
      (a :href "https://twitter.com/share" :class "twitter-share-button"
       :data-url "http://ninuzzo.github.com" :data-lang "id" :data-size "large"
       :data-related "AntonioBonifati" :data-hashtags "Italian" "Tweet")
      (script "!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=\"//platform.twitter.com/widgets.js\";fjs.parentNode.insertBefore(js,fjs);}}(document,\"script\",\"twitter-wjs\");"))
     (div :class "in_a_row"
      (a :href     "http://pinterest.com/pin/create/button/?url=http%3A%2F%2Fninuzzo.github.com&media=http%3A%2F%2Fninuzzo.github.com%2Fimgs%2Fdemo-screenshot.png&description=Antonio%20Bonifati%2C%20Italian%20language%20teacher"
       :class "pin-it-button" :count-layout "vertical"
       (img :src "//assets.pinterest.com/images/PinExt.png" :title "Pin It"))
      (script :src "//assets.pinterest.com/js/pinit.js"))
     (div :class "in_a_row"
      (script :src "http://platform.tumblr.com/v1/share.js")
      (a :href "http://www.tumblr.com/share" :title "Share on Tumblr" :style
       "display:inline-block; text-indent:-9999px; overflow:hidden; width:61px; height:20px; background:url('http://platform.tumblr.com/v1/share_2.png') top left no-repeat transparent;"
       "Share on Tumblr"))
     (div :class "in_a_row"
      (div :class "g-plusone" :data-size "tall"
       :data-href "http://ninuzzo.github.com")
      (script "
(function() {
  var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
  po.src = 'https://apis.google.com/js/plusone.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();")))))

 (echo
  (inc "layouts/default.lisp")))
