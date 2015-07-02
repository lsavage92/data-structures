var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var nextUp = 0;
  var index = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[index] = value;
    index++;
  };

  someInstance.dequeue = function(){
    if(index - nextUp > 0) {
      var tmp = storage[nextUp];
      delete storage[nextUp];
      nextUp++;
      return tmp;
    }
  };

  someInstance.size = function(){
    return index - nextUp;
  };

  return someInstance;
};
