const image = document.querySelectorAll(".card img");
const inner = document.querySelector(".inner");
const imgshow = document.querySelector(".inner .img img");
const cls = document.querySelector(".close button");
const next = document.querySelector(".next button");
const pre = document.querySelector(".pre button");
var currentIndex = 0;
function show() {
  currentIndex == image.length - 1
    ? next.classList.add("hide")
    : next.classList.remove("hide");

  currentIndex == 0 ? pre.classList.add("hide") : pre.classList.remove("hide");

  imgshow.src = image[currentIndex].src;
  inner.classList.add("show");
}
image.forEach((item, index) =>
  item.addEventListener("click", () => {
    currentIndex = index;
    show();
  })
);

cls.onclick = function () {
  inner.classList.remove("show");
};

next.onclick = function () {
  if (currentIndex < image.length) {
    currentIndex++;
    imgshow.src = image[currentIndex].src;
    show();
  }
};

pre.onclick = function () {
  if (currentIndex >= 0) {
    currentIndex--;
    imgshow.src = image[currentIndex].src;
    show();
  }
};
document.addEventListener("keydown", function (e) {
  if (e.keyCode == 27) {
    inner.classList.remove("show");
  }
});
