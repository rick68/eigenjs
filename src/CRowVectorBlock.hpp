//
// CRowVectorBlock.hpp
// ~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_CROWVECTORBLOCK_HPP
#define EIGENJS_CROWVECTORBLOCK_HPP

#include <v8.h>
#include <node.h>
#include <nan.h>

#include <boost/mpl/at.hpp>
#include <boost/mpl/int.hpp>

#include "base.hpp"
#include "definition.hpp"
#include "CMatrix.hpp"
#include "CMatrixBlock.hpp"
#include "CRowVector.hpp"
#include "CRowVectorBlock_fwd.hpp"
#include "CRowVectorBlock/definitions.hpp"
#include "throw_error.hpp"

namespace EigenJS {

template <
  typename ScalarType
, typename ValueType
, const char* ClassName
>
class CRowVectorBlock
  : public base<CRowVectorBlock, ScalarType, ValueType, ClassName> {
 public:
  typedef base<
      ::EigenJS::CRowVectorBlock, ScalarType, ValueType, ClassName> base_type;

  typedef ScalarType scalar_type;
  typedef ValueType value_type;

  typedef ::EigenJS::CRowVector<scalar_type> CRowVector;

 public:
  static void Init(v8::Handle<v8::Object> exports) {
    NanScope();

    v8::Local<v8::FunctionTemplate> tpl = NanNew<v8::FunctionTemplate>(New);
    NanAssignPersistent(base_type::function_template, tpl);
    tpl->SetClassName(NanNew(ClassName));
    tpl->InstanceTemplate()->SetInternalFieldCount(1);

    EIGENJS_OBJECT_INITIALIZE(CMatrix, tpl)
    EIGENJS_OBJECT_INITIALIZE(CMatrixBlock, tpl)
    EIGENJS_OBJECT_INITIALIZE(CRowVector, tpl)

    exports->Set(NanNew(ClassName), tpl->GetFunction());
    NanAssignPersistent(base_type::constructor, tpl->GetFunction());
  }

  NAN_INLINE value_type& operator*() { return block_; }
  NAN_INLINE const value_type& operator*() const { return block_; }
  NAN_INLINE value_type* operator->() { return &block_; }
  NAN_INLINE const value_type* operator->() const { return &block_; }

 protected:
  explicit CRowVectorBlock(
      const typename base_type::pointer_type& value_ptr
    , const typename value_type::Index& startCol
    , const typename value_type::Index& blockCols
  ) : base_type(value_ptr)
    , start_column_(startCol)
    , block_(
        base_type::value_ptr_->block(0, startCol, 1, blockCols)
      ) {}

  ~CRowVectorBlock() {}

  static NAN_METHOD(New) {
    NanScope();

    if (args.Length() != 3) {
      NanThrowError(
          "Tried creating a block without "
          "CRowVector, startCol and blockCols arguments");
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
      const typename value_type::Index startRow = 0;
      typename value_type::Index startCol = args[1]->Int32Value();
      const typename value_type::Index blockRows = 1;
      const typename value_type::Index& blockCols = args[2]->Int32Value();
      const typename value_type::Index&& rows = startRow + blockRows - 1;
      const typename value_type::Index&& cols = startCol + blockCols - 1;

      typename base_type::pointer_type value_ptr;

      if (CRowVector::is_crowvector(args[0])) {
        const CRowVector* const& rhs_obj =
            node::ObjectWrap::Unwrap<CRowVector>(args[0]->ToObject());
        const CRowVector& rhs_CRowVector = *rhs_obj;
        const typename CRowVector::value_type& rhs_crowvector =
            *rhs_CRowVector;

        if (CRowVector::is_out_of_range(rhs_crowvector, rows, cols)) {
          NanReturnUndefined();
        }

        value_ptr = rhs_CRowVector;
      } else if (CRowVectorBlock::is_crowvectorblock(args[0])) {
        const CRowVectorBlock* const& rhs_obj =
            node::ObjectWrap::Unwrap<CRowVectorBlock>(args[0]->ToObject());
        const CRowVectorBlock& rhs_CRowVectorBlock = *rhs_obj;
        const typename CRowVectorBlock::value_type& rhs_crowvectorblock =
            *rhs_CRowVectorBlock;

        if (CRowVectorBlock::is_out_of_range(rhs_crowvectorblock, rows, cols)
        ) {
          NanReturnUndefined();
        }

        value_ptr = rhs_CRowVectorBlock;
        startCol += rhs_CRowVectorBlock.start_column_;
      } else if (true) {
        EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
        NanReturnUndefined();
      }

      if (startCol >= 0 && blockCols >= 0) {
        CRowVectorBlock* obj =
            new CRowVectorBlock(value_ptr, startCol, blockCols);
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

#endif  // EIGENJS_CROWVECTORBLOCK_HPP
