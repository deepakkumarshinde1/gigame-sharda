// document.getElementById();// single || null
// document.getElementsByClassName() // list || null
// document.getElementsByTagName() // list || null

// let element = document.querySelector("h1"); // single
// document.querySelectorAll('h1'); // [].forEach()

/**
 * Retrieves a DOM element based on the provided selector.
 *
 * @param {string} selector - A valid CSS selector to identify the element.
 * @returns {Element|null} The selected DOM element if found, otherwise null.
 * @throws {Error} Throws an error if the element is not found.
 *
 */
function getElement(selector) {
  try {
    let element = document.querySelector(selector);
    if (element === null)
      throw new Error(`Unable to get the element ${selector}`);
    return element;
  } catch (error) {
    alert(error.message);
    return false;
  }
}

let h1 = getElement("h1");
let btn = getElement(".btn");
let input = getElement("#input");
let list = getElement("#list");

const names = [];

btn.addEventListener("click", function (event) {
  event.preventDefault();
  h1.style.color = "black";
  if (input.value === "") {
    h1.innerHTML = "Value is empty.";
    h1.style.color = "red";
    return false;
  }
  h1.innerHTML = input.value;

  names.push(input.value);
  printList();
  input.value = "";
});

let parent = getElement("#parent");
let child = getElement("#child");

parent.addEventListener("click", function () {
  alert("parent is clicked");
});

child.addEventListener("click", function (event) {
  event.stopPropagation();
  alert("child is clicked");
});

function printList() {
  let li_s = names
    .map(function (name) {
      return `<li>${name}</li>`;
    })
    .join("");
  list.innerHTML = li_s;
}
