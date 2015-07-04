var Tree = function( value ){
  var newTree = {};
  newTree.value = value;
  // {head: {child:{}, child:{}}}
  //var tree = new Tree()
  //{value: "value", children: {{value: "value", children:}}}
  // your code here
  newTree.children = [];  // fix me, array?
  _.extend( newTree, Tree.treeMethods );

  return newTree;
};



Tree.treeMethods = {};

Tree.treeMethods.addChild = function( value ){
  this.children.push( Tree( value ) );
};
//Time complexity: O( 1 )

Tree.treeMethods.contains = function( target ){
  if( this.value === target ){
    return true;
  }
  else{
    return this.children.some( function( child ) {
      if( child.contains( target ) ){
        return true;
      }
    } );

    return false;
  }
};
//Time complexity: O( n )


/*
 * Complexity: What is the time complexity of the above functions?
 */
