function Node(val) {
    this.val = val;
    this.next = null;
}


// var A = new ListNode(1);
// var B = A.next = new ListNode(2);
// var C = B.next = new ListNode(3);
// var D = C.next = new ListNode(1);
// var E = D.next = new ListNode(4);

var deleteDuplicates = function(head) {
    var hash  = {};
    var currNode = head;
    while(currNode) {
        hash[currNode.val] = true;
        var nextNode = currNode.next;
        // if nextnode is not null and is a duplicate, move on to node after that
        while (nextNode !== null && hash[nextNode.val]) { 
            nextNode = nextNode.next;
        }
        currNode.next = nextNode;
        currNode = currNode.next;
    }
    return head;
};



var NodeA = new Node(1);
var NodeB = NodeA.next = new Node(2);
var NodeC = NodeB.next = new Node(1);
var NodeD = NodeC.next = new Node(2);
var NodeE = NodeD.next = new Node(1);

// console.log(JSON.stringify(NodeA));
// console.log(JSON.stringify(removeDupesLL(NodeA)));

console.log(JSON.stringify(deleteDuplicates(NodeA)));