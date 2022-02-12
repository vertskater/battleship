"use strict";
import "./styles.scss";

const Gameboard = require("./controllers/gameboard");
const { Computer, Player } = require("./controllers/players");
const {
  createGrid,
  on,
  styleDom,
  styleHit,
  winner,
} = require("./controllers/dom");

//create dom Grid for Player and Computer
const computerGrid = document.querySelector(".computer-grid");
const computerBoard = document.querySelector("#computer-board");
const playerBoard = document.querySelector("#player-board");
const playerGrid = document.querySelector(".player-grid");
const winMessage = document.querySelector("#win-message");
createGrid(playerGrid);
createGrid(computerGrid);

//create Players and Gameboards
const playerGameboard = new Gameboard();
const computerGameboard = new Gameboard();
const player = new Player(computerGameboard);
const computer = new Computer(playerGameboard);
let placeIndex = 1;

on(playerBoard, ".grid-element", "click", (obj) => {
  let c1 = parseInt(obj.handleObj.dataset.c1, 10) - 1;
  let c2 = parseInt(obj.handleObj.dataset.c2, 10) - 1;
  let itemColor = obj.handleObj.dataset.color;
  if (itemColor === "green") {
    return;
  }
  if (placeIndex < 6) {
    player.gameboard.placeShips(placeIndex, c1, c2);
    styleDom(placeIndex, obj.handleObj);
  }
  placeIndex++;
});

computer.init();

setTimeout(() => {
  winMessage.classList.add("hide");
}, 3000);

on(computerBoard, ".grid-element", "click", (obj) => {
  if (placeIndex > 5) {
    let isClicked = obj.handleObj.dataset.clicked;
    if (isClicked === "isClicked") {
      return;
    }
    let c1 = parseInt(obj.handleObj.dataset.c1, 10) - 1;
    let c2 = parseInt(obj.handleObj.dataset.c2, 10) - 1;
    const shipHit = computer.gameboard.receiveAttack(c1, c2);
    styleHit(shipHit, obj.handleObj);
    const coordinates = computer.computerPlay(player.gameboard);
    const itemNr = getItemNr(coordinates);
    styleHit(coordinates.isShip, playerGrid.children[itemNr]);
    let computerWon = player.gameboard.allShipsSunk();
    let playerWon = computer.gameboard.allShipsSunk();
    winner(computerWon, playerWon);
  }
});

function getItemNr(coordinates) {
  let { c1, c2 } = coordinates;
  let gridItem = c1 * 10 + c2;
  return gridItem;
}

//Add eventhandler for mouse over effekt

/* on(computerBoardElement, ".grid-element", "mouseover", (e) => {
  e.handleObj.style.backgroundColor = "black";
});
on(computerBoardElement, ".grid-element", "mouseout", (e) => {
  e.handleObj.style.backgroundColor = "";
}); */
