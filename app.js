var add = function (num1, num2, showResult, phrase) {
    var result = num1 + num2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
};
var n1 = 5;
var n2 = 2.5;
var printResult = true;
var resultPhrase = "Result is:  ";
add(n1, n2, printResult, resultPhrase);
