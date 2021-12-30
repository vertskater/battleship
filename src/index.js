import "./styles.scss";
const template = require("./templates/test.ejs");

const test = template({ name: "Battleship" });
document.body.innerHTML = test;
