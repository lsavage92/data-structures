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
        if(this.size() > 0){
            var tmp = this.storage[this.nextUp];
            delete this.storage[this.nextUp];
            this.nextUp++;
            return tmp;
        }
    },
    size : function(){
        return this.index - this.nextUp;
    }
};



