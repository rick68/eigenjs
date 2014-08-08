//
// Matrix/instance_method_mula.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_MATRIX_INSTANCE_METHOD_MULA_HPP
#define EIGENJS_MATRIX_INSTANCE_METHOD_MULA_HPP

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(Matrix, mula,
{
  NanScope();

  if (args.Length() == 1) {
    Matrix* obj = node::ObjectWrap::Unwrap<Matrix>( args.This() );
    typename Matrix::matrix_type& matrix = **obj;

    if (Matrix::has_instance(args[0])) {
      const Matrix* rhs_obj =
        node::ObjectWrap::Unwrap<Matrix>(args[0]->ToObject());
      const typename Matrix::matrix_type& rhs_matrix = **rhs_obj;

      if (Matrix::is_invalid_matrix_product(obj, rhs_obj))
        NanReturnUndefined();

      matrix *= rhs_matrix;

      NanReturnValue(args.This());
    } else if (Matrix::is_scalar(args[0])) {
      matrix *= args[0]->NumberValue();

      NanReturnValue(args.This());
    }
  }

  NanReturnUndefined();
})

}  // namespace EigenJS

#endif  // EIGENJS_MATRIX_INSTANCE_METHOD_MULA_HPP
