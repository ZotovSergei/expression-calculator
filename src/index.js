// function eval() {
//     // Do not use eval!!!
//     return;
// }

// function expressionCalculator(expr) {
 
// }

// module.exports = {
//     expressionCalculator
// }


const expr = ' 35 - 45 / 37 + 84 + (  41 + 86 / 18 / 41 * 73  ) ';
const stSign = [];
const stNum = [];

function expressionCalculator(expr) {
    function addNumber(stNum,number) {

    }
    function addSign(params) {
        
    }



    for (let index = 0; index < expr.length; index++) {
        let number = parseFloat(expr.replace(/\D+/,''));
        expr = expr.replace(number,'');
        // let sign = expr.replace(/[-\+]/g,'');
        let sign = expr.match(/[-\+\/\(\)\*]/).join();
        expr = expr.replace(sign,'');
        if (number) stNum.push(number);        
        console.log(number);
        console.log(sign);
        console.log(expr);
        if (!sign) break;
        if (!number) break;
    }
    console.log(stNum);
}

console.log(expressionCalculator(expr));