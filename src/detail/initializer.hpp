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
  typedef v8::Local<v8::FunctionTemplate> value_type;
  typedef value_type& reference_type;

  explicit initializer(reference_type function_template)
    : function_template_(function_template)
  {}

  template <typename T>
  void operator()(const T& definition) const {
    definition(function_template_);
  }

 private:
  reference_type function_template_;
};

}  // namespace detail
}  // namespace EigenJS

#endif  // EIGENJS_DETAIL_INITIALIZER_HPP
