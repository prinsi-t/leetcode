/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

        // Find the shortest string
    let shortest = strs[0];

    for ( let i = 1; i < strs.length; i++){
        if( strs[i].length < shortest.length){
            shortest = strs[i]
        }
    }
    
    for (let i = 0; i < shortest.length; i++){
        for (let j = 0; j < strs.length; j++){
            if (shortest[i] !== strs[j][i]){
                return shortest.slice(0, i);
            }
        }
    }
     return shortest;
};