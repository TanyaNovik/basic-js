const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let result = {};
    if (typeof disksNumber === 'number' && typeof turnsSpeed === 'number') {
        result.turns = 2 ** disksNumber - 1;
        result.seconds = Math.trunc(result.turns * 3600 / turnsSpeed);
    }
    return result;
};
