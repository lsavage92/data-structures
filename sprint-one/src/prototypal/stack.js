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
    if( this.index > 0){
      this.index--;
      var tmp = this.storage[this.index];
      delete this.storage[this.index];
      return tmp;
    }
  },

  size: function(){
    return this.index;
  }
};


