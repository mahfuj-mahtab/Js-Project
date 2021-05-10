var buttonNumber = document.querySelectorAll("button").length;
var screen = document.querySelector("input");
screenValue='';
console.log(buttonNumber)

for(var i = 0; i<buttonNumber; i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function(){
    var buttonText = this.innerHTML;
    console.log(buttonText);
    
    if(buttonText == "C"){
        screen.value = "0";
        screenValue = '';
    }
    else if(buttonText == "="){
        screen.value = eval(screenValue);
        screenValue = screen.value;
    }
    else{
        screenValue += buttonText;
        screen.value = screenValue;
    }
    

   

    
})
}


    document.addEventListener("keydown",function(e){
    var keyText = e.key;
    
    if(keyText == "C"){
        screen.value = "0";
        screenValue = '';
    }
    else if(keyText == "="){
        screen.value = eval(screenValue);
        screenValue = screen.value;
    }
    else{
        screenValue += keyText;
        screen.value = screenValue;
    }
    

   

    
})

