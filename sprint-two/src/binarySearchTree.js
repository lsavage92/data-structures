var BinarySearchTree = function(value){
  var newBinarySearchTree = Object.create(BinarySearchTree.setPrototype);

  newBinarySearchTree.value = value;
  newBinarySearchTree.left = null;
  newBinarySearchTree.right = null;

  return newBinarySearchTree;
};

BinarySearchTree.setPrototype = {};

BinarySearchTree.setPrototype.insert = function(value) {
  if(value >= this.value && !this.right) {
    this.right = BinarySearchTree(value);
  } else if(value < this.value && !this.left) {
    this.left = BinarySearchTree(value);
  } else if(value >= this.value) {
    this.right.insert(value);
  } else {
    this.left.insert(value);
  }
};

BinarySearchTree.setPrototype.contains = function(value) {

};

BinarySearchTree.setPrototype.depthFirstLog = function(cb) {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
