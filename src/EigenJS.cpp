//
// EigenJS.cpp
// ~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#include <cstdlib>
#include <ctime>

#include "Complex.hpp"
#include "Matrix.hpp"
#include "CMatrix.hpp"

#include "Vector.hpp"
#include "CVector.hpp"

#include "RowVector.hpp"
#include "CRowVector.hpp"

#include "MatrixBlock.hpp"
#include "CMatrixBlock.hpp"

#include "VectorBlock.hpp"
#include "CVectorBlock.hpp"

#include "RowVectorBlock.hpp"
#include "CRowVectorBlock.hpp"

namespace EigenJS {

void Init(v8::Handle<v8::Object> exports) {
  std::srand(static_cast<unsigned int>(std::time(0)));
  std::rand();

  Complex<>::Init(exports);

  Matrix<>::Init(exports);
  CMatrix<>::Init(exports);

  Vector<>::Init(exports);
  CVector<>::Init(exports);

  RowVector<>::Init(exports);
  CRowVector<>::Init(exports);

  MatrixBlock<>::Init(exports);
  CMatrixBlock<>::Init(exports);

  VectorBlock<>::Init(exports);
  CVectorBlock<>::Init(exports);

  RowVectorBlock<>::Init(exports);
  CRowVectorBlock<>::Init(exports);
}

}  // namespace EigenJS

NODE_MODULE(eigen, EigenJS::Init)
