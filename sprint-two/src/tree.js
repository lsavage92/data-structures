var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  // {head: {child:{}, child:{}}}
  //var tree = new Tree()
  //{value: "value", children: {{value: "value", children:}}}
  // your code here
  newTree.children = [];  // fix me, array?
  _.extend(newTree, Tree.treeMethods);

  return newTree;
};



Tree.treeMethods = {};

Tree.treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

Tree.treeMethods.contains = function(target){

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
