//
// detail/initializer.hpp
// ~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_DETAIL_INITIALIZER_HPP
#define EIGENJS_DETAIL_INITIALIZER_HPP

#include <v8.h>

namespace EigenJS {
namespace detail {

struct initializer {
  typedef v8::Local<v8::FunctionTemplate> function_template_type;

  initializer(function_template_type& function_template)
    : function_template_(function_template)
  {}

  template <typename T>
  void operator()(T& definition) {
    definition(function_template_);
  }

  function_template_type& function_template_;
};

}  // detail
}  // namespace EigenJS

#endif  // EIGENJS_DETAIL_INITIALIZER_HPP
