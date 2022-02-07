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

module.exports.on = on;
module.exports.createGrid = createGrid;
