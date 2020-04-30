
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

let kill = 0; 

//Initialisation du vaisseau
let vaisseau = new Image();
vaisseau.src = "images/vaisseau.png";

let VY = 480;
let VX = 450;

vaisseau.addEventListener('load', function(){
    context.drawImage(vaisseau,VX,VY,100,100);
}, false);




//Initialisation de la cible
let cible = new Image();
cible.src = "images/UFO.png"

let CX = parseInt(Math.random()*800);
let CY = 20;

/*cible.addEventListener('load', function(){
    context.drawImage(cible,CX,CY,90,90);
}, false);*/

function setNewEnemy (){
    
    context.drawImage(cible,CX,CY,90,90);
};


//Initialisation du laser

let laser = new Image();
laser.src = "images/light.png"





window.addEventListener('load',function() {
    setNewEnemy();
});






//Mouvement du vaisseau avec clavier 
window.addEventListener("keydown", function move(e){
    

    if(e.keyCode ==37){
        VX -=15;
        context.clearRect(0, VY, canvas.width, 100);
        context.drawImage(vaisseau,VX,VY,100,100);
    }

    if(e.keyCode == 39){
        VX += 15;
        context.clearRect(0, VY, canvas.width, 100);
        context.drawImage(vaisseau,VX,VY,100,100);
    }

    if(e.keyCode == 32){
        e.preventDefault();
        let LX = VX + 28  ;
        let LY = VY - 110 ;
         

        let bulletShot = setInterval(()=>{ 
            if(LY > -62){
                context.clearRect(LX, LY, 110, 110 );
                context.drawImage(laser, LX,LY,50,50 );
                LY = LY-10;
                
            }else{
            clearInterval(bulletShot);
        }

        if(LX > CX-90 && LX <CX+90 && LY<CY+25){

          context.clearRect(CX,CY,90,90);
          CX = parseInt(Math.random()*630);
          setNewEnemy();
          
          kill += 1;
          document.getElementById('kill').innerHTML = kill;
             
        }

        if(kill == 3){
            
        }

    },20);
}

   

})





























/*let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

let xPos = 0;
let yPos = 0;

context.rect(xPos, yPos, 50, 50);
context.stroke();

function move(e){
    if (e.keyCode == 39){
        xPos+=5
    }

    canvas.width = canvas.width;
    context.rect(xPos, yPos, 50, 50);
    context.stroke();
}

document.onkeydown = move;*/











    
    