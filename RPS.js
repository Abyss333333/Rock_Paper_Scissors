function computerplay(){
    var myArray =["rock", "paper", "scissors"];
    return myArray[(Math.floor(Math.random()*myArray.length))];
}

function round (player_selection, computer_selection){
    let x = player_selection.toLowerCase();
    let y = computer_selection.toLowerCase();

    if (x===y ){
        return ("tie");
    }

    else if( (x === "rock" && y==="scissors") || (x === "scissors" && y==="paper") || (x === "paper" && y==="rock") ){
        return (x + " beats "+ y +". Player wins");
    }

    else if( (y === "rock" && x==="scissors") || (y === "scissors" && x==="paper") || (y === "paper" && x==="rock") ){
        return (y +" beats " + x + ". Computer Wins");
    }

}

let buttons = document.querySelectorAll("button");
let x= 0;
let y= 0;


buttons.forEach((button) => {
    button.addEventListener('click', () =>{
    
        
        let input = button.id;
        

        let input2 = computerplay();

        selections(input, input2);

        
        let output = round (input, input2);
        if (output.search("Player wins")!== -1){
            x+=1;
            let yy = (output + ". Score is Player " + x + " and Computer " + y)
            para (yy);
            
            console.log(output + ". Score is Player " + x + " and Computer " + y);
        }
        else if (output.search("Computer Wins")!== -1){
            y+=1;
            let zz = (output + ". Score is Player " + x + " and Computer " + y)
            para(zz);
            
            console.log(output + ". Score is Player " + x + " and Computer " + y);
        }
        else{
            para(output);
            
            console.log(output);
        }

        update_score(x,y);
        
       

        //para ("game over");
        //console.log ("Game Over");
    });


    
});

function para( str){
    const para = document.querySelector(".para");
    para.textContent= str;

}

function update_score (x,y){

    const score = document.querySelector(".score");
    score.textContent = ("Player: " + x + " Computer: " +y);
    
}

function selections (x,y) {

    const player = document.querySelector(".player");
    const comp = document.querySelector(".comp");
    

    player.textContent = "Player Selects " +x;
    
    comp.textContent = "Computer Selects " + y;


}
