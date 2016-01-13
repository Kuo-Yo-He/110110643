function min() {
  var a = arguments[0];
  for (var i in arguments) {
    if (arguments[i] < a)
      a = arguments[i];
    }
  return a;
    }

var b = min(2, 10);
console.log("b=min(2, 10)=", b);
