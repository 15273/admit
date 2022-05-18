var numberOfDrum = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrum; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    changeColor(buttonInnerHTML);
    

    //if click
  });
}
function playSound(buttonInnerHTML) {
  if (buttonInnerHTML == "w") {
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
    return audio.play();
  }
  if (buttonInnerHTML == "a") {
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
    return audio.play();
  }
  if (buttonInnerHTML == "s") {
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
    return audio.play();
  }
  if (buttonInnerHTML == "d") {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
    return audio.play();
  }
  if (buttonInnerHTML == "j") {
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
    return audio.play();
  }
  if (buttonInnerHTML == "k") {
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
    return audio.play();
  }
  if (buttonInnerHTML == "l") {
    var audio = new Audio("sounds/tom-4.mp3");
    return audio.play();
  }
  return;
}

document.addEventListener("keypress", function (event){


    playSound(event.key);
    changeColor(event.key);

});

function changeColor(curentKey){
    var activeBottun = document.querySelector("." + curentKey).classList.toggle("pressed");
    setTimeout(function(){document.querySelector("." + curentKey).classList.toggle("pressed");}, 100)
}