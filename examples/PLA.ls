/*
 * Perceptron Learning Algorithm
 */

dataset_size = 100
dataset_dimension = 2
dataset_maxvalue = 1
threshold = 0

require! eigenjs: Eigen

const Matrix = Eigen.Matrix
const Vector = Eigen.Vector

sign = (A) ->
  if typeof A is \number then
    return if A >= 0 then 1 else -1
  else if A instanceof Matrix then
    A.visit (value, row, col) !->
      A.set row, col, if value >= 0 then 1 else -1
  return A

# initialize a random data set
const D = Matrix.Random dataset_size, dataset_dimension + 1 \
  .visit (value, row, col) !->
    @set row, col, value * dataset_maxvalue \
  .col 0 .setOnes! # the all X0 in data set must be 1

# initialize Wi for creating the data set of linear separable
const Wi = Vector.Random dataset_dimension + 1
console.log "Wi =\n%s\n", Wi

# initialize W
W = Vector D.row 0
  .set 0, -threshold

# initialize Y that is a result from the data set of linear separable
const Y = sign D.mul Wi

# using Perceptron Linear Algoritm to get Wf
for i til D.rows!
  if sign(W.dot D.row i) isnt Y.row(i).value! then
    W.adda(Y.row i .mul D.row i .transpose!)
    i$ = -0

const Wf = Vector W
console.log "Wf =\n%s\n", Wf

# reset W
W.assign(D.row 0 .transpose!)
  .set 0, -threshold
console.log "W = \n%s\n", W

term = 0
T = 0

# using Perceptron Linear Algoritm again to check Wf
for i til D.rows!
  if i >= term then
    term := i
  if sign(W.dot D.row i) isnt Y.row(i).value! then
    W.adda(Y.row i .mul D.row i .transpose!)
    ++T
    i$ = -1
    console.log "t = %d, i = %d, θ = %d, |W| = %d, WfT•W = %d"
    , term + 1, i
    , Math.acos(Wf.transpose!.dot(W) / (Wf.norm! * W.norm!))
    , W.norm!
    , Wf.transpose!.dot W
console.log!

# calculate R
const R = do ->
  max = 0
  for i til D.rows!
    norm = D.row i .norm!
    max = norm if norm > max
  return max * max
console.log "R = %d", R

# calculate ρ
const ρ = do ->
  WfN = Vector Wf .normalize!
  min = Y.row 0 .value! * WfN .dot D.row 0
  for i from 1 til D.rows!
    res = Y.row i .value! * WfN .dot D.row i
    min = res if min > res
  return min
console.log "ρ = %d", ρ

console.log "R²/ρ² = %d", Math.pow R / ρ, 2
console.log "T = %d", T

console.log \Done
