var Set = function(){
  var set = Object.create( setPrototype );
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function( item ){
  this._storage[item] = item;
};
//Time complexity O( 1 )

setPrototype.contains = function( item ){
  //!! coerces to boolean
  return !!this._storage[item];
};
//Time complexity O( 1 )

setPrototype.remove = function( item ){
  delete this._storage[item];
};
//Time complexity O( 1 )

/*
 * Complexity: What is the time complexity of the above functions?
 */
