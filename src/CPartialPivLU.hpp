//
// CPartialPivLU.hpp
// ~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_CPARTIALPIVLU_HPP
#define EIGENJS_CPARTIALPIVLU_HPP

#include <v8.h>
#include <node.h>
#include <nan.h>

#include "base.hpp"
#include "definition.hpp"
#include "CMatrix.hpp"
#include "CMatrixBlock.hpp"
#include "CPartialPivLU_fwd.hpp"
#include "CPartialPivLU/definitions.hpp"
#include "throw_error.hpp"

namespace EigenJS {

template <
  typename ScalarType
, typename ValueType
, const char* ClassName
>
class CPartialPivLU
  : public base<CPartialPivLU, ScalarType, ValueType, ClassName> {
 public:
  typedef base<::EigenJS::CPartialPivLU, ScalarType, ValueType, ClassName>
      base_type;

  typedef ScalarType scalar_type;
  typedef ValueType value_type;

  typedef ::EigenJS::CMatrix<scalar_type> CMatrix;
  typedef ::EigenJS::CMatrixBlock<scalar_type> CMatrixBlock;

 public:
  static void Init(v8::Handle<v8::Object> exports) {
    NanScope();

    v8::Local<v8::FunctionTemplate> tpl = NanNew<v8::FunctionTemplate>(New);
    NanAssignPersistent(base_type::function_template, tpl);
    tpl->SetClassName(NanNew(ClassName));
    tpl->InstanceTemplate()->SetInternalFieldCount(1);

    EIGENJS_OBJECT_INITIALIZE(CPartialPivLU, tpl)

    exports->Set(NanNew(ClassName), tpl->GetFunction());
    NanAssignPersistent(base_type::constructor, tpl->GetFunction());
  }

 protected:
  CPartialPivLU(
      const typename CMatrix::value_type& cmatrix
  ) : base_type()
    { *base_type::value_ptr_ = cmatrix.partialPivLu(); }

  CPartialPivLU(
      const typename CMatrixBlock::value_type& cmatrixblock
  ) : base_type()
    { *base_type::value_ptr_ = cmatrixblock.partialPivLu(); }

  ~CPartialPivLU() {}

  static NAN_METHOD(New) {
    NanScope();

    if (args.Length() != 1) {
      EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
      NanReturnUndefined();
    }

    if (!args.IsConstructCall()) {
      v8::Local<v8::Value> argv[] ={ args[0] };
      NanReturnValue(
        base_type::new_instance(
          args
        , sizeof(argv) / sizeof(v8::Local<v8::Value>)
        , argv
        )
      );
    }

    if (CMatrix::is_cmatrix(args[0])) {
      const CMatrix* const& rhs_obj =
          node::ObjectWrap::Unwrap<CMatrix>(args[0]->ToObject());
      const typename CMatrix::value_type& rhs_cmatrix = **rhs_obj;

      if (rhs_cmatrix.rows() != rhs_cmatrix.cols()) {
        NanThrowError("CPartialPivLU is only for square "
                      "(and moreover invertible) complex matrices");
        NanReturnUndefined();
      }

      CPartialPivLU* obj = new CPartialPivLU(rhs_cmatrix);
      obj->Wrap(args.This());
      NanReturnValue(args.This());
    } else if (CMatrixBlock::is_cmatrixblock(args[0])) {
      const CMatrixBlock* const& rhs_obj =
          node::ObjectWrap::Unwrap<CMatrixBlock>(args[0]->ToObject());
      const typename CMatrixBlock::value_type& rhs_cmatrixblock = **rhs_obj;

      if (rhs_cmatrixblock.rows() != rhs_cmatrixblock.cols()) {
        NanThrowError("CPartialPivLU is only for square "
                      "(and moreover invertible) complex matrices");
        NanReturnUndefined();
      }

      CPartialPivLU* obj = new CPartialPivLU(rhs_cmatrixblock);
      obj->Wrap(args.This());
      NanReturnValue(args.This());
    }

    EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
    NanReturnUndefined();
  }
};

}  // namespace EigenJS

#endif  // EIGENJS_CPARTIALPIVLU_HPP
