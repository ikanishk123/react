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