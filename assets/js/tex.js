var i = 0;
var txt = 'HOWEVER, YOU SPEND YOUR DAY, MAKE SURE YOU LOOK GREAT WHEN YOU GET THERE';

var speed = 99.9; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();