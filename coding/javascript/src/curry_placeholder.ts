const join = (a, b, c) => {
  return `${a}_${b}_${c}`
}

const curriedJoin = curry(join)
const _ = curry.placeholder

console.log(curriedJoin(1, 2, 3)) // '1_2_3'

console.log(curriedJoin(_, 2)(1, 3)) // '1_2_3'

console.log(curriedJoin(_, _, _)(1)(_, 3)(2)) // '1_2_3'


function curry(fn) {
  return function curried(...args) {
    return args.length >= fn.length && !args.includes(curry.placeholder)
      ? fn(...args)
      : (...args2) => curried(
        ...args.map(a => a === curry.placeholder ? args2.shift() : a),
        ...args2
      )
  }
}


curry.placeholder = Symbol()
