
const View = require("./ttt-view.js");
const Game = require("./../ttt_node/game.js");

document.addEventListener("DOMContentLoaded", () => {
  new Game();
  document.getElementsByClassName("ttt");
});

