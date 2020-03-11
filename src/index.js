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
            //    1    2    1    1  0    1    2    2    2     0  
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
    function multi(one,two) {
        return one*two;
    }
    function diff(one,two) {
        return one-two;
    }
    function addition(one,two) {
        return one+two;
    }
    function division(one,two) {
        return one/two;
    }    

    function getLastFromStack(arr) {
        return arr.pop();
    }
    function action(stNum, stSign) {
        let number = 0;
        let lastNumberStack = getLastFromStack(stNum);
        let preLastNumberStack = getLastFromStack(stNum);
        let act = getLastFromStack(stSign);
        debugger
        switch (act) {
            case '/':
                number = division(preLastNumberStack,lastNumberStack);                
                break;
            case '*':
                number = multi(preLastNumberStack,lastNumberStack);
                break;
            case '+':
                number = addition(preLastNumberStack,lastNumberStack);
                break;
            case '-':
                number = diff(preLastNumberStack,lastNumberStack);
                break;
            default:
                break;
        }                
        return number;
    }

    function addNumber(stNum, number) {

    }

    function addSign(stSign, sign, stNum) {
        if (stSign.length > 0) {
            let stSignPriority = prioritySign[stSign[stSign.length - 1]];
            let signPriority = prioritySign[sign];

            if (stSignPriority < signPriority) {
                stSign.push(sign);                         
            } else if (stSignPriority > signPriority || stSignPriority == signPriority) {
                // console.log(stNum);
                // console.log(stSign);
                stNum.push(action(stNum, stSign));
                console.log(stNum);
                console.log(stSign);
                // stSign.push(sign);
                debugger
                addSign(stSign,sign,stNum);
            }
            
            // console.log(stSign.pop());
            // console.log(stSign)
            // debugger
            // console.log('----------------')
        } else {
            stSign.push(sign);
            console.log('----------------')
            console.log(stSign)
            console.log('----------------')
        }
    }



    for (let index = 0; index < expr.length; index++) {
        let number = parseFloat(expr.replace(/\D+/, ''));
        expr = expr.replace(number, '');
        // let sign = expr.replace(/[-\+]/g,'');
        let sign = expr.match(/[-\+\/\(\)\*]/).join();
        expr = expr.replace(sign, '');
        if (number) stNum.push(number);
        if (sign) addSign(stSign, sign, stNum)
        // console.log(stNum);
        // console.log(stSign);
        // debugger
        // console.log(number);
        // console.log(sign);
        // console.log(expr);
        if (!sign) break;
        if (!number) break;
    }
    // console.log(stSign)
}

console.log(expressionCalculator(expr));