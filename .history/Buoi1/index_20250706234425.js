const a = 5
let result = (a % 2 == 0) ? "So chan" : "So le"
console.log(result)

// const day = Number(prompt('Nhap ngay trong tuan'))
const day = 10
switch (day) {
    case 1:
        console.log("Hom nay la thu 2");
        break;
    case 2:
        console.log("Hom nay la thu 3");
        break;
    case 3:
        console.log("Hom nay la thu 4");
        break;
    default:
        console.log("Khong phai ngay hop le!");
        
}

for (let i = 0; i <= 10; i++) {
    console.log(`i = ${i}`);
}

let i = 1;
while (i<=10) {
    console.log(i);
    i++;
}

let result2 = ''

for (let i = 1; i <= 15; i++){
    if(i % 3 == 0 && i % 5 == 0){
        result2 = 'FizzBuzz'
    }
    else if(i % 3 == 0){
        result2 = 'Buzz'
    }
    else if(i % 5 == 0){
        result2 = 'Fizz'
    }
    else result2 = i
    console.log(result2);
}

const greet = function (name){
    return `Hello ${name}`
}

console.log(greet('John'));



function sum(...params) {
    let total = 0
    for (let i = 0; i < params.length; i++){
        total += arguments[i]
    }
    console.log(typeof arguments);
    return total
}

console.log(sum(1,2,3,4,5));

const arr = [{name:'Hung', score: 75},{name:'Huy', score: 80},{name:'Hi', score: 85}]
const arr1 = [1, 2, 3, 4, 5]

const rs = arr.reduce((accumulator, currentValue) => {
    return Math.max(accumulator, currentValue.score)
}, -Infinity)

console.log(rs);

const rs1 = arr1.reduce((acc, cur) => acc + cur)

console.log(rs1);

function findMax(arr){
    const rs = arr.reduce((acc, cur) => {return Math.max(acc,cur)}, -Infinity)
    return rs
}

console.log(findMax(arr1));

function filterEvenNumber(arr){
    const rs = arr.filter(ele => ele % 2 ==0)
    return rs
}
console.log(filterEvenNumber(arr1));

function countOccurrences(arr, value){
    const rs = arr.reduce((acc, cur) => {
        return 
    })
    return rs
}