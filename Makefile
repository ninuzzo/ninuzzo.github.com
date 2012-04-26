css := site.css player.css
js := player.js tz_clock.js sampa/de.js sampa/es.js sampa/it.js

CSS := $(addprefix mini/,$(css))
JS := $(addprefix mini/,$(js))

all: $(CSS) $(JS)

$(CSS): mini/%.css: %.css
	yuicompressor $? >$@

$(JS): mini/%.js: %.js
	yuicompressor $? >$@
