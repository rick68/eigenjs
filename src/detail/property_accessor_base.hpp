//
// detail/property_accessor_base.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_DETAIL_PROPERTY_ACCESSOR_BASE_HPP
#define EIGENJS_DETAIL_PROPERTY_ACCESSOR_BASE_HPP

#include <v8.h>
#include <node.h>
#include <nan.h>

namespace EigenJS {
namespace detail {

struct property_accessor_base {
  property_accessor_base() : g_(0), s_(0) {}

 protected:
  NAN_GETTER((*g_));
  NAN_SETTER((*s_));
};

}  // detail
}  // namespace EigenJS

#endif  // EIGENJS_DETAIL_PROPERTY_ACCESSOR_BASE_HPP
