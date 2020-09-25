const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    if(typeof sampleActivity === 'string' && Number.parseFloat(sampleActivity) && Number.parseFloat(sampleActivity) <15 && Number.parseFloat(sampleActivity) >0 ) {
        let k = 0.693 / HALF_LIFE_PERIOD;
        let time = (MODERN_ACTIVITY/Number.parseFloat(sampleActivity))/k;
        return Math.ceil(time);
    }
    return false;
};
