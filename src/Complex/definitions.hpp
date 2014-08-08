//
// Complex/definitions.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_COMPLEX_DEFINITIONS_HPP
#define EIGENJS_COMPLEX_DEFINITIONS_HPP

#include "../Complex_fwd.hpp"

#include "property_accessor_real.hpp"
#include "property_accessor_imag.hpp"

#include "instance_method_abs.hpp"
#include "instance_method_arg.hpp"
#include "instance_method_norm.hpp"
#include "instance_method_conj.hpp"

#include "instance_method_add.hpp"
#include "instance_method_adda.hpp"
#include "instance_method_sub.hpp"
#include "instance_method_suba.hpp"
#include "instance_method_mul.hpp"
#include "instance_method_mula.hpp"
#include "instance_method_div.hpp"
#include "instance_method_diva.hpp"

#include "class_method_polar.hpp"
#include "class_method_proj.hpp"
#include "class_method_cos.hpp"
#include "class_method_cosh.hpp"
#include "class_method_exp.hpp"
#include "class_method_log.hpp"
#include "class_method_log10.hpp"
#include "class_method_pow.hpp"
#include "class_method_sin.hpp"
#include "class_method_sinh.hpp"
#include "class_method_sqrt.hpp"
#include "class_method_tan.hpp"
#include "class_method_tanh.hpp"
#include "class_method_acos.hpp"
#include "class_method_acosh.hpp"
#include "class_method_asin.hpp"
#include "class_method_asinh.hpp"
#include "class_method_atan.hpp"
#include "class_method_atanh.hpp"

#include "instance_method_equals.hpp"
#include "instance_method_isApprox.hpp"

#include "instance_method_toString.hpp"

namespace EigenJS {

EIGENJS_OBJECT_DEFINITIONS(
  Complex
, (property_accessor_real)
  (property_accessor_imag)

  (instance_method_abs)
  (instance_method_arg)
  (instance_method_norm)
  (instance_method_conj)

  (instance_method_add)
  (instance_method_adda)
  (instance_method_sub)
  (instance_method_suba)
  (instance_method_mul)
  (instance_method_mula)
  (instance_method_div)
  (instance_method_diva)

  (class_method_polar)
  (class_method_proj)
  (class_method_cos)
  (class_method_cosh)
  (class_method_exp)
  (class_method_log)
  (class_method_log10)
  (class_method_pow)
  (class_method_sqrt)
  (class_method_sin)
  (class_method_sinh)
  (class_method_sqrt)
  (class_method_tan)
  (class_method_tanh)
  (class_method_acos)
  (class_method_acosh)
  (class_method_asin)
  (class_method_asinh)
  (class_method_atan)
  (class_method_atanh)

  (instance_method_equals)
  (instance_method_isApprox)

  (instance_method_toString)
);

}  // namespace EigenJS

#endif  // EIGENJS_COMPLEX_DEFINITIONS_HPP
