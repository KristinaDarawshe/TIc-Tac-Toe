export default class Player{
constructor(symbole){
this.symbole= symbole;
this.cellNumbers = [];
this.score = 0 ;
}
getSymbole(){
    return this.symbole;
}
addClickedCells(clickedCellNumber){
this.cellNumbers.push(clickedCellNumber);
}
getClickedCells(){
return this.cellNumbers;
}
}