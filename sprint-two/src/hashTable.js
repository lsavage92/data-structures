var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tmp = this._storage.get(i);
  if( !tmp ){
    this._storage.set(i, [[k, v]]);
  }
  else{
    tmp.push([k, v]);
    this._storage.set(i, tmp);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tmp = this._storage.get(i);
  for( var r = 0; r < tmp.length; r++){
    if( k === tmp[r][0] ){
      return tmp[r][1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tmp = this._storage.get(i);
  for( var r = 0; r < tmp.length; r++){
    if( k === tmp[r][0] ){
      tmp.splice(r, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
