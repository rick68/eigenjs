//
// Matrix_instance_method_diva.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_MATRIX_INSTANCE_METHOD_DIVA_HPP
#define EIGENJS_MATRIX_INSTANCE_METHOD_DIVA_HPP

#include "definition.hpp"

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(Matrix, diva,
{
  if (args.Length() == 1) {
    Matrix* obj = node::ObjectWrap::Unwrap<Matrix>( args.This() );
    typename Matrix::matrix_type& matrix = **obj;

    if (Matrix::is_scalar(args[0])) {
      matrix /= args[0]->NumberValue();

      return args.This();
    }
  }

  NanScope();
  NanReturnUndefined();
})

}  // namespace EigenJS

#endif  // EIGENJS_MATRIX_INSTANCE_METHOD_DIVA_HPP
