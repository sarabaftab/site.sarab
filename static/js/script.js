const helloPart = document.getElementById("hello-part");
const highlightedPart = document.getElementById("highlighted-part");
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

// New typing effect for Experience heading
const headingTarget = document.getElementById("typing-heading");
const headingText = "My Experience";
let j = 0;

function typeHeading() {
  if (headingTarget && j < headingText.length) {
    headingTarget.textContent += headingText.charAt(j);
    j++;
    setTimeout(typeHeading, 80);
  }
}

document.addEventListener("DOMContentLoaded", typeHeading);

// animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

document.querySelectorAll(".repo-card").forEach((card) => {
  observer.observe(card);
});
