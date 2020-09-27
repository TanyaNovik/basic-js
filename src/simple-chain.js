const CustomError = require("../extensions/custom-error");

const chainMaker = {
    result: [],
    getLength() {
        return this.result.length;
    },
    addLink(value = '') {
        this.result.push(`( ${value} )`);
        return this;
    },
    removeLink(position) {
        if (typeof position === 'number' && Number.isInteger(position) && this.result.length >= position) {
            this.result.splice(position - 1, 1);
            return this;
        } else {
            this.result.length = 0;
            throw new Error('Bad position!')
        }
    },
    reverseChain() {
        this.result.reverse();
        return this;
    },
    finishChain() {
        let resultChain = this.result.join('~~');
        this.result.length = 0;
        return resultChain;
    }
};

module.exports = chainMaker;
