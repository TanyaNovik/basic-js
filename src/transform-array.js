const CustomError = require("../extensions/custom-error");

module.exports = function transform(startArr) {
  if(! startArr instanceof Array){
    throw new Error('start array is not array!')
  }
  let endArr = [];
 for(let i = 0;i < startArr.length; i++) {
   if(startArr[i] === '--discard-next'){
      i++;
   } else if(startArr[i] === '--discard-prev'){
     if(startArr[i-2] === '--discard-next') {
       continue;
     }else {
         endArr.splice(endArr.length-1, 1);
     }
   } else if(startArr[i] === '--double-next'){
       if(startArr[i+1] !== undefined) {
           endArr.push(startArr[i+1]);
       }
   }else if(startArr[i] === '--double-prev'){
       if(startArr[i-2] === '--discard-next') {
           continue;
       }
     if(endArr[endArr.length-1] !== undefined) {
         endArr.push(endArr[endArr.length-1]);
     }
   } else{
     endArr.push(startArr[i]);
   }
 }
 return endArr;
};
