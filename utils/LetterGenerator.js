// let S = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

export const LetterGenerator = (number, letters) => {
  return Array.from(Array(number)).map(()=>letters[Math.floor(Math.random()*letters.length)]).join('')
}

export const CorrectTask = (currentNum, task, thresh, correctStart, jaCorrection, enCorrection, flag) => {
  let S = flag ? enCorrection : jaCorrection;
  let m = parseInt(correctStart / S.length);
  let correctLetter = S.substr(correctStart - S.length*m, 1);
  let before, after;
  let orderSum = S.length;
  if(correctStart !== 0){
    before = task.slice(0, correctStart);
    after = task.slice(correctStart + correctLetter.length);
    return before + correctLetter + after;
  } else {
    before = '';
    after = task.slice(correctStart+1, task.length);
    return S.substr(0,1) + task.slice(1)
  }
}