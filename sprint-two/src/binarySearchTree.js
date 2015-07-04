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
//Time complexity O(1)

BinarySearchTree.setPrototype.contains = function(value) {
  if(this.value === value) {
    return true;
  } else if(value >= this.value && this.right) {
    return this.right.contains(value);
  } else if(value < this.value && this.left) {
    return this.left.contains(value);
  }
  return false;
};
//Time complexity O(log(n))

BinarySearchTree.setPrototype.depthFirstLog = function(cb) {
  cb(this.value);
  if(this.right) {
    this.right.depthFirstLog(cb);
  }
  if(this.left) {
    this.left.depthFirstLog(cb);
  }
};
//Time complexity O(n)

/*
 * Complexity: What is the time complexity of the above functions?
 */
