//
// CMatrix/instance_method_equals.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_CMATRIX_INSTANCE_METHOD_EQUALS_HPP
#define EIGENJS_CMATRIX_INSTANCE_METHOD_EQUALS_HPP

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(CMatrix, equals,
{
  NanScope();

  if (args.Length() == 1 && CMatrix::is_cmatrix(args[0])) {
    const CMatrix* const& obj = node::ObjectWrap::Unwrap<CMatrix>(args.This());
    const typename CMatrix::cmatrix_type& cmatrix = **obj;
    const CMatrix* const& rhs_obj =
        node::ObjectWrap::Unwrap<CMatrix>(args[0]->ToObject());
    const typename CMatrix::cmatrix_type& rhs_cmatrix = **rhs_obj;

    NanReturnValue(NanNew<v8::Boolean>(cmatrix == rhs_cmatrix));
  }

  EIGENJS_THROW_ERROR_INVAILD_ARGUMENT()
  NanReturnUndefined();
})

}  // namespace EigenJS

#endif  // EIGENJS_CMATRIX_INSTANCE_METHOD_EQUALS_HPP
