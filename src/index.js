import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));

for (var i = 0; i < 17; i++) {
  const fire = document.createElement("div");
  fire.classList.add("circle");
  document.body.appendChild(fire);
}

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");
const colors = [
  "#0e1f5c",
  "#003d7e",
  "#005c9c",
  "#007cb6",
  "#009dcb",
  "#00beda",
  "#00dfe5",
  "#59ffed",
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});
window.addEventListener("mousemove", function (e) {
  coords.x = e.pageX;
  coords.y = e.pageY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.5;
    y += (nextCircle.y - y) * 0.5;
  });
  requestAnimationFrame(animateCircles);
}
animateCircles();

document.addEventListener("mouseenter", () => {
  circles.forEach(function (circle, index) {
    circle.style.opacity = "1";
  });
});

document.addEventListener("mouseleave", () => {
  circles.forEach(function (circle, index) {
    circle.style.opacity = "0";
  });
});

// const cursor = document.createElement("div");
// cursor.classList.add("techy-cursor");

// const outline = document.createElement("div");
// outline.classList.add("techy-cursor-outline");

// cursor.appendChild(outline);
// document.body.appendChild(cursor);

// document.addEventListener("mousemove", (e) => {
//   cursor.style.left = e.pageX + "px";
//   cursor.style.top = e.pageY + "px";
// });

// document.addEventListener("mouseenter", () => {
//   cursor.style.opacity = "1";
// });

// document.addEventListener("mouseleave", () => {
//   cursor.style.opacity = "0";
// });

root.render(<App />);
