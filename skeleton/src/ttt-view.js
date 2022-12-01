const Game = require("../ttt_node/game");

class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard();
  }
  

  setupBoard() {
    let unorderedList = document.createElement("ul");
    for(let i = 0; i < 3; i++){
      for(let j = 0; j < 3; j++){
        let listEle = document.createElement("li");
        unorderedList.appendChild(listEle);
        listEle.dataset.position = JSON.stringify([i,j]);

        //Add a class to switch the colors 
        //Add conditions once the class has changed

        listEle.addEventListener("mouseover", ()=>{
          listEle.style.backgroundColor = "orange";
        })
        listEle.addEventListener("mouseout", () => {
          listEle.style.backgroundColor = "red";
        })
        listEle.addEventListener("click", () => {
          listEle.style.backgroundColor = "blue";
        })
      }
    }
    this.el.appendChild(unorderedList)
  }

  bindEvents() {
  }


  makeMove(square) {}

}

module.exports = View;
