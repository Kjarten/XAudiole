function falsyTest(x) {
  if(x) {
    console.log(x);
    console.log('True');
  } else if(!x) {
    console.log(x);
    console.log('Falsy');
  } else if(x === 'undefined') {
    console.log(x);
    console.log('Undefined');
  }
}

var x = "0";
var y = [];
var z = NaN;
var q = 1;

falsyTest(x)
falsyTest(y)
falsyTest(z)
falsyTest(q)
