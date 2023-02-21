// Reference: https://dribbble.com/shots/5639404-Stepper-XVIII  by Oleg Frolov//
var balance = parseInt(localStorage.getItem('MiAhorro'));
ahorro = document.querySelector(".ahorro span");
ahorro.innerHTML = balance;

Cambio = document.querySelector(".cambiar");
var ModoActual = "menos";


function cambioModo(){
  if (Cambio.innerHTML == "Nuevo Ahorro") {
    ModoActual = "mas";
    Cambio.innerHTML = "Nuevo Gasto";
    document.documentElement.style.setProperty('--box-color1', " rgb(85, 149, 27)");
    document.documentElement.style.setProperty('--box-color2', " rgb(183, 219, 87)");
    document.documentElement.style.setProperty('--cambiar', " radial-gradient(circle at 10% 20%, #fb3156 0.1%, #fd735a 90%)");

  }

  else if (Cambio.innerHTML == "Nuevo Gasto"){
    ModoActual = "menos";
    Cambio.innerHTML = "Nuevo Ahorro";
    document.documentElement.style.setProperty('--box-color1', " #fb3156");
    document.documentElement.style.setProperty('--box-color2', " #fd735a");
    document.documentElement.style.setProperty('--cambiar', " radial-gradient(circle at 10% 20%, rgb(85, 149, 27) 0.1%, rgb(183, 219, 87) 90%)");

  }
  myval = 0;
  ahorro.innerHTML = balance+myval;
  caja.innerHTML =myval;
}



var  wrapper = $( "#button-wrapper" );

$( ".submit" ).click(function() {

  localStorage.setItem('MiAhorro', ahorro.innerHTML);
   myval = 0;
  caja.innerHTML =myval;
   balance = parseInt(localStorage.getItem('MiAhorro'));

  if(wrapper.not( ".checked" )) {
    wrapper.addClass( "checked" );
    setTimeout(function(){

      wrapper.removeClass( "checked" );
    }, 8000);
  }
});


console.clear();
const caja = document.querySelector("#container-wrapper");
// SETUP
var overlapThreshold = "50%"; 
var boxwidth = $("#stepper").css("width").replace(/[^-\d\.]/g, ''); 
var maxValue = 9999;
var minValue = 0;
var ContLenght = maxValue + boxwidth;
var startValue = 0;
var mainTimer;
var InitialTimer = 500; //ms
var NewTimer = InitialTimer;
var minTimerValue = 50; //ms
var increment = 1.25;
var myval = startValue;

var initiate = function() {
  for(var i = minValue; i <= maxValue; i++){ 
    $("#container").append("<li class='item'>" + i + "</li>")
  }
  TweenMax.to("#container", 0, {left: -(boxwidth * startValue)});
};

initiate();

// TIMELINE
var anim = new TimelineMax;

var moveForwards = function() {
  anim.add(TweenMax.to("#container", 0.5, {x:"-="+boxwidth, ease: Expo.easeOut}) );
}

var moveBackwards = function() {
  anim.add(TweenMax.to("#container", 0.5, {x:"+="+boxwidth, ease: Expo.easeOut}) );
}

// GENERAL functions
var increaseValue = function(){
  increaseInputValue();
  anim.progress(1, false);
  moveForwards();
  anim.resume();
}

var decreaseValue = function(){
  decreaseInputValue();
  anim.progress(1, false);
  moveBackwards();
  anim.resume();
}

var increaseInputValue = function() {
  if (myval < maxValue) {
    myval++;
    ////console.log(myval);

    if (ModoActual == "mas") {

      ahorro.innerHTML = parseInt(ahorro.innerHTML)+1;
    }
    if (ModoActual == "menos") {

      ahorro.innerHTML = parseInt(ahorro.innerHTML)-1;
    }
    caja.innerHTML =myval;
    
  }
}

var decreaseInputValue = function() {
  if (myval > minValue) {
    myval--;
  //  console.log(myval);

  if (ModoActual == "mas") {
      ahorro.innerHTML = parseInt(ahorro.innerHTML)-1;
  }
  if (ModoActual == "menos") {
      ahorro.innerHTML = parseInt(ahorro.innerHTML)+1;
  }
  caja.innerHTML =myval;


}
}


// Draggable item
var stepper = Draggable.create("#stepper", {
  type:"x",
  edgeResistance:0.95,
  bounds:"#bound"
})[0];

// declare events
stepper.addEventListener("dragend", onEndDragging);
stepper.addEventListener("drag", clickAndHold);

// On Mouseup when dragging
function onEndDragging() {

   TweenMax.to("#stepper", 1, {x:"0", ease: Elastic.easeOut.config(1, 0.75)}); // brings it back in position
   changeValueOnDraggingRelease();
   resetTimer();
   $( "#stepper" ).removeClass( "disabled" );
 }
 
 var changeValueOnDraggingRelease = function() {
   anim.progress(1, false); 
   if (stepper.hitTest("#next", overlapThreshold) && myval < maxValue) {
     increaseValue();
   }

   else if (stepper.hitTest("#prev", overlapThreshold) && myval > minValue) {
     decreaseValue();
   }
   anim.resume();

 }

//On drag and hold 
function clickAndHold() {
  checkanddisable();
};


//On click and hold on the Stepper
$("#stepper").on("touchstart mousedown", function() { 
  moveOnHold();
})

$("#stepper").on("touchend mouseup", function() { 
  resetTimer();
})

var decreaseTimer = function() {
  if (NewTimer > minTimerValue) {
    NewTimer = NewTimer / increment;
  //  console.log("timer: " + NewTimer)
}
else {
  NewTimer = minTimerValue;
  //  console.log("timer: " + NewTimer)
}
}

function ChangeNumberOnHold() {
  if (stepper.hitTest("#next", overlapThreshold) && myval < maxValue) {
    $( "#stepper" ).removeClass( "disabled" );
    increaseValue();
    decreaseTimer();
  }
  
  else if (stepper.hitTest("#prev", overlapThreshold) && myval > minValue) {
    $( "#stepper" ).removeClass( "disabled" );
    decreaseValue();
    decreaseTimer();
  }
  else {
    NewTimer = InitialTimer;
  }
}

var moveOnHold =   function() {
  mainTimer = setTimeout(function () {
    ChangeNumberOnHold();
    moveOnHold();
  }, NewTimer);
}

//Reset Timer
var resetTimer = function() {
  clearTimeout(mainTimer);
  NewTimer = InitialTimer;
}


//visually disable movement on Max and Min Values
var checkanddisable = function() {
  if (stepper.hitTest("#next", overlapThreshold) && myval >= maxValue) {
    $( "#stepper" ).addClass( "disabled" );
  }
  else if (stepper.hitTest("#prev", overlapThreshold) && myval <= minValue) {
    $( "#stepper" ).addClass( "disabled" );
  }
}; 


var disabled = function() {
  $( "#stepper" ).addClass( "disabled" );
  setTimeout(function(){  $( "#stepper" ).removeClass( "disabled" ); }, 100); 
}

// click on arrows

$("#next").click(function(){
  var tlforward = new TimelineLite();
  tlforward.to("#stepper", 0.1, {x:10, ease: Expo.easeOut},"-=0");
  tlforward.to("#stepper", 0.5, {x:0, ease: Back.easeOut.config(1.7)},"-=0");
  if (myval < maxValue) {
    increaseValue();
  }
  else {
    disabled(); 
  }
});

$("#prev").click(function(){
  var tlforward = new TimelineLite();
  tlforward.to("#stepper", 0.1, {x:-10, ease: Expo.easeOut},"-=0");
  tlforward.to("#stepper", 0.5, {x:0, ease: Back.easeOut.config(1.7)},"-=0");
  if (myval > minValue) {
    decreaseValue();
  }
  else {
    disabled(); 
  }
});

//Cursor Events --- only on desktop

$("#stepper").mousemove(function(e){
  $(".cursor").css({left:e.pageX-40, top:e.pageY-40});
});

$("#stepper").mousedown(function(e){
  TweenMax.to(".cursor", 0.2, {opacity:1, scale:0.8, ease: Power2.easeOut});
});

$(document).mouseup(function(e){
  var clicked = new TimelineMax;
  clicked.to(".cursor", 0.5, {scale:3, ease: Power2.easeOut}, "+=0"),
  clicked.to(".cursor", 0.2, {opacity:0, ease: Power2.easeOut}, "-=0.2"),
  clicked.to(".cursor",0, {scale:1, ease: Power2.easeOut}, "-=0");
});