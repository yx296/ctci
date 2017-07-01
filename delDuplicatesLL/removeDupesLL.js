function Node(val) {
	this.val = val;
	this.next = null;
}





function removeDupesLL(node) {
	var nodeHash = {};
	var currNode = node;
	var previous;
	nodeHash[currNode.val] = true;
	while (currNode) {
		if (!nodeHash[currNode.val]) { // if node is not in hash, store it in hash and point previous to current
			nodeHash[currNode.val] = true;
			previous = currNode;
		} else {
			// if node is duplicate, skip it
			previous.next = currNode.next
		}

		currNode = currNode.next;
	}
	return node;
}

var NodeA = new Node(1);
var NodeB = NodeA.next = new Node(1);
var NodeC = NodeB.next = new Node(2);
var NodeD = NodeC.next = new Node(1);
var NodeE = NodeD.next = new Node(2);



// console.log(JSON.stringify(NodeA));
// removeDupesLL(NodeA);
// console.log(JSON.stringify(NodeA));
console.log(JSON.stringify(removeDupesLL(NodeA)));
