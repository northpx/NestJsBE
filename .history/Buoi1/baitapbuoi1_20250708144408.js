//bai 1
function sumArray(arr) {
    if(arr.length == 0 ) return 'Array Empty!'
  const rs = arr.reduce((acc, cur) => acc + cur)
  return rs
}
console.log(sumArray([])); // 10

//bai 2
function findMax(arr){
    if(arr.length == 0 ) return 'Array Empty!'
    const rs = arr.reduce((acc, cur) => {return Math.max(acc,cur)}, -Infinity)
    return rs
}
console.log(findMax(arr1));

//bai 3
function filterEvenNumber(arr){
    if(arr.length == 0 ) return 'Array Empty!'
    const rs = arr.filter(ele => ele % 2 ==0)
    return rs
}
console.log(filterEvenNumber(arr1));

//bai 4
function countOccurrences(arr, value){
    if(arr.length == 0 ) return 'Array Empty!'
    const rs = arr.reduce((acc, cur) => {
        return cur === value ? acc + 1 : acc
    },0)
    return rs
}
console.log(countOccurrences(arr1, 2));

//bai 5
function reverseArray(arr) {
    if(arr.length == 0 ) return 'Array Empty!'
  const rs = arr.reverse()
  return rs
}
console.log(reverseArray(arr1));

//bai 6
function removeDuplicates(arr) {
    if(arr.length == 0 ) return 'Array Empty!'
  const rs = [...new Set(arr)]
  return rs
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

//bai 7
function sortArrayAscending(arr) {
    if(arr.length == 0 ) return 'Array Empty!'
  const rs = arr.sort((a,b) => a-b)
  return rs
}
console.log(sortArrayAscending(arr1));

//bai 8
function findMostFrequent(arr) {
  let count = {}
  let countMax = 0
  let eleMax = arr[0]
  for (const element of arr) {
    count[element] = (count[element] || 0) + 1
    if(count[element] > countMax) {
        countMax = count[element]
        eleMax = element
    }
  }
  return {
    eleMax: eleMax,
  }
}
console.log(findMostFrequent([1, 2, 3, 2, 1, 2])); // 2

//bai 9
function mergeAndRemoveDuplicates(arr1, arr2) {
  const arrCombined = [...arr1, ...arr2]
  const rs = [...new Set(arrCombined)]
  return rs
}
console.log(mergeAndRemoveDuplicates(arr1,arr2));

//bai 10
function isSymmetricArray(arr) {
    const n = arr.length
    console.log(n);
    for(let i = 0; i < n / 2; i++){
        if(arr[i] != arr[n - i - 1]){
            return false;
        }
    }
  return true;
}
console.log(isSymmetricArray(arr2));
