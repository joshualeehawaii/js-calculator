/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

function calculatorModule(x){
  var memory = 0;
  var total = 0;
  var calculator = {

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */

  load: function load(x){
    total = x;
    if(typeof x === 'number'){
      return total;
    } else {
      throw new Error('you suck');
    }
  },

  /**
   * Return the value of `total`
   * @return { Number }
   */
  getTotal: function getTotal(){
    return total;
  },

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */

  add: function add(x){
    if(typeof x === 'number'){
      return total += x;
    } else {
      throw new Error('you suck');
    }
  },

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */

   subtract: function subtract(x){
    if(typeof x === 'number'){
      return total -= x;
    } else {
      throw new Error('you suck');
    }
   },

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */

  multiply: function multiply(x){
    if(typeof x === 'number'){
      return total *= x;
    } else {
      throw new Error('you suck');
    }
  },

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
  divide: function divide(x){
    if(typeof x === 'number'){
      return total /= x;
    } else {
      throw new Error('you suck');
    }
  },

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */

  recallMemory: function recallMemory(){
    return memory;
  },

  /**
   * Stores the value of `total` to `memory`
   */

  saveMemory: function saveMemory(){
    memory = total;
  },

  /**
   * Clear the value stored at `memory`
   */

  clearMemory: function clearMemory(){
    memory = 0;
  }

  /**
   * Validation
   */

  };
 return {
    load: load,
    getTotal: getTotal,
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    recallMemory: recallMemory,
    saveMemory: saveMemory,
    clearMemory: clearMemory
  };
 }

 calculatorModule();

