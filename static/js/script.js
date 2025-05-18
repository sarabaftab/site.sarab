
const helloPart = document.getElementById('hello-part');
const highlightedPart = document.getElementById('highlighted-part');
const helloText = "Hello, ";
const highlightText = "I am Sarab!";
let i = 0;

function typeHello() {
  if (helloPart && i < helloText.length) {
    helloPart.textContent += helloText.charAt(i);
    i++;
    setTimeout(typeHello, 100);
  } else {
    i = 0;
    typeHighlight();
  }
}

function typeHighlight() {
  if (highlightedPart && i < highlightText.length) {
    highlightedPart.textContent += highlightText.charAt(i);
    i++;
    setTimeout(typeHighlight, 100);
  }
}

document.addEventListener("DOMContentLoaded", typeHello);
