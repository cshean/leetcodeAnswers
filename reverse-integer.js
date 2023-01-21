/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x === null || x === "") {
        return 0;
    }
    let number = x.toString();
    let minusSign = "";
    if (number.charAt(0) === "-") {
      minusSign = "-";
      number = number.substring(1, number.length);
    }
    let numberStack = [];
    let reversedNumber = "";
    for (let i = 0; i < number.length; i++) {
        numberStack.push(number.charAt(i));
    }
    for (let i = 0; i < number.length; i++) {
         reversedNumber += numberStack.pop();
    }
    let answer = Number(minusSign + reversedNumber);
    if (answer > 2147483647 || answer < -2147483648) {
        return 0;
    }
    return answer;
}
