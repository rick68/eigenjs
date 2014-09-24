//
// PartialPivLU.hpp
// ~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_PARTIALPIVLU_HPP
#define EIGENJS_PARTIALPIVLU_HPP

#include <v8.h>
#include <node.h>
#include <nan.h>

#include "base.hpp"
#include "definition.hpp"
#include "Matrix.hpp"
#include "MatrixBlock.hpp"
#include "PartialPivLU_fwd.hpp"
#include "PartialPivLU/definitions.hpp"
#include "throw_error.hpp"

namespace EigenJS {

template <
  typename ScalarType
, typename ValueType
, const char* ClassName
>
class PartialPivLU
  : public base<PartialPivLU, ScalarType, ValueType, ClassName> {
 public:
  typedef base<::EigenJS::PartialPivLU, ScalarType, ValueType, ClassName>
      base_type;

  typedef ScalarType scalar_type;
  typedef ValueType value_type;

  typedef ::EigenJS::Matrix<scalar_type> Matrix;
  typedef ::EigenJS::MatrixBlock<scalar_type> MatrixBlock;

 public:
  static void Init(v8::Handle<v8::Object> exports) {
    NanScope();

    v8::Local<v8::FunctionTemplate> tpl = NanNew<v8::FunctionTemplate>(New);
    NanAssignPersistent(base_type::function_template, tpl);
    tpl->SetClassName(NanNew(ClassName));
    tpl->InstanceTemplate()->SetInternalFieldCount(1);

    EIGENJS_OBJECT_INITIALIZE(PartialPivLU, tpl)

    exports->Set(NanNew(ClassName), tpl->GetFunction());
    NanAssignPersistent(base_type::constructor, tpl->GetFunction());
  }

 protected:
  PartialPivLU(
      const typename Matrix::value_type& matrix
  ) : base_type()
    { *base_type::value_ptr_ = matrix.partialPivLu(); }

  PartialPivLU(
      const typename MatrixBlock::value_type& matrixblock
  ) : base_type()
    { *base_type::value_ptr_ = matrixblock.partialPivLu(); }

  ~PartialPivLU() {}

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

    if (Matrix::is_matrix(args[0])) {
      const Matrix* const& rhs_obj =
          node::ObjectWrap::Unwrap<Matrix>(args[0]->ToObject());
      const typename Matrix::value_type& rhs_matrix = **rhs_obj;

      if (!PartialPivLU::is_square_matrix(rhs_obj)) {
        NanReturnUndefined();
      }

      PartialPivLU* obj = new PartialPivLU(rhs_matrix);
      obj->Wrap(args.This());
      NanReturnValue(args.This());
    } else if (MatrixBlock::is_matrixblock(args[0])) {
      const MatrixBlock* const& rhs_obj =
          node::ObjectWrap::Unwrap<MatrixBlock>(args[0]->ToObject());
      const typename MatrixBlock::value_type& rhs_matrixblock = **rhs_obj;

      if (!PartialPivLU::is_square_matrix(rhs_obj)) {
        NanReturnUndefined();
      }

      PartialPivLU* obj = new PartialPivLU(rhs_matrixblock);
      obj->Wrap(args.This());
      NanReturnValue(args.This());
    }

    EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
    NanReturnUndefined();
  }
};

}  // namespace EigenJS

#endif  // EIGENJS_PARTIALPIVLU_HPP
