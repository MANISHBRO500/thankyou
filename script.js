const text = "Thank you for guiding me, believing in me, and shaping my future.";
let index = 0;
const speed = 80;

function typeText() {
  if (index < text.length) {
    document.getElementById("text").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, speed);
  }
}

window.onload = typeText;
