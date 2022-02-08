"use strict";
/**
 *
 * @param {HTMLElement} selector
 * @param {Event} eventType
 * @param {CallableFunction} cb
 */
function on(parent, selector, eventType, cb) {
  parent.addEventListener(eventType, (e) => {
    let element = e.target;
    while (element) {
      if (element.matches(selector)) {
        return cb({
          handleObj: element,
          originalEvent: e,
        });
      }
      element = element.parentElement;
    }
  });
}

function createGrid(parentElement) {
  let c1 = 0;
  let c2 = 0;
  for (let i = 0; i < 10 * 10; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-element");
    if (c2 === 10) c2 = 0;
    if (i % 10 === 0) c1 += 1;
    div.dataset.c1 = c1;
    div.dataset.c2 = c2 += 1;
    parentElement.appendChild(div);
  }
}

function styleDom(index, element) {
  let c2 = parseInt(element.dataset.c2, 10);
  if (c2 + index > 10) {
    let newC2 = c2 + index - 10;
    for (let i = 1; i < newC2; i++) {
      element = element.previousSibling;
    }
  }
  element.style.backgroundColor = "green";
  if (index > 1) {
    for (let i = 1; i < index; i++) {
      element.nextSibling.style.backgroundColor = "green";
      element = element.nextSibling;
    }
  }
}
function styleHit(shipHit, element) {
  if (shipHit.includes("ship")) {
    element.style.backgroundColor = "red";
  } else {
    element.style.backgroundColor = "gray";
  }
}

module.exports.on = on;
module.exports.createGrid = createGrid;
module.exports.styleDom = styleDom;
module.exports.styleHit = styleHit;
