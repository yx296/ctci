function printFib(n) {
   var memo = [];

  function fib(n) {
    debugger;
    if (n <= 0) {
      return 0;
    } else if (n == 1) {
      return 1;
    } else if (memo[n]) {
      return memo[n];
    }
    memo[n] = fib(n-1) + fib(n-2);
    return memo[n];
  }

  return fib(n);
}


console.log(printFib(4));