let buttonsPrompt = document.querySelectorAll(".buttons");
let textBox = document.querySelector(".display .text")


buttonsPrompt.forEach(function(button){
    button.addEventListener("click", enterInput)
});


function enterInput(event)
{
    if(event.target.innerText === "=")
        {
            result(textBox.innerText)
            return;
        }
    if(event.target.innerText === "clear")
        {
            textBox.innerText = ''
            return;
        }
    console.log(event.target.innerText);
    textBox.innerText += event.target.innerText;
    textBox.style.color = "rgb(128, 255, 0)";
}

function result(text)
{
    console.log("function start", text)
    let arr = text.split("[+-/*]")
    console.log(arr)
}