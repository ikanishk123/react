//slice used to extract from array and it makes a new array
//splice modify the array and it modifies in the orignal array

//slice
let alphabets=['a', 'b', 'c', 'd', 'e', 'f', 'g'];
let selected_alphabets = alphabets.slice(4, 7);

console.log(alphabets);
console.log(selected_alphabets);

//splice
alphabets.splice(7,0, 'h', 'i','j', 'k', 'l');
console.log(alphabets);

alphabets.splice(7, 3);
console.log(alphabets)