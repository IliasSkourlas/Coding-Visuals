let canvas = document.querySelector('canvas');

////////
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let c = canvas.getContext('2d');
let c2 = canvas.getContext('2d');
////////

var autoColorVar;
var autoRadiusVar;
var animateRetrigerVar;
let plusOrMinus = Math.random() < 0.5 ? -1 : 1; 
let xMove = 800;
let counterColor = 0;
let counterRadius = 0;
let color = "black";
let speed = 0.1 * plusOrMinus;
let radius = 400;
let getLarger = radius / 2;

let colors = ["pink", "white", "black", "white","black","red", "black", "red" ];
let speeds = [ 1,1,5,5,10,5,5,1,1];
let radiusis = [radius ,radius ,radius ,radius ,radius + getLarger,radius ,radius + getLarger * 2 ,radius + getLarger * 2 ];
 


//
// function setup(){
//     noCursor();
// }
//


AutoColorFunction();
startAutoRadiusFunction(); 
// startAutoRadiusFunction();


//          FUNCTIONS
function stopAutoColorFunction() {
    clearInterval(autoColorVar);
};
function stopAutoRadiusFunction(){
    clearInterval(autoRadiusVar);
};
// At the first .... seconds speed will be fast and then it will slow down
setInterval(function(){
    counterRadius += 1;
    counterRadius = counterRadius % speeds.length;
    speed = speeds[counterRadius];
}, 619*16);
// start
function AutoRadius() {
    radius = radius*2;
};

function AutoColorFunction() {
    
    autoColorVar = setInterval(function(){
        counterColor += 1;
        counterColor = counterColor % colors.length;
        color = colors[counterColor];

    },619*0.5);
};
// start every ... seconds change color and loop
function fromStartAutoColorFunction() {
    colorChange();
    counterColor = 0;
    autoColorVar = setInterval(function(){       
        counterColor += 1;
        counterColor = counterColor % colors.length;
        color = colors[counterColor];
    },619*4);
};


// start every ... seconds change color and loop
function startAutoColorFunction() {
    colorChange();
    autoColorVar = setInterval(function(){
        counterColor += 1;
        counterColor = counterColor % colors.length;
        color = colors[counterColor];
    },619*2);
};



// Every ... radius will chainge
function startAutoRadiusFunction() {
    
    counterRadius = 0;
    radiusChange();
    
    autoRadiusVar = setInterval(function(){
        counterRadius += 1;
        counterRadius = counterRadius % radiusis.length;
    
        radius = radiusis[counterRadius];
    }, 619*4);
};



function colorChange(){
    counterColor += 1;
    counterColor = counterColor % colors.length;
    color = colors[counterColor];
};

function colorGreen(){
    color = "green";
};

function radiusChange(){
    counterRadius += 1;
        counterRadius = counterRadius % radiusis.length;
        radius = radiusis[counterRadius];
}



//      KEYBORD CONTROL
document.body.onkeydown = function (anyKey) {
    // key c change color
    if (anyKey.which == 67) {
        colorChange();
    } 
    // key g change color to green
    else if (anyKey.which == 71) {
        colorGreen();
    }
    // key a auto change color 
    else if (anyKey.which == 65) {
        startAutoColorFunction();
    }
    // key d auto change color from the start 
    else if (anyKey.which == 68) {
        fromStartAutoColorFunction();
    }
    // key f auto change color 
    else if (anyKey.which == 70) {
        AutoColorFunction();
    }
    // key s stop auto change color
    else if (anyKey.which == 83) {
        stopAutoColorFunction();
    }
    // key r change radius
    else if (anyKey.which == 82) {
        radiusChange();
    }
    // key q auto change radius
    else if (anyKey.which == 81) {
        startAutoRadiusFunction();
    }
    // key w stop auto change radius
    else if (anyKey.which == 87) {
        stopAutoRadiusFunction();
    }
    // key e big radius 
    else if (anyKey.which == 69) {
        AutoRadius();
    }
    
};


//      MOUSE MOVE retriggers
document.addEventListener('mousemove', animateRetrigger );


function animate(){

    
    requestAnimationFrame(animate);
    //c2.clearRect(0, 0, innerWidth, innerHeight);
    let randomRadius =Math.floor(Math.random() * radius) ;
    c2.beginPath();
    c2.arc(xMove, 450, randomRadius , 0, Math.PI * 2, false);
    c2.strokeStyle = color;
    c2.stroke();
    if (xMove + (randomRadius - 100) > innerWidth || xMove - (randomRadius - 100) < 0){
        speed = - speed;
    } 
    
    xMove += speed;  
};

animate();

function animateRetrigger(){

    // it just looks good
    // document.body.onkeydown = function (anyKey) {
    // } };

    requestAnimationFrame(animateRetrigger);
    let randomRadius =Math.floor(Math.random() * radius) ;
    c2.beginPath();
    c2.arc(xMove, 450, randomRadius , 0, Math.PI * 2, false);
    c2.strokeStyle = color;
    c2.stroke();
    if (xMove + (randomRadius - 100) > innerWidth || xMove - (randomRadius - 100) < 0){
        speed = - speed;
    } 
    xMove += speed; 
    
}









