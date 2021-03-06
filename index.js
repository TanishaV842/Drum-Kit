// Detecting Button Press

document.querySelectorAll(".drum").forEach(button => {
   button.addEventListener("click", function () {

      let buttonInnerHTML = this.innerHTML;

      makeSound(buttonInnerHTML);

      buttonAnimation(buttonInnerHTML);

   });
})

//Detecting Keyboard Press

document.addEventListener("keydown", function (e) {
   makeSound(e.key);

   buttonAnimation(e.key);

});

function makeSound(key) {
   switch (key) {

      case "a":
         let crash = new Audio("sounds/crash.mp3");
         crash.play();
         break;

      case "s":
         let HitHat = new Audio("sounds/Hit-Hat.mp3");
         HitHat.play();
         break;

      case "d":
         let tom2 = new Audio("sounds/tom-2.mp3");
         tom2.play();
         break;

      case "w":
         let snare = new Audio("sounds/snare.mp3");
         snare.play();
         break;

      case "j":
         let kick = new Audio("sounds/kick-bass.mp3");
         kick.play();
         break;

      case "k":
         let tom4 = new Audio("sounds/tom-4.mp3");
         tom4.play();
         break;

      case "l":
         let sticks = new Audio("sounds/Drum-Sticks.mp3");
         sticks.play();
         break;

      default: console.log(buttonInnerHTML);

   }
}

function buttonAnimation(currentKey) {
   let activeButton = document.querySelector("." + currentKey);

   activeButton.classList.add("pressed");

   setTimeout(() => {
      activeButton.classList.remove("pressed")
   }, 100);
}