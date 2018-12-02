function foo(i) {
	i = bar(i);
	function bar(n) {
		var result = 0;
		for (var i = 0; i < n; i++)
        {
			result += i;
        }
		return result;
    }
	setTimeout(function() { console.log(i); }, 1000)
}
foo(10);
