var Graph = function(){
  this.storage = {};

};

Graph.prototype.addNode = function( node ){
  this.storage[node] = {value: node, edges: []};
};
//Time complexity O( 1 )

Graph.prototype.contains = function( node ){
  for( var key in this.storage ) {
    if( this.storage[key].value === node ) {
      return true;
    }
  }
  return false;
};
//Time complexity O( n )

Graph.prototype.removeNode = function( node ){
  delete this.storage[node];
};
//Time complexity O( 1 )

Graph.prototype.hasEdge = function( fromNode, toNode ){
  return this.storage[fromNode].edges.some( function( edge ) {
    return edge === toNode;
  } );
};
//Time complexity O( n )

Graph.prototype.addEdge = function( fromNode, toNode ){
  this.storage[fromNode].edges.push( toNode );
  this.storage[toNode].edges.push( fromNode );
};
//Time complexity O( 1 )

Graph.prototype.removeEdge = function( fromNode, toNode ){
  this.storage[fromNode].edges = this.storage[fromNode].edges.filter( function( edge ){
    return edge !== toNode;
  } );

  this.storage[toNode].edges = this.storage[toNode].edges.filter( function( edge ){
    return edge !== fromNode;
  } );
};
//Time complexity O( n )

Graph.prototype.forEachNode = function( cb ){
  for( var key in this.storage ) {
    cb( this.storage[key].value );
  }
};
//Time complexity O( n )

/*
 * Complexity: What is the time complexity of the above functions?
 */

// {value: 3, edges: [{vale: 2, edges: [*first node*, ... ]}]}

