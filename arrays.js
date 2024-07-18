
let arrayName = ['a', 'b', 'c', 'd'];
arrayName.push('AAA');
console.log(arrayName);

arrayName.unshift('BBB');
console.log(arrayName);

let RemoveLastElement = arrayName.pop();
console.log(arrayName);

let RemoveFirstElement = arrayName.shift();
console.log(arrayName);

let RemoveElement = arrayName.splice(2, 1);
console.log(arrayName);

let length = arrayName.length;
console.log(length);

console.log(arrayName.toString());

let secondArray = ['1', '2'];
let concateArray = arrayName.concat(secondArray);

console.log(concateArray);

arrayName.length = 7;
console.log(arrayName);
