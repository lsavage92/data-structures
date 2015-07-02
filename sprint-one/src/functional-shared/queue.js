var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var newQueue = {};
  newQueue.storage = {};
  newQueue.nextUp = 0;
  newQueue.index = 0;
  _.extend(newQueue, queueMethods);

  return newQueue;
};

var queueMethods = {
    enqueue : function(value){
        var storage = this.storage;
        storage[this.index] = value;
        this.index++;
    },
    dequeue : function(){

    },
    size : function(){
        return this.index - this.nextUp;
    }
};



