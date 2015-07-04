

var Graph = function(){
  this.storage = {};

};

Graph.prototype.addNode = function(node){
  this.storage[node] = {value: node, edges: []};
};

Graph.prototype.contains = function(node){
  for(var key in this.storage) {
    if(this.storage[key].value === node) {
      return true;
    }
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  delete this.storage[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  for(var i = 0; i < this.storage[fromNode].edges.length; i++) {
    if(this.storage[fromNode].edges[i] === toNode) {
      return true;
    }
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.storage[fromNode].edges.push(toNode);
  this.storage[toNode].edges.push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  for(var i = 0; i < this.storage[fromNode].edges.length; i++) {
    if(this.storage[fromNode].edges[i] === toNode) {
      this.storage[fromNode].edges.splice(i, 1);
    }
  }
  for(var i = 0; i < this.storage[toNode].edges.length; i++) {
    if(this.storage[toNode].edges[i] === fromNode) {
      this.storage[toNode].edges.splice(i, 1);
    }
  }
};

Graph.prototype.forEachNode = function(cb){
  for(var key in this.storage) {
    cb(this.storage[key].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// {value: 3, edges: [{vale: 2, edges: [*first node*, ... ]}]}

