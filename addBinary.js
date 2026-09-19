/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let i = a.length - 1, j = b.length - 1, carry = 0, result = '';

    while (i >= 0 || j >= 0 || carry) {
        let sum = Number(a[i--] || 0) + Number(b[j--] || 0) + carry;
        result = sum % 2 + result;
        carry = Math.floor(sum / 2);
    }

    return result;
};