all:
	node-gyp configure build

clean:
	node-gyp clean

test: force
	mocha ./test/*.js

PHONY += force
force:

.PHONY: $(PHONY)
