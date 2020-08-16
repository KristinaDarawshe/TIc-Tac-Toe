import Player from "./Player";
import GameBuilder from "./GameBuilder/GameBuilder";

export default class GamePlay {
  constructor() {
    this.gamebuilder = new GameBuilder();
    this.player1 = new Player("X");
    this.player2 = new Player("O");
    this.playingPalyer = this.player1;
  }
  gameStart(index) {
    let textSpan = document.querySelector(".textSpan");
    this.playingPalyer.addClickedCells(index);
    if (this.checkWin(this.playingPalyer.cellNumbers)) {
      textSpan.innerText = "Player" + " " + this.playingPalyer.symbole + " " + "Win"
      this.gamebuilder.xoInsertion(this.playingPalyer.symbole, index);
      setTimeout(function () {
        let builder = new GameBuilder();
        builder.endGame();
      }, 1000);
    } else {
      this.gamebuilder.xoInsertion(this.playingPalyer.symbole, index);
      this.playingPalyer =
        this.playingPalyer.symbole === "X" ? this.player2 : this.player1;
    }
  }
  checkWin(array) {
    let winningCells = new RegExp(
      "(?=.*0)(?=.*1)(?=.*2)|(?=.*3)(?=.*4)(?=.*5)|(?=.*6)(?=.*7)(?=.*8)|(?=.*1)(?=.*4)(?=.*7)|(?=.*2)(?=.*5)(?=.*8)|(?=.*0)(?=.*4)(?=.*8)|(?=.*0)(?=.*4)(?=.*6)"
    );
    const playerArray = array.join("");
    if (array.length >= 3) return winningCells.test(playerArray);
    else return false;
  }
}
