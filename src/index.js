function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let openCount = null;
    let closeCount = null;
    if (expr.includes('(')) {
        let open = expr.match(/\(/g);
        openCount = open.length;
    }
    if (expr.includes(')')) {
        let close = expr.match(/\)/g);
        closeCount = close.length;
    }
    if (openCount != closeCount) throw new Error('ExpressionError: Brackets must be paired');


    const stSign = [];
    const stNum = [];
    let isOpenBracket = false;
    const prioritySign = {
        '-': 1,
        '+': 1,
        '/': 2,
        '*': 2,
    }
    function multi(one, two) {
        return one * two;
    }
    function diff(one, two) {
        return one - two;
    }
    function addition(one, two) {
        return one + two;
    }
    function division(one, two) {
        return one / two;
    }
    function getLastFromStack(arr) {
        return arr.pop();
    }
    function addInArray(arr, element) {
        if (element) arr.push(element);
    }
    function innerBracketExpr(stNum, stSign) {
        for (let index = stSign.length - 1; index >= 0; index--) {
            if (stSign[index] == '(') {
                stSign.pop();
                break;
            }
            else {
                let element = stSign[index];
                let stLastNumber = stNum[stNum.length - 1];
                let stPreLastNumber = stNum[stNum.length - 2];
                // debugger
                switch (element) {
                    case '/':
                        if (stLastNumber == 0) throw new Error ("TypeError: Division by zero.");
                        var rest = stPreLastNumber / stLastNumber;
                        stNum.pop();
                        stNum.pop();
                        stSign.pop();
                        stNum.push(rest);
                        flag = false;
                        // debugger                        
                        break;
                    case '*':
                        var rest = stPreLastNumber * stLastNumber;
                        stNum.pop();
                        stNum.pop();
                        stSign.pop();
                        stNum.push(rest);
                        flag = false;
                        // debugger                        
                        break;
                    case '+':
                        var rest = Number(stPreLastNumber) + Number(stLastNumber);
                        stNum.pop();
                        stNum.pop();
                        stSign.pop();
                        stNum.push(rest);
                        flag = false;
                        // debugger                        
                        break;
                    case '-':
                        var rest = stPreLastNumber - stLastNumber;
                        stNum.pop();
                        stNum.pop();
                        stSign.pop();
                        stNum.push(rest);
                        flag = false;
                        // debugger                        
                        break;
                    case '(':
                        // debugger
                        break;
                    default:
                        break;
                }
            }
        }

    }
    function yo(stSign, stNum, element) {
        if (stSign.length == 0) stSign.push(element);
        else {
            if (element == '(') {
                stSign.push(element);
                // debugger
                return
            }
            if (element == ')') {
                // debugger
                innerBracketExpr(stNum, stSign);
            }
            else {
                let lastElInStack = stSign[stSign.length - 1];
                let stPriority = prioritySign[lastElInStack];
                let curPriority = prioritySign[element];
                if (lastElInStack == '(') {
                    stSign.push(element);
                    // debugger
                } else {
                    if (curPriority < stPriority || curPriority == stPriority) {
                        let stLastNumber = stNum[stNum.length - 1];
                        let stPreLastNumber = stNum[stNum.length - 2];
                        // debugger
                        switch (lastElInStack) {
                            case '/':
                                if (stLastNumber == 0) throw new Error ("TypeError: Division by zero.");
                                var rest = stPreLastNumber / stLastNumber;
                                stNum.pop();
                                stNum.pop();
                                stSign.pop();
                                stNum.push(rest);
                                flag = false;
                                // debugger
                                yo(stSign, stNum, element)
                                break;
                            case '*':
                                var rest = stPreLastNumber * stLastNumber;
                                stNum.pop();
                                stNum.pop();
                                stSign.pop();
                                stNum.push(rest);
                                flag = false;
                                // debugger
                                yo(stSign, stNum, element)
                                break;
                            case '+':
                                var rest = Number(stPreLastNumber) + Number(stLastNumber);
                                stNum.pop();
                                stNum.pop();
                                stSign.pop();
                                stNum.push(rest);
                                flag = false;
                                // debugger
                                yo(stSign, stNum, element)
                                break;
                            case '-':
                                var rest = stPreLastNumber - stLastNumber;
                                stNum.pop();
                                stNum.pop();
                                stSign.pop();
                                stNum.push(rest);
                                flag = false;
                                // debugger
                                yo(stSign, stNum, element)
                                break;
                            case '(':
                                // debugger
                                break;
                            default:
                                break;
                        }
                    } else if (curPriority > stPriority) {
                        stSign.push(element);
                    }
                }
            }
        }
    }

    let result = expr.match(/(\d+)|[\-\/\+\(\)\*]/g);
    for (let index = 0; index < result.length; index++) {
        const element = result[index];
        if (parseInt(element) || element == 0) {
            stNum.push(element);
        }
        else {
            yo(stSign, stNum, element);
        }
    }
    debugger
    for (let index = stSign.length - 1; index >= 0; index--) {
        const element = stSign[index];
        let stLastNumber = stNum[stNum.length - 1];
        let stPreLastNumber = stNum[stNum.length - 2];
        switch (element) {
            case '/':
                if (stLastNumber == 0) throw new Error ("TypeError: Division by zero.");
                var rest = stPreLastNumber / stLastNumber;
                stNum.pop();
                stNum.pop();
                stSign.pop();
                stNum.push(rest);
                flag = false;
                // debugger                        
                break;
            case '*':
                var rest = stPreLastNumber * stLastNumber;
                stNum.pop();
                stNum.pop();
                stSign.pop();
                stNum.push(rest);
                flag = false;
                // debugger                        
                break;
            case '+':
                var rest = Number(stPreLastNumber) + Number(stLastNumber);
                stNum.pop();
                stNum.pop();
                stSign.pop();
                stNum.push(rest);
                flag = false;
                // debugger                        
                break;
            case '-':
                var rest = stPreLastNumber - stLastNumber;
                stNum.pop();
                stNum.pop();
                stSign.pop();
                stNum.push(rest);
                flag = false;
                // debugger                        
                break;
            case '(':
                // debugger
                break;
            default:
                break;
        }
    }
    return stNum[0];
    // console.log(stNum[0]);
}

module.exports = {
    expressionCalculator
}