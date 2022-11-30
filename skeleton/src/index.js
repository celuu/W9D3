
const View = require("./ttt-view.js");
const Game = require("./../ttt_node/game.js");

document.addEventListener("DOMContentLoaded", () => {
  const game = new Game();
  const ele = document.getElementsByClassName("ttt")[0];
  new View(game, ele);

  


});
