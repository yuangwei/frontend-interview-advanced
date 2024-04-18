function flat(arr, depth = 1) {
  const res = []
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    if (Array.isArray(item) && depth > 0) {
      res.push(...flat(item, depth - 1))
    } else {
      res.push(item)
    }
  }
  return res
}


const arr = [1, [2], [3, [4]]];

console.log(JSON.stringify(flat(arr)))
// [1, 2, 3, [4]]

console.log(JSON.stringify(flat(arr, 1)))
// [1, 2, 3, [4]]

console.log(JSON.stringify(flat(arr, 2)))
// [1, 2, 3, 4]

