const container = document.querySelector("h3");

container.addEventListener("click", function (e) {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.querySelector(
    ".container"
  ).style.backgroundColor = `#${randomColor}`;
  console.log(container);
  container.innerText = `Background Color : #${randomColor}`;
});
