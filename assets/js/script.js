document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
let nameElement = document.querySelector(".name");

var btns = document.querySelectorAll(".button");
btns.forEach(function (btn) {
  btn.addEventListener("click", filterProjects);
});

function filterProjects(e) {
  var category = this.dataset.category;

  var projects = document.querySelectorAll(".item--project");

  projects.forEach(function (project) {
    project.style.display = "none";
  });

  if (category === "all") {
    projects.forEach(function (project) {
      project.style.display = "block";
    });
  } else {
    var selectedProjects = document.querySelectorAll(
      ".item--project." + category
    );
    selectedProjects.forEach(function (project) {
      project.style.display = "block";
    });
  }
}
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});
