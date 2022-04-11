Array.prototype.even = function () {
    return this.filter(n => n % 2 == 0);
}

Array.prototype.odd = function () {
    return this.filter(n => n % 2 != 0);
}

let e = [4,8,9,7].even();
let o = [4,8,9,7].odd();
console.log(e);
console.log(o);


console.log([1,2,3,4,5,6,7,8].even());
console.log([1,2,3,4,5,6,7,8].odd());