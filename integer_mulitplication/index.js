// integer multiplication

function integer_mult(stringNum1, stringNum2) {
  let rows = [];


  for (let i = 0; i < stringNum2.length; i++) {
    for (let j = 0; j < stringNum1.length; j++) {

      let nextNum = rightPad(stringNum1[i] * stringNum2[j], i + j);
      rows.push(nextNum);

    }
  }

  const add = (currSum, nextNum) => currSum + Number(nextNum);
  let result = numArray.reduce(add, 0);


  // HELPER FUNCTIONS BELOW
  function rightPad(stringNum, zeros) {
    for (let i = 0; i < zeros; i++) {
      stringNum += '0';
    }
    return stringNum;
  }

}