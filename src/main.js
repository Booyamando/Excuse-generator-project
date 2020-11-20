/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["itme", "item2", "item3", "item4", "itme5"];
  let what = ["itme", "item2", "item3", "item4", "itme5"];
  let when = ["itme", "item2", "item3", "item4", "itme5"];

  let sentence = `${who[getRndInteger(0, who.length - 1)]} ${
    what[getRndInteger(0, what.length - 1)]
  } ${when[getRndInteger(0, when.length - 1)]}`;

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let excuse = document.querySelector("#excuse");

  excuse.innerHTML = sentence;
};
