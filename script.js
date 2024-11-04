let buttonsPrompt = document.querySelectorAll(".buttons");
let textBox = document.querySelector(".display .text")


buttonsPrompt.forEach(function(button){
    button.addEventListener("click", enterInput)
});


function enterInput(event)/* each time the user click a button display the number*/
{
    if(event.target.innerText === "=")
        {
            textBox.innerText = result(textBox.innerText)
            return;
        }
    if(event.target.innerText === "clear")
        {
            textBox.innerText = ''
            return;
        }
    textBox.innerText += event.target.innerText;
    textBox.style.color = "rgb(128, 255, 0)";
}

function result(text)/*When the user press = */
{
    let operatorReg = /[+-/x]/g
    let operators = text.match(operatorReg)
    let result;
    if(operators.length >=2)
    {
        return "Error"
    }
    let arr = text.split(operators)
    
    if(operators == '+')
    {
        return result = arr.reduce((total, current)=>parseInt(total, 10) + parseInt(current, 10))
    }    
    if(operators == "-")
    {
        return result = arr.reduce((total, current)=>parseInt(total, 10) - parseInt(current, 10))
    }
    if(operators == "x")
    {
        return result = arr.reduce((total, current)=>parseInt(total, 10) * parseInt(current, 10))   
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