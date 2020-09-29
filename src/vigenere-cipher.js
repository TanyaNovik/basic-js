const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(direction) {
        this.direction = direction;
    }

    encrypt(message, key) {
        if (!message || !key) {
            throw new Error('message or key is not defined')
        }
        message = message.toUpperCase();
        key = key.toLowerCase();
        let result = '';
        for (let i = 0, j = 0; i < message.length; i++, j++) {
            j = j === key.length ? j = 0 : j;
            if (message[i].charCodeAt() >= 'A'.charCodeAt() && message[i].charCodeAt() <= 'Z'.charCodeAt()) {
                let shift = key[j].charCodeAt() - 'a'.charCodeAt();
                if ((message[i].charCodeAt() + shift) > 'Z'.charCodeAt()) {
                    shift = 'A'.charCodeAt() + (message[i].charCodeAt() + shift - 'Z'.charCodeAt()) - 1;
                } else {
                    shift = message[i].charCodeAt() + shift
                }
                result = (this.direction === false) ? String.fromCharCode(shift) + result : result + String.fromCharCode(shift);

            } else {
                result = (this.direction === false) ? message[i] + result : result + message[i];
                j--;
            }
        }
        return result;
    }

    decrypt(message, key) {
        if (!message || !key) {
            throw new Error('message or key is not defined')
        }
        message = message.toUpperCase();
        key = key.toLowerCase();
        let result = '';
        for (let i = 0, j = 0; i < message.length; i++, j++) {
            j = j === key.length ? j = 0 : j;
            if (message[i].charCodeAt() >= 'A'.charCodeAt() && message[i].charCodeAt() <= 'Z'.charCodeAt()) {
                let shift = key[j].charCodeAt() - 'a'.charCodeAt();
                if ((message[i].charCodeAt() - shift) < 'A'.charCodeAt()) {
                    shift = 'Z'.charCodeAt() + (message[i].charCodeAt() - shift - 'A'.charCodeAt()) + 1;
                } else {
                    shift = message[i].charCodeAt() - shift;
                }
                result = (this.direction === false) ? String.fromCharCode(shift) + result : result + String.fromCharCode(shift);
            } else {
                result = (this.direction === false) ? message[i] + result : result + message[i];
                j--;
            }
        }
        return result;
    }
}

module.exports = VigenereCipheringMachine;
