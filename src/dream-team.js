const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
    let result = '';
    if (arr) {
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'string') {
                result = result + (arr[i].trim())[0];
            }
        }
    }
    result = result.toUpperCase();
    result = result.split('');
    result = result.sort();
    result = result.join('');
    return result;
};
