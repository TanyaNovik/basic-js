const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    let season = '';
    if (date instanceof Date && date.toDateString()) {
        if (date.getMonth() === 0 || date.getMonth() === 1 || date.getMonth() === 11) {
            season = 'winter';
        } else if (date.getMonth() === 3 || date.getMonth() === 4 || date.getMonth() === 2) {
            season = 'spring';
        } else if (date.getMonth() === 6 || date.getMonth() === 7 || date.getMonth() === 5) {
            season = 'summer';
        } else {
            season = 'autumn';
        }
    } else if (date === undefined) {
        season = 'Unable to determine the time of year!';
    } else {
        throw new Error('THROWN');
    }
    return season;
};
