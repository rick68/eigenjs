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

  if (args.Length() == 1) {
    const T* const& obj = node::ObjectWrap::Unwrap<T>(args.This());
    const typename T::value_type& value = **obj;

    if (CMatrix::is_cmatrix(args[0])) {
      const CMatrix* const& rhs_obj =
          node::ObjectWrap::Unwrap<CMatrix>(args[0]->ToObject());
      const typename CMatrix::value_type& rhs_cmatrix = **rhs_obj;

      if (T::is_nonconformate_arguments(obj, rhs_obj)) {
        NanReturnUndefined();
      }

      NanReturnValue(NanNew<v8::Boolean>(value == rhs_cmatrix));
    } else if (CVector::is_cvector(args[0])) {
      const CVector* const& rhs_obj =
          node::ObjectWrap::Unwrap<CVector>(args[0]->ToObject());
      const typename CVector::value_type& rhs_cvector = **rhs_obj;

      if (T::is_nonconformate_arguments(obj, rhs_obj)) {
        NanReturnUndefined();
      }

      NanReturnValue(NanNew<v8::Boolean>(value == rhs_cvector));
    } else if (CRowVector::is_crowvector(args[0])) {
      const CRowVector* const& rhs_obj =
          node::ObjectWrap::Unwrap<CRowVector>(args[0]->ToObject());
      const typename CRowVector::value_type& rhs_crowvector = **rhs_obj;

      if (T::is_nonconformate_arguments(obj, rhs_obj)) {
        NanReturnUndefined();
      }

      NanReturnValue(NanNew<v8::Boolean>(value == rhs_crowvector));
    } else if (CMatrixBlock::is_cmatrixblock(args[0])) {
      const CMatrixBlock* const& rhs_obj =
          node::ObjectWrap::Unwrap<CMatrixBlock>(args[0]->ToObject());
      const typename CMatrixBlock::value_type& rhs_cmatrixblock = **rhs_obj;

      if (T::is_nonconformate_arguments(obj, rhs_obj)) {
        NanReturnUndefined();
      }

      NanReturnValue(NanNew<v8::Boolean>(value == rhs_cmatrixblock));
    } else if (CVectorBlock::is_cvectorblock(args[0])) {
      const CVectorBlock* const& rhs_obj =
          node::ObjectWrap::Unwrap<CVectorBlock>(args[0]->ToObject());
      const typename CVectorBlock::value_type& rhs_cvectorblock = **rhs_obj;

      if (T::is_nonconformate_arguments(obj, rhs_obj)) {
        NanReturnUndefined();
      }

      NanReturnValue(NanNew<v8::Boolean>(value == rhs_cvectorblock));
    } else if (CRowVectorBlock::is_crowvectorblock(args[0])) {
      const CRowVectorBlock* const& rhs_obj =
          node::ObjectWrap::Unwrap<CRowVectorBlock>(args[0]->ToObject());
      const typename CRowVectorBlock::value_type& rhs_crowvectorblock =
          **rhs_obj;

      if (T::is_nonconformate_arguments(obj, rhs_obj)) {
        NanReturnUndefined();
      }

      NanReturnValue(NanNew<v8::Boolean>(value == rhs_crowvectorblock));
    }
  }

  EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
  NanReturnUndefined();
})

}  // namespace EigenJS

#endif  // EIGENJS_CMATRIX_INSTANCE_METHOD_EQUALS_HPP
