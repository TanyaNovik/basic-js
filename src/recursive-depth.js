const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(array) {
        let max = 1;
        let result = 1;
        array.forEach(element => {
            if (Array.isArray(element)) {
                result = 1 + this.calculateDepth(element);
            }
            if (result > max) {
                max = result;

            }
            return max;
        });
        return max;
    }
};