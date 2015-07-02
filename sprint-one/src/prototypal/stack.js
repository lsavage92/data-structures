var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods); //var newStack = stackMethods;
  newStack.storage = {};
  newStack.index = 0;

  return newStack;
};

var stackMethods = {
  push: function(value){
    this.storage[this.index] = value;
    this.index++;
  },

  pop: function(){

  },

  size: function(){
    return this.index;
  }
};


