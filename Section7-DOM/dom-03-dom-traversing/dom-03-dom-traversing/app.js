const li = document.querySelector("li");
li.parentNode;
console.log(li.parentNode);
console.log(li.closest("body"));
console.log(li.closest("header"));

const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild;

const parentEl = document.querySelector("section");

console.log(firstLi);
console.log(parentEl.previousSibling);
console.log(parentEl.previousElementSibling);
console.log(parentEl.nextSibling);
console.log(parentEl.nextElementSibling);
