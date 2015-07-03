var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = Node(value);
    if(list.tail !== null) {
      // point current tail to new tail
      list.tail.next = node;
      list.tail = node;
    } else {
      list.head = node;
      list.tail = node;
    }
  };

  list.removeHead = function(){
    if(list.head !== null) {
      var oldHead = list.head.value;
      list.head = list.head.next;
      return oldHead;
    }
  };

  list.contains = function(target){
    var node = list.head;
    do {
      if(node.value === target) {
        return true;
      }
      node = node.next;
    } while(node !== null);
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// head/tail {4: null} > head {4: {5: null}} tail {5: null}