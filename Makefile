TOPLEVEL ?= $(dir $(lastword $(MAKEFILE_LIST)))
CPPLINT ?= $(TOPLEVEL)/cpplint.py
PYTHON ?= python

SOURCES =

FILTER = -whitespace/parens

all:
	node-gyp configure build

clean:
	node-gyp clean

test: force
	mocha ./test/*.js

lint: force
	cd $(TOPLEVEL) && $(PYTHON) $(CPPLINT) --filter=$(FILTER) $(SOURCES)

PHONY += force
force:

.PHONY: $(PHONY)
