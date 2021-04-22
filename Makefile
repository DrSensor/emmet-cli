prefix=/usr/local

emmet: index.js emmet.js
	qjsc -o emmet index.js

clean:
	rm -f emmet
	
install: emmet
	mkdir -p "$(DESTDIR)$(prefix)/bin"
	install -m755 emmet "$(DESTDIR)$(prefix)/bin"

