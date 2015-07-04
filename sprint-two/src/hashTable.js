var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._numItems = 0;
};

HashTable.prototype.insert = function(k, v){
  this._numItems++;
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if( !bucket ){
    this._storage.set(i, [[k, v]]);
  }
  else{
    bucket.push([k, v]);
    this._storage.set(i, bucket);
  }
  if(this._numItems >= this._limit * 3 / 4 ){
    this._resize(this._limit * 2);
  }
};
//Time complexity O(1)

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for( var r = 0; r < bucket.length; r++){
    if( k === bucket[r][0] ){
      return bucket[r][1];
    }
  }
  return null;
};
//Time complexity O(1)

HashTable.prototype.remove = function(k){
  this._numItems--;
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for( var r = 0; r < bucket.length; r++){
    if( k === bucket[r][0] ){
      bucket.splice(r, 1);
    }
  }
  if(this._numItems <= this._limit * 1 / 4 && this._limit > 8){
    this._resize(this._limit / 2);
  }
};
//Time complexity O(1)

HashTable.prototype._resize = function( size ){
  var bucketStorage = this._storage;
  this._numItems = 0;
  this._storage = LimitedArray(size);
  this._limit = size;
  bucketStorage.each( function( bucket ) {
    if( bucket ){
      bucket.forEach( function( tuple ){
        this.insert(tuple[0], tuple[1]);
      }.bind(this));
    }
  }.bind(this));
};
//Time complexity O(n)

/*
 * Complexity: What is the time complexity of the above functions?
 */
