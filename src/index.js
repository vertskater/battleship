"use strict";
import "./styles.scss";

const Gameboard = require("./controllers/gameboard");
const { Computer, Player } = require("./controllers/players");
const { createGrid, on, styleDom } = require("./controllers/dom");

//create dom Grid for Player and Computer
const computerGrid = document.querySelector(".computer-grid");
const computerBoard = document.querySelector("#computer-board");
const playerBoard = document.querySelector("#player-board");
const playerGrid = document.querySelector(".player-grid");
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
  if (placeIndex < 6) {
    player.gameboard.placeShips(placeIndex, c1, c2);
    styleDom(placeIndex, obj.handleObj);
  }
  placeIndex++;
});

computer.init();

//Add eventhandler for mouse over effekt

/* on(computerBoardElement, ".grid-element", "mouseover", (e) => {
  e.handleObj.style.backgroundColor = "black";
});
on(computerBoardElement, ".grid-element", "mouseout", (e) => {
  e.handleObj.style.backgroundColor = "";
}); */
