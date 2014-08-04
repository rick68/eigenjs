TOPLEVEL ?= $(dir $(lastword $(MAKEFILE_LIST)))
CPPLINT ?= $(TOPLEVEL)/cpplint.py
PYTHON ?= python

SOURCES = \
    src/EigenJS.cpp \
    src/Complex.hpp \
    src/Complex_fwd.hpp \
    src/Matrix.hpp \
    src/Matrix_fwd.hpp \
    src/base.hpp

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
	cd $(TOPLEVEL) && $(PYTHON) $(CPPLINT) --filter=$(FILTER) --extensions=hpp,cpp $(SOURCES)

PHONY += force
force:

.PHONY: $(PHONY)
