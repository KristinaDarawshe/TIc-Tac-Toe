import GamePlay from "../GamePlay";

export default class GameBuilder {
    
  buildHome() {
    const gamePlay = new GamePlay();
    const homeContainer = document.createElement("div");
    homeContainer.className = "homeContainer";
    let xoImage = document.createElement("img");
    xoImage.setAttribute("src", "./images/xo.png");
    xoImage.setAttribute("class", "xoImage");
    let playButton = document.createElement("button");
    playButton.setAttribute("class","playButton");
    playButton.setAttribute("type","button");
    playButton.innerText =" Play";
    playButton.addEventListener("click", () => {
        homeContainer.remove();
        this.gameBuild();
        const cells = Array.prototype.slice.call(document.querySelectorAll(".cell"));
        cells.forEach((cell, index)=> {
          cell.addEventListener(
            "click",
            function () {
            gamePlay.gameStart(index);
        
            },
            { once: true }
          );
        });    })
    homeContainer.appendChild(xoImage);
    homeContainer.appendChild(playButton);
    document.body.appendChild(homeContainer);

  }

  buildCell() {
    let cellsHtml = "";
    // return cell
    for (let index = 0; index < 9; index++) {
      cellsHtml += `<div class='cell cell${index}'></div>`;
    }
    return cellsHtml;
  }

  buildCells(){
    const container = document.createElement("div");
    container.className = "container";
    container.innerHTML = this.buildCell();
    document.body.appendChild(container);
  }
  gameBuild() {
    const restButton = document.createElement("button");
    restButton.setAttribute("class","restButton");
    restButton.setAttribute("type","button");
    restButton.innerText =" Rest";
    restButton.addEventListener("click", () =>{
        this.endGame();
    });
    const div = document.createElement("div");
    const span = document.createElement("span");
    div.setAttribute("class","TopDiv");
    span.setAttribute("class", "textSpan");
    div.appendChild(restButton);
    div.appendChild(span);
    document.body.appendChild(div);
    this.buildCells();

  }


  xoInsertion(symbole, cellNumber) {
    let cells = document.querySelectorAll(".cell");
    let image = document.createElement("img");
    if (symbole === "X") {
      image.setAttribute("src", "images/x.png");
      cells[cellNumber].appendChild(image);

      console.log(image);
    } else if (symbole === "O") {
      image.setAttribute("src", "images/o.png");
      cells[cellNumber].appendChild(image);

      console.log(image);
    }
  }
  endGame() {
    const gamePlay = new GamePlay();
    let container = document.querySelector(".container");
    let textSpan = document.querySelector(".textSpan");
    container.remove();
    textSpan.innerText ="Keep Playing"
    this.buildCells();
    const cells = Array.prototype.slice.call(
      document.querySelectorAll(".cell")
    );
    cells.forEach((cell, index) => {
      cell.addEventListener(
        "click",
        function () {
          gamePlay.gameStart(index);
        },
        { once: true }
      );
    });
  }
}
