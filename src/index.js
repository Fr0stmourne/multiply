module.exports = function multiply(first, second) {

  function sumStrings(a, b) {
    let aArray = a.split('');
    let bArray = b.split('');
    aArray = aArray.slice(aArray.findIndex(el => el !== '0'));
    bArray = bArray.slice(bArray.findIndex(el => el !== '0'));
    const diff = aArray.length - bArray.length;
    for (let i = 0; i < Math.abs(diff); i++) {
      if (diff > 0) bArray.unshift('0');
      if (diff < 0) aArray.unshift('0');
    }

    let result = [];
    let flag = false;
    for (let i = aArray.length - 1; i >= 0; i--) {
      let currentRes = 0;
      if (flag) currentRes++;
      currentRes += +aArray.pop() + +bArray.pop();
      result.unshift((currentRes % 10).toString());
      flag = currentRes >= 10;
    }

    result.unshift(flag ? '1' : '');
    return result.join('');
  }


  let resultArr = [];
  if (first.length < second.length) {
    [first, second] = [second, first];
  }
  second.split('').reverse().forEach((secondNumDigit, index) => {
    let addition = 0;
    let product = '';

    first.split('').reverse().forEach(firstNumDigit => {
      let currentRes = firstNumDigit * secondNumDigit + addition;
      product = `${currentRes % 10}` + product;
      addition = Math.floor(currentRes / 10);
    })

    let filler = '0';
    resultArr.push((addition || '') + product + filler.repeat(index));
  })

  return resultArr.reduce((result, current) => sumStrings(result, current));
}