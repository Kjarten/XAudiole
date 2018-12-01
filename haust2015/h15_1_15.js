function calc(f, g, x) {
  return f(x) + g(x);
}

var x =5;
var square = function (x) { return x*x; }
  var result = calc(square, function (y) {
    return x + y + 10;
  }, 2);

  console.log(result);
