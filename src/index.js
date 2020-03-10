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
// const stSign = [];
// const stNum = [];

function expressionCalculator(expr) {
    const stSign = [];
    const stNum = [];
    const prioritySign = {
        '-': 1,
        '+': 1,
        '/': 2,
        '*': 2,
    }

    function addNumber(stNum, number) {

    }

    function addSign(stSign, sign) {
        if (stSign.length > 0) {
            let stSignPriority = prioritySign[stSign[stSign.length - 1]];
            let signPriority = prioritySign[sign];
            // console.log('----------------')
            // console.log(stSignPriority)
            // console.log(signPriority);
            if (signPriority > stSignPriority) {
                stSign.push(sign);
            } else if (stSignPriority < signPriority) {
                //todo: Добавить условие для действия чисел
            }
            // console.log(stSign.pop());
            // console.log(stSign)
            // debugger
            console.log('----------------')

        } else {
            stSign.push(sign);
        }
    }



    for (let index = 0; index < expr.length; index++) {
        let number = parseFloat(expr.replace(/\D+/, ''));
        expr = expr.replace(number, '');
        // let sign = expr.replace(/[-\+]/g,'');
        let sign = expr.match(/[-\+\/\(\)\*]/).join();
        expr = expr.replace(sign, '');
        if (number) stNum.push(number);
        if (sign) addSign(stSign, sign)
            // console.log(number);
            // console.log(sign);
            // console.log(expr);
        if (!sign) break;
        if (!number) break;
    }
    console.log(stSign)
}

console.log(expressionCalculator(expr));