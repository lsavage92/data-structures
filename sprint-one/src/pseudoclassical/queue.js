var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.nextUp = 0;
  this.index = 0;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.index] = value;
  this.index++;
};

Queue.prototype.size = function(){
  return this.index - this.nextUp;
};

Queue.prototype.dequeue = function(){
  if( this.size()  > 0 ){
    var tmp = this.storage[this.nextUp];
    delete this.storage[this.nextUp];
    this.nextUp++;
    return tmp;
  }
};