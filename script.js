let buttonsPrompt = document.querySelectorAll(".buttons");
let textBox = document.querySelector(".display .text")
buttonsPrompt.forEach(function(button){
    button.addEventListener("click", enterInput)
});

let bodySelector = document.querySelector("body")
bodySelector.addEventListener("keydown", enterInputKeyboard)/*add the keyboard event listener to the whole body*/

let isTotal = 0;/*The value that keeps track if the number displayed is the total to refresh on next input*/
let keyPressed;
function enterInput(event)/* each time the user click a button display the number*/
{
    if(event.target.innerText === "=")
        {
            textBox.innerText = result(textBox.innerText);
            return isTotal = 1;/*means the next input should refresh the display*/
        }
    if(event.target.innerText === "clear")
        {
            textBox.innerText = '';
            return;
        }
    if(isTotal == 1)
    {
        textBox.innerText = '';
        isTotal = 0;/*after refresh re-initialise the value so it doesnt refresh on next input*/
    }
    if(event.target.innerText === "<-")
    {
        textBox.innerText = textBox.innerText.slice(0, textBox.innerText.length-1)/*Slice the number from first digit to before last*/
        return;
    }
    textBox.innerText += event.target.innerText;
    textBox.style.color = "rgb(128, 255, 0)";
    return isTotal;
}

function result(text)/*When the user press = */
{

    let operatorReg = /[+\-\/x]/g
    let operators = text.match(operatorReg)
    let result;    
    if(text == null || text == "." || operators == null) /*check if user enters only "." without number or nothing*/
        {
            return "Error"
        }
    if(operators.length >=2)
    {
        return "Error"
    }
    let arr = text.split(operators)
    
    if(operators == '+')
    {
        return result = arr.reduce((total, current)=>parseFloat(total, 10) + parseFloat(current, 10))
    }    
    if(operators == "-")
    {
        return result = arr.reduce((total, current)=>parseFloat(total, 10) - parseFloat(current, 10))
    }
    if(operators == "x")
    {
        return result = arr.reduce((total, current)=>parseFloat(total, 10) * parseFloat(current, 10))   
    }
    if(operators == "/")
    {        
        if(arr[1] == "0")
            {
                return 0;
            }  
        result = parseInt(arr[0]) / parseInt(arr[1])
        if (parseInt(arr[0]) % parseInt(arr[1]) != 0)
        {
            return result.toFixed(2)
        }
        return result
    }  
}

function enterInputKeyboard(event)
{
    keyPressed = event.key
    let allowedInputReg = /^(Enter|Backspace|Escape|[+\-\/x0-9*])$/
    let allowed = allowedInputReg.test(keyPressed)
    if(allowed)
    {
        if(keyPressed === "Enter")
        {
            textBox.innerText = result(textBox.innerText);
            return isTotal = 1;/*means the next input should refresh the display*/
        }
        if(keyPressed === "Escape")
            {
                textBox.innerText = '';
                return;
            }
        if(isTotal == 1)
        {
            textBox.innerText = '';
            isTotal = 0;/*after refresh re-initialise the value so it doesnt refresh on next input*/
        }
        if(keyPressed === "Backspace")
        {
            console.log(textBox.innerText)
            textBox.innerText = textBox.innerText.slice(0, textBox.innerText.length-1)/*Slice the number from first digit to before last*/
            console.log(textBox.innerText,textBox.innerText[0]-1, textBox.innerText.length-1 )
            return;
        }
        textBox.innerText += keyPressed;
        textBox.style.color = "rgb(128, 255, 0)";
        return isTotal = 0;
    }
}