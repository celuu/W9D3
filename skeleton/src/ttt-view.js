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
        listEle.classList.add("away");

        listEle.addEventListener("click", (e) => {
          listEle.classList.add("clicked");
          this.game.playMove(e.target.dataset.position.parse)
        })

        listEle.addEventListener("mouseover", (e)=>{
          if(e.target.getAttribute("class") !== "clicked"){
            listEle.classList.remove("away")
            e.target.classList.add("hover");
          }
        })

        listEle.addEventListener("mouseout", (e) => {
          console.log(e.target.getAttribute("class"))
          if(e.target.getAttribute("class") !== "clicked"){
            listEle.classList.remove("hover")
            e.target.classList.add("away");
          }
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
