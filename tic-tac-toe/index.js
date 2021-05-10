player = 0;
game_state = []
for(var i=0;i<9;i++){
    var tic_select = document.querySelectorAll(".tic")[i].addEventListener("click", function(){
        
        if(player == 1){
            this.style.background = "none";
            this.innerHTML = "X";
            // player = 1;
        }
        else{
            this.style.background = "none";
            this.innerHTML = "O";
            // player = 0;
        }

        var divText = this.innerText;
        var divId1 = document.getElementById("1").innerHTML;
        var divId2 = document.getElementById("2").innerHTML;
        var divId3 = document.getElementById("3").innerHTML;
        var divId4 = document.getElementById("4").innerHTML;
        var divId5 = document.getElementById("5").innerHTML;
        var divId6 = document.getElementById("6").innerHTML;
        var divId7 = document.getElementById("7").innerHTML;
        var divId8 = document.getElementById("8").innerHTML;
        var divId9 = document.getElementById("9").innerHTML;
        console.log(divId1)
        if(((divId1 == "X") && (divId2 == "X") && (divId3 == "X")) || ((divId4 == "X") && (divId5 == "X") && (divId6 == "X")) || ((divId7 == "X") && (divId8 == "X") && (divId9 == "X")) || ((divId1 == "X") && (divId5 == "X" ) && (divId9 == "X")) || ((divId3 == "X") && (divId5 == "X") && (divId7 == "X")) || (divId1 == "X" && divId4 == "X" && divId7 == "X") || (divId2 == "X" && divId5 == "X" && divId8 == "X") || (divId3 == "X" && divId6 == "X" && divId9 == "X"))
        {

            // console.log("Winner Is " , player);
            document.querySelector("h3").innerHTML = "Winner Is Player " + player;
            document.querySelector(".hh").innerHTML = "Press Any Key To Start Again ";
        }


        else if((divId1 == "O" && divId2 == "O" && divId3 == "O") || (divId4 == "O" && divId5 == "O" && divId6 == "O") || (divId7 == "O" && divId8 == "O" && divId9 == "O") || (divId1 == "O" && divId5 == "O" && divId9 == "O") || (divId3 == "O" && divId5 == "O" && divId7 == "O") || (divId1 == "O" && divId4 == "O" && divId7 == "O") || (divId2 == "O" && divId5 == "O" && divId8 == "O") || (divId3 == "O" && divId6 == "O" && divId9 == "O"))
        {
            // console.log("Winner Is " , player);
            document.querySelector("h3").innerHTML = "Winner Is Player " + player;
            document.querySelector(".hh").innerHTML = "Press Any Key To Start Again ";
        }
        else{
            if(player == 0){
                player = 1;
            }
            else{
                player = 0;
            }
        }

        
        
    })
   
}

document.addEventListener("keydown", (e) =>{
    window.location.reload();
})


