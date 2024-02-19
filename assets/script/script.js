document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
let nameElement = document.querySelector(".name");

nameElement.addEventListener("mouseover", function () {
  this.style.opacity = "0";
  setTimeout(() => {
    this.textContent = "Noazuynh";
    this.style.opacity = "1";
  }, 500);
});

nameElement.addEventListener("mouseout", function () {
  this.style.opacity = "0";
  setTimeout(() => {
    this.textContent = "Nhu Thang";
    this.style.opacity = "1";
  }, 500);
});
