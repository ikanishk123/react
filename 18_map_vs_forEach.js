// forEach returns "undefined";
// map returns a new array;

function practice(i) {
    return i + 1;
};

var a = [-1, 0, 1, 2];
var b = [0];
var c = [0];

b = a.forEach(practice);
console.log(a);
console.log(b);

c = a.map(practice);
console.log(a);
console.log(c);


function A() {

    const number01 = [12, 24, 36, 100];
    const number03 = [];

    function name (number02) {
        number03.push((number02 * 2) + 2);
    }

    number01.forEach(name);
    console.log(number03);
}
A();


