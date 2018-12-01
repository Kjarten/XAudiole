function multiplier(x) {
  return function (y) { return x * y; }
}

var y = 10;
var m = multiplier(2);

console.log(y + m(5));
