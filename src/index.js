"use strict";
import "./styles.scss";

const Gameboard = require("./controllers/gameboard");
const { Computer } = require("./controllers/players");
const { Player } = require("./controllers/players");
const { createGrid } = require("./controllers/dom");
const { on } = require("./controllers/dom");

//create dom Grid for Player and Computer
const computerGrid = document.querySelector(".computer-grid");
const computerBoardElement = document.querySelector("#computer-board");
const playerGrid = document.querySelector(".player-grid");
createGrid(playerGrid);
createGrid(computerGrid);

//create Players and Gameboards
const playerGameboard = new Gameboard();
const player = new Player(playerGameboard);
const computerGameboard = new Gameboard();
const computer = new Computer(computerGameboard);

//Add eventhandler for mouse over effekt

/* on(computerBoardElement, ".grid-element", "mouseover", (e) => {
  e.handleObj.style.backgroundColor = "black";
});
on(computerBoardElement, ".grid-element", "mouseout", (e) => {
  e.handleObj.style.backgroundColor = "";
}); */
