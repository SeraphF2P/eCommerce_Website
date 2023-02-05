import { randomNumBetween } from "./other"

export function first(array, n = 1) {
  if (n === 1) return array[0]
  return array.filter((_, index) => index < n)
}

export function last(array, n = 1) {
  if (n === 1) return array[array.length - 1]
  return array.filter((_, index) => array.length - index <= n)
}

export function sample(array) {
  return array[randomNumBetween(0, array.length - 1)]
}

export function pluck(array, key) {
  return array.map(element => element[key])
}

export function groupBy(array, key) {
  return array.reduce((group, element) => {
    const keyValue = element[key]
    return { ...group, [keyValue]: [...(group[keyValue] ?? []), element] }
  }, {})
}

export function reArrangeDataIntoSmallerArrays(Array, smaller_arrays_length) {
  let result = [];
  for (let i = 0; i < Array.length; i += smaller_arrays_length) {
    let subArray = [];
    for (let j = 0; j < smaller_arrays_length; j++) {
      if (Array[j + i] !== undefined) {
        subArray.push({ subArray_index: (i / smaller_arrays_length), index: j, ...Array[j + i] });
      }
    }
    result.push(subArray);
  }
  return result;
}

export function disArrangeArray(ArrayOfArrays) {
  let result = [];
  ArrayOfArrays.map(arr => {
    result.push(...arr)
  })
  return result;
}