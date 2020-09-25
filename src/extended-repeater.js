const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    options.separator = options.separator ? options.separator : '+';
    options.additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
    if (typeof options.addition === 'undefined') {
        options.addition = ''
    } else if (options.addition === null) {
        options.addition = 'null';
    } else {
        options.addition =  options.addition.toString();
    }
    let additionSection = options.addition.toString() !== '' ? (options.additionSeparator + options.addition) : '';
    let newLine = str + (options.addition + additionSection.repeat(options.additionRepeatTimes - 1) + options.separator + str).repeat(options.repeatTimes - 1) + options.addition + additionSection.repeat(options.additionRepeatTimes - 1);
    return newLine;
};
  