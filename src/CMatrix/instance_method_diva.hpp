//
// CMatrix/instance_method_diva.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_CMATRIX_INSTANCE_METHOD_DIVA_HPP
#define EIGENJS_CMATRIX_INSTANCE_METHOD_DIVA_HPP

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(CMatrix, diva,
{
  NanScope();

  if (args.Length() == 1) {
    T* obj = node::ObjectWrap::Unwrap<T>(args.This());
    typename T::value_type& value = **obj;

    if (T::is_scalar(args[0])) {
      value /= args[0]->NumberValue();

      NanReturnValue(args.This());
    } else if (Complex::is_complex(args[0])) {
      const Complex* const& rhs_obj =
        node::ObjectWrap::Unwrap<Complex>(args[0]->ToObject());
      const typename Complex::value_type& rhs_complex = **rhs_obj;

      value /= rhs_complex;

      NanReturnValue(args.This());
    }
  }

  EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
  NanReturnUndefined();
})

}  // namespace EigenJS

#endif  // EIGENJS_CMATRIX_INSTANCE_METHOD_DIVA_HPP
