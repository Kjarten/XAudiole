function foo(i) {
   i = bar(i);
   function bar(n) {
       var result = 1;
       for (var i = 1; i <= n; i++)
       {
           result *= i;
       }
       return result;
   }
   setTimeout(function() { console.log(i); }, 10000)
}
foo(3);
