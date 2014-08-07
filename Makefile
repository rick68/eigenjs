TOPLEVEL ?= $(dir $(lastword $(MAKEFILE_LIST)))
CPPLINT ?= $(TOPLEVEL)/cpplint.py
PYTHON ?= python

SOURCES = \
    src/Complex.hpp \
    src/Complex_class_method_acos.hpp \
    src/Complex_class_method_acosh.hpp \
    src/Complex_class_method_asin.hpp \
    src/Complex_class_method_asinh.hpp \
    src/Complex_class_method_atan.hpp \
    src/Complex_class_method_atanh.hpp \
    src/Complex_class_method_cos.hpp \
    src/Complex_class_method_cosh.hpp \
    src/Complex_class_method_exp.hpp \
    src/Complex_class_method_log.hpp \
    src/Complex_class_method_log10.hpp \
    src/Complex_class_method_polar.hpp \
    src/Complex_class_method_pow.hpp \
    src/Complex_class_method_proj.hpp \
    src/Complex_class_method_sin.hpp \
    src/Complex_class_method_sinh.hpp \
    src/Complex_class_method_sqrt.hpp \
    src/Complex_class_method_tan.hpp \
    src/Complex_class_method_tanh.hpp \
    src/Complex_definitions.hpp \
    src/Complex_fwd.hpp \
    src/Complex_instance_method_abs.hpp \
    src/Complex_instance_method_add.hpp \
    src/Complex_instance_method_adda.hpp \
    src/Complex_instance_method_arg.hpp \
    src/Complex_instance_method_conj.hpp \
    src/Complex_instance_method_div.hpp \
    src/Complex_instance_method_diva.hpp \
    src/Complex_instance_method_equals.hpp \
    src/Complex_instance_method_isApprox.hpp \
    src/Complex_instance_method_mul.hpp \
    src/Complex_instance_method_mula.hpp \
    src/Complex_instance_method_norm.hpp \
    src/Complex_instance_method_sub.hpp \
    src/Complex_instance_method_suba.hpp \
    src/Complex_instance_method_toString.hpp \
    src/Complex_macro.hpp \
    src/Complex_property_accessor_imag.hpp \
    src/Complex_property_accessor_real.hpp \
    src/EigenJS.cpp \
    src/EigenJS.hpp \
    src/Matrix.hpp \
    src/Matrix_definitions.hpp \
    src/Matrix_fwd.hpp \
    src/Matrix_instance_method_add.hpp \
    src/Matrix_instance_method_adda.hpp \
    src/Matrix_instance_method_cols.hpp \
    src/Matrix_instance_method_div.hpp \
    src/Matrix_instance_method_diva.hpp \
    src/Matrix_instance_method_equals.hpp \
    src/Matrix_instance_method_get.hpp \
    src/Matrix_instance_method_isApprox.hpp \
    src/Matrix_instance_method_mul.hpp \
    src/Matrix_instance_method_mula.hpp \
    src/Matrix_instance_method_rows.hpp \
    src/Matrix_instance_method_set.hpp \
    src/Matrix_instance_method_sub.hpp \
    src/Matrix_instance_method_suba.hpp \
    src/Matrix_instance_method_toString.hpp \
    src/Matrix_macro.hpp \
    src/base.hpp \
    src/definition.hpp

FILTER = -build/include_what_you_use,-whitespace/braces,-whitespace/parens

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
