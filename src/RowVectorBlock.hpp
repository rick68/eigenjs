//
// RowVectorBlock.hpp
// ~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_ROWVECTORBLOCK_HPP
#define EIGENJS_ROWVECTORBLOCK_HPP

#include <v8.h>
#include <node.h>
#include <nan.h>

#include <boost/mpl/at.hpp>
#include <boost/mpl/int.hpp>

#include "base.hpp"
#include "definition.hpp"
#include "Matrix.hpp"
#include "MatrixBlock.hpp"
#include "RowVector.hpp"
#include "RowVectorBlock_fwd.hpp"
#include "RowVectorBlock/definitions.hpp"
#include "throw_error.hpp"

namespace EigenJS {

template <
  typename ScalarType
, typename ValueType
, const char* ClassName
>
class RowVectorBlock
  : public base<RowVectorBlock, ScalarType, ValueType, ClassName> {
 public:
  typedef base<
      ::EigenJS::RowVectorBlock, ScalarType, ValueType, ClassName> base_type;

  typedef ScalarType scalar_type;
  typedef ValueType value_type;

  typedef ::EigenJS::RowVector<scalar_type> RowVector;

 public:
  static void Init(v8::Handle<v8::Object> exports) {
    NanScope();

    v8::Local<v8::FunctionTemplate> tpl = NanNew<v8::FunctionTemplate>(New);
    NanAssignPersistent(base_type::function_template, tpl);
    tpl->SetClassName(NanNew(ClassName));
    tpl->InstanceTemplate()->SetInternalFieldCount(1);

    EIGENJS_OBJECT_INITIALIZE(Matrix, tpl)
    EIGENJS_OBJECT_INITIALIZE(MatrixBlock, tpl)
    EIGENJS_OBJECT_INITIALIZE(RowVector, tpl)

    exports->Set(NanNew(ClassName), tpl->GetFunction());
    NanAssignPersistent(base_type::constructor, tpl->GetFunction());
  }

  NAN_INLINE value_type& operator*() { return block_; }
  NAN_INLINE const value_type& operator*() const { return block_; }
  NAN_INLINE value_type* operator->() { return &block_; }
  NAN_INLINE const value_type* operator->() const { return &block_; }

 protected:
  explicit RowVectorBlock(
      const typename base_type::pointer_type& value_ptr
    , const typename value_type::Index& startCol
    , const typename value_type::Index& blockCols
  ) : base_type(value_ptr)
    , start_column_(startCol)
    , block_(
        base_type::value_ptr_->block(0, startCol, 1, blockCols)
      ) {}

  ~RowVectorBlock() {}

  static NAN_METHOD(New) {
    NanScope();

    if (args.Length() != 3) {
      NanThrowError(
          "Tried creating a block without "
          "RowVector, startCol and blockCols arguments");
      NanReturnUndefined();
    }

    if (!args.IsConstructCall()) {
      v8::Local<v8::Value> argv[] = { args[0], args[1], args[2] };
      NanReturnValue(
        base_type::new_instance(
          args
        , sizeof(argv) / sizeof(v8::Local<v8::Value>)
        , argv
        )
      );
    }

    if (args[1]->IsNumber() &&
        args[2]->IsNumber()
    ) {
      typename value_type::Index startRow = 0;
      typename value_type::Index startCol = args[1]->Int32Value();
      const typename value_type::Index& blockRows = 1;
      const typename value_type::Index& blockCols = args[2]->Int32Value();
      const typename value_type::Index&& rows = startRow + blockRows - 1;
      const typename value_type::Index&& cols = startCol + blockCols - 1;

      typename base_type::pointer_type value_ptr;

      if (RowVector::is_rowvector(args[0])) {
        const RowVector* const& rhs_obj =
            node::ObjectWrap::Unwrap<RowVector>(args[0]->ToObject());
        const RowVector& rhs_RowVector = *rhs_obj;
        const typename RowVector::value_type& rhs_rowvector =
            *rhs_RowVector;

        if (RowVector::is_out_of_range(rhs_rowvector, rows, cols)) {
          NanReturnUndefined();
        }

        value_ptr = rhs_RowVector;
      } else if (RowVectorBlock::is_rowvectorblock(args[0])) {
        const RowVectorBlock* const& rhs_obj =
            node::ObjectWrap::Unwrap<RowVectorBlock>(args[0]->ToObject());
        const RowVectorBlock& rhs_RowVectorBlock = *rhs_obj;
        const typename RowVectorBlock::value_type& rhs_rowvectorblock =
            *rhs_RowVectorBlock;

        if (RowVectorBlock::is_out_of_range(rhs_rowvectorblock, rows, cols)) {
          NanReturnUndefined();
        }

        value_ptr = rhs_RowVectorBlock;
        startCol += rhs_RowVectorBlock.start_column_;
      } else if (true) {
        EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
        NanReturnUndefined();
      }

      if (startCol >= 0 && blockCols >= 0) {
        RowVectorBlock* obj =
            new RowVectorBlock(value_ptr, startCol, blockCols);
        obj->Wrap(args.This());
        NanReturnValue(args.This());
      }
    }

    EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
    NanReturnUndefined();
  }

 private:
  typename value_type::Index start_column_;
  value_type block_;
};

}  // namespace EigenJS

#endif  // EIGENJS_ROWVECTORBLOCK_HPP
