// Fill In Js
// array.fill(value, start, end)

let a = ['kanishk', 'kumar', 'lamba', 'iitjodhpur', '3rdyr'];
console.log(a.fill('kanishk', 1, 4));


let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
b.fill('k', 2, 3);
b.fill('a', 3, 4);
b.fill('n', 4, 5);
b.fill('i', 5, 6);
b.fill('s', 6, 7);
b.fill('h', 7, 8);
b.fill('k', 8, 9);
console.log(b);

//Filter in Js

function positive(value){
    return value>0;
}
    let PositiveValue = [1, -1, 100, 0 , 0.99].filter(positive);

console.log (PositiveValue);

function LambaJi(hello){
    return hello % 2 == 1 ;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].filter(LambaJi);
console.log(numbers);