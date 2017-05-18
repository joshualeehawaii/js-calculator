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

  load: function(x){
    total = x;
    if(typeof x === 'number'){
      return total;
    } else {
      return 'error';
    }
  },

  /**
   * Return the value of `total`
   * @return { Number }
   */
  getTotal: function(){
    return total;
  },

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */

  add: function(x){
    if(typeof x === 'number'){
      return total += x;
    } else {
      return 'error';
    }
  },

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */

   subtract: function(x){
    if(typeof x === 'number'){
      return total -= x;
    } else {
      return 'error';
    }
   },


  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */


  /**
   * Return the value stored at `memory`
   * @return { Number }
   */


  /**
   * Stores the value of `total` to `memory`
   */


  /**
   * Clear the value stored at `memory`
   */

  /**
   * Validation
   */

  };
 return calculator;
 }

