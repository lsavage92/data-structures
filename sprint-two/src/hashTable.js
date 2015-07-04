var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._numItems = 0;
};

HashTable.prototype.insert = function(k, v){
  this._numItems++;
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tmp = this._storage.get(i);
  if( !tmp ){
    this._storage.set(i, [[k, v]]);
  }
  else{
    tmp.push([k, v]);
    this._storage.set(i, tmp);
  }
  if(this._numItems >= this._limit * 7/8 ){
    this._resize(this._limit * 2);
  }
};
//Time complexity O(1)

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
//Time complexity O(1)

HashTable.prototype.remove = function(k){
  this._numItems--;
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tmp = this._storage.get(i);
  for( var r = 0; r < tmp.length; r++){
    if( k === tmp[r][0] ){
      tmp.splice(r, 1);
    }
  }
  if(this._numItems <= this._limit * 1 / 8 && this._limit > 8){
    this._resize(this._limit / 2);
  }
};
//Time complexity O(1)

HashTable.prototype._resize = function( size ){
  var trueThis = this;
  var tmpStorage = this._storage;
  trueThis._numItems = 0;
  trueThis._storage = LimitedArray(size);
  trueThis._limit = size;
  tmpStorage.each( function( bucket ) {
    if( bucket ){
      bucket.forEach( function( tuple ){
        trueThis.insert(tuple[0], tuple[1]);
      });
    }
  });
};
//Time complexity O(n)

/*
 * Complexity: What is the time complexity of the above functions?
 */
