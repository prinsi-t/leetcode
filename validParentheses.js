/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

   let stack = [];

   for ( let i = 0; i < s.length; i++){
     let current = s[i];

      if( current === '(' || current === '{' || current === '['){
        stack.push(current)
      }
      else {

        let last = stack.pop();

        if ( 
            current === ')' && last !== '(' ||
            current === '}' && last !== '{' ||
            current === ']' && last !== '[' 
            ) {
            return false
        }
      }
   }
       return stack.length === 0;

};