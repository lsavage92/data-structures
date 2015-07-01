var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {}; //{0: 'first', 1: 'second', last: '1'}
  var last = -1;
  // Implement the methods below
  someInstance.push = function(value){
    //add value to top 
    last++;
    storage[last] = value;
  };

  someInstance.pop = function(){
    //remove top of stack
    //return top of stack
  };

  someInstance.size = function(){
    //return size of stack
    return last + 1;
  };

  return someInstance;
};

