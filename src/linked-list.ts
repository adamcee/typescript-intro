console.log('hi!');

interface LinkedListNode {
  prev: null | LinkedListNode;
  next: null | LinkedListNode;
  val: string;
}

const linkedListHead: LinkedListNode = {
  prev: null,
  next: null,
  val: "a",
};

/**
 * Pass head of the list in as an argument. It will recursively iterate thru
 * the list and then add a new node w/the new val at the tail.
 * 
 * @param current Current node we're at in the linked list
 * @param val Val to add to new tail (last) node of linked list
 * 
 * @returns newTail
 *          Returns the new tail node in the list so we can do something
 *          with it if we want. 
 */
function addToEndOfList(current: LinkedListNode, val: string): LinkedListNode {
    console.log('at node ', current.val);

    // First, figure out your base case - figure out when we are at the tail.
    if( /* Fill in logic here checking if we're at the tail */ ) {
      // When we're at the tail, create the new node, add it to the end of the list, 
      // and - IMPORTANTLY - return the new tail!

    }

    // Otherwise, we recurse to get the next node in the linked list
    else {
      return addToEndOfList(current.next, val);
    }
}

console.log(" ---------------");
console.log(
  addToEndOfList(linkedListHead, "b").val
);

console.log(" ---------------");
console.log(
  addToEndOfList(linkedListHead, "c").val
);

console.log(" ---------------");
console.log(
  addToEndOfList(linkedListHead, "d").val
);