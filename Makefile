all:
	node-gyp configure build

clean:
	node-gyp clean

test: force
	mocha ./test/test.js

PHONY += force
force:

.PHONY: $(PHONY)
