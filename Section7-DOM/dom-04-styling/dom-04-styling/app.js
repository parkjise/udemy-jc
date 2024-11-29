const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild;
const list = document.querySelector("ul");
const div = document.querySelector("div");
console.log(firstLi);

const section = document.querySelector("section");
const button = document.querySelector("button");
// section.textContent = "바껴라 글자야";
// section.innerHTML = "<h2>New Text</h2>";
list.innerHTML = list.innerHTML + "<li class='test'>dddd</li>";
const newLi = document.createElement("li");
list.appendChild(newLi);
newLi.textContent = "item5";
// list.prepend(newLi);
// list.lastElementChild(newLi);
// list.lastElementChild.before(newLi);
list.lastElementChild.after(newLi);
list.firstElementChild.replaceWith(newLi);
console.log(section.textContent);
// section.style.backgroundColor = 'blue';
const newLi2 = newLi.cloneNode(true);
list.appendChild(newLi, newLi2);
// list.remove();
list.parentElement.removeChild(list);

section.className = "red-bg";
section.innerHTML = section.innerHTML + "<div>";
section.insertAdjacentHTML("beforeend", "<p>Something went wrong!</p>");
button.addEventListener("click", () => {
  // if (section.className === 'red-bg visible') {
  //   section.className = 'red-bg invisible';
  // } else {
  //   section.className = 'red-bg visible';
  // }

  // section.classList.toggle('visible');
  section.classList.toggle("invisible");
});
