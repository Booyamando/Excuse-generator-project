/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["Car", "Dog", "Bison", "Bob", "Bird"];
  let what = [
    "drove home",
    "destroyed an iceberg",
    "terrorized ants",
    "jump into a fire",
    "ran from a ghost"
  ];
  let when = [
    "over the weekend",
    "when I was about to work",
    "in the middle of traffic!",
    "that purposely deleted my code",
    "and broke my nail"
  ];

  let sentence = `${who[getRndInteger(0, who.length - 1)]} ${
    what[getRndInteger(0, what.length - 1)]
  } ${when[getRndInteger(0, when.length - 1)]}`;

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let excuse = document.querySelector("#excuse");

  excuse.innerHTML = sentence;
};
