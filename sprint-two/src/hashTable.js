var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray( this._limit );
  this._numItems = 0;
};

//Insert tuple into appropriate bucket
HashTable.prototype.insert = function( k, v ){
  this._numItems++;
  var i = getIndexBelowMaxForKey( k, this._limit );
  var bucket = this._storage.get( i );
  if( !bucket ){
    this._storage.set( i, [[k, v]] );
  }
  else{
    bucket.push( [k, v] );
    this._storage.set( i, bucket );
  }
  if( this._numItems >= this._limit * 3 / 4 ){
    this._resize( this._limit * 2 );
  }
};
//Time complexity O( 1 )

//Retrieve tuple from bucket
HashTable.prototype.retrieve = function( k ){
  var i = getIndexBelowMaxForKey( k, this._limit );
  var bucket = this._storage.get( i );
  var value = null;
  bucket.forEach( function( tuple ) {
    if( k === tuple[0] ) {
      value = tuple[1];
    }
  } );

  return value;
};
//Time complexity O( 1 )

//Remove tuple from bucket
HashTable.prototype.remove = function( k ){
  this._numItems--;
  var i = getIndexBelowMaxForKey( k, this._limit );
  var bucket = this._storage.get( i );

  //Filter out k from the specified bucket
  bucket = bucket.filter( function( tuple ) {
    return tuple[0] !== k;
  } );
  this._storage.set( i, bucket );

  if( this._numItems <= this._limit * 1 / 4 && this._limit > 8 ){
    this._resize( this._limit / 2 );
  }
};
//Time complexity O( 1 )

//Resize internal storage
HashTable.prototype._resize = function( size ){
  var bucketStorage = this._storage;
  this._numItems = 0;
  this._storage = LimitedArray( size );
  this._limit = size;

  //Using .bind() to maintain proper context of `this`
  bucketStorage.each( function( bucket ) {
    if( bucket ){
      bucket.forEach( function( tuple ){
        this.insert( tuple[0], tuple[1] );
      }.bind( this ) );
    }
  }.bind( this ) );
};
//Time complexity O( n )

/*
 * Complexity: What is the time complexity of the above functions?
 */
