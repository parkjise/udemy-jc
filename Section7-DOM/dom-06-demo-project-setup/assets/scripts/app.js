// add-modal 선택
const modal = document.getElementById("add-modal");
// const modal = document.querySelector("#add-modal");
// const modal = document.body.children[1];

// 백드랍 선택
const backdrop = document.getElementById("backdrop");

// 헤더 버튼선택
const btn = document.querySelector("header button");
// const btn = document.querySelector("header").lastElementChild;

const cancelBtn = modal.querySelector(".btn--passive");
const addBtn = cancelBtn.nextElementSibling;
const userInputs = modal.querySelectorAll("input");
// const userInputs = modal.getElementsByTagName("input");
const entryTextSection = document.getElementById("entry-text");

const movies = [];
const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
};

const deleteMovieHandler = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById("movie-list");
  listRoot.children[movieIndex].remove();
  // listRoot.removeChild(listRoot.children[movieIndex]);
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${imageUrl}" alt-"${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating} / 5</p>
    </div>
  `;
  newMovieElement.addEventListener("click", deleteMovieHandler.bind(null, id));
  const listRoot = document.getElementById("movie-list");
  listRoot.append(newMovieElement);
};

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const toggleMovieModal = () => {
  modal.classList.toggle("visible");
  toggleBackdrop();
};

const clearMovieInput = () => {
  for (const userInput of userInputs) {
    userInput.value = "";
  }
};

const cancelAddMoviekHandler = () => {
  toggleMovieModal();
};

const backdropClickHandler = () => {
  toggleMovieModal();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5 // 문자열 형태의 숫자를 숫자로 변환(단항 + 연산자).
  ) {
    alert("Please enter valid values");
    return;
  }
  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };

  movies.push(newMovie);
  console.log(movies);
  toggleMovieModal();
  clearMovieInput();
  updateUI();
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
};

btn.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelBtn.addEventListener("click", cancelAddMoviekHandler);
addBtn.addEventListener("click", addMovieHandler);
// btn.addEventListener("click", () => {
//   modal.classList.add("visible");
//   backdrop.classList.add("visible");
// });
// cancelBtn.addEventListener("click", () => {
//   modal.classList.remove("visible");
//   backdrop.classList.remove("visible");
// });
