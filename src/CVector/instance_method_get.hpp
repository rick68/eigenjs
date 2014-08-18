//
// CVector/instance_method_get.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_CVECTOR_INSTANCE_METHOD_GET_HPP
#define EIGENJS_CVECTOR_INSTANCE_METHOD_GET_HPP

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(CVector, get,
{
  NanScope();

  if (args.Length() == 1 &&
      args[0]->IsNumber()
  ) {
    const CVector* const& obj = node::ObjectWrap::Unwrap<CVector>(args.This());
    const typename CVector::value_type& value = **obj;
    const typename CVector::value_type::Index& row = args[0]->Int32Value();

    if (CVector::is_out_of_range(value, row, 0)) {
      NanReturnUndefined();
    }

    const typename Complex::value_type& elem = value(row, 0);

    v8::Local< v8::Value > argv[] = {
      NanNew< v8::Number >( elem.real() )
    , NanNew< v8::Number >( elem.imag() )
    };

    NanReturnValue(
      Complex::new_instance(
        args
      , sizeof(argv) / sizeof(v8::Local<v8::Value>)
      , argv
      )
    );
  }

  EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
  NanReturnUndefined();
})

}  // namespace EigenJS

#endif  // EIGENJS_CVECTOR_INSTANCE_METHOD_GET_HPP
