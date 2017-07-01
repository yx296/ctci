function powersOf2(n) {
  if (n < 1) {
    return 0;
  } else if (n === 1) {
    console.log(1);
    return 1;
  } else {
    var prev = powersOf2(n/2);
    var curr = prev * 2;
    console.log(curr);
    return curr;
  }
}

powersOf2(6);