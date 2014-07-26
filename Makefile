TOPLEVEL ?= $(dir $(lastword $(MAKEFILE_LIST)))
CPPLINT ?= $(TOPLEVEL)/cpplint.py
PYTHON ?= python

SOURCES = \
    src/eigen.cpp

FILTER = -whitespace/parens

all:
	cd $(TOPLEVEL) && node-gyp configure build

clean:
	cd $(TOPLEVEL) && node-gyp clean

distclean: clean
	cd $(TOPLEVEL) && rm -rf node_modules

test: force
	cd $(TOPLEVEL) && mocha $(TOPLEVEL)/test/*.js

lint: force
	cd $(TOPLEVEL) && $(PYTHON) $(CPPLINT) --filter=$(FILTER) $(SOURCES)

PHONY += force
force:

.PHONY: $(PHONY)
