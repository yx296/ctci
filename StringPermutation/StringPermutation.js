function permutation(str, prefix) {
  if (str.length == 0) {
    console.log(prefix);
  } else {
    for (var i = 0; i < str.length; i++) {
      var rem = str.substring(0, i) + str.substring(i + 1);
      permutation(rem, prefix + str[i]);
    }
  }
}


permutation("dog", "");