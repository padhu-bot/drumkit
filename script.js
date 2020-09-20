var n = document.querySelectorAll(".drum").length;
for (var i = 0; i < n; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var alp = this.innerHTML;
    music(alp);
    effect(alp);
  })
};
document.addEventListener("keydown",function(event){
  music(event.key);
  effect(event.key);
});
function music(n){
  switch (n) {
    case "w":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case "a":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    case "s":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case "d":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case "j":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case "k":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case "l":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    default:
      alert(n);

  }
}
function effect(key){
  document.querySelector("."+key).classList.add("pressed");
  setTimeout(function () {
    document.querySelector("."+key).classList.remove("pressed");
  }, 100);
}
