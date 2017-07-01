function Node(val) {
  this.val = val;
  this.next = null;
}


function removeDupesLL(node) {
  var curr = node;
  while (curr) {
    var runner = curr;
    while (runner) {
      if (runner.next && runner.next.val === curr.val) {
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }
    }
    curr = curr.next;
  }
}

var NodeA = new Node(1);
var NodeB = NodeA.next = new Node(1);
var NodeC = NodeB.next = new Node(1);
var NodeD = NodeC.next = new Node(2);
var NodeE = NodeD.next = new Node(1);

console.log(JSON.stringify(NodeA));
removeDupesLL(NodeA);
console.log(JSON.stringify(NodeA));
// console.log(JSON.stringify((NodeA));
// console.log(JSON.stringify(removeDupesL(NodeA)));


// c
// r
// 1  2 2 1 11 2
//
// c
// p  n  n2
// 1  1  1  2  2 1
//
//
// c
// p    n
//
// 1    2   2   1
