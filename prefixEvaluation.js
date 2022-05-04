function resultExpression(expression, variables) {
    //Enter your code here
    let calcStack = []
    for (let i = expression.length - 1; i >= 0; i--){
        let chosen = expression[i]
        if (!isNaN(expression[i]) && expression[i] != ' '){
            calcStack.push(expression[i])

        }else if (expression[i] == ' '){
            continue
        }else if(!(expression[i].toLowerCase == expression[i].toUpperCase) && (expression[i] != ' ' && expression[i] != '+' && expression[i] != '-' && expression[i] != '*' && expression[i] != '/')){
            if (variables[expression[i]]){
                calcStack.push(variables[expression[i]])
            }
            continue
        }else{
            let old1 = calcStack.pop()
            let old2 = calcStack.pop()
            if(expression[i] == '+'){
                calcStack.push(Number(old1) + Number(old2))

            }
            if(expression[i] == '-'){
                calcStack.push(Number(old1) - Number(old2))

            }
            if(expression[i] == '*'){
                calcStack.push(Number(old1) * Number(old2))

            }
            if(expression[i] == '/'){
                calcStack.push(Number(old1) / Number(old2))

            }
        }
    }

    // let check = ['+', '-', '/', '*', ' ']
    // if (check.includes)

    return calcStack.length > 1 ? null : calcStack.pop()
}


console.log(resultExpression('- * 2 3 5 6', {}))