css := site.css player.css
js := player.js tz_clock.js

CSS := $(addprefix mini/,$(css))
JS := $(addprefix mini/,$(js))

all: $(CSS) $(JS)

$(CSS): mini/%.css: %.css
	yuicompressor $? >$@

$(JS): mini/%.js: %.js
	yuicompressor $? >$@
