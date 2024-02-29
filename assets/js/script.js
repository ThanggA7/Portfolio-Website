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

document.addEventListener("DOMContentLoaded", () => {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const submit = document.getElementById("submit");

  submit.addEventListener("click", () => {
    const data = {
      nameData: name.value,
      mailData: email.value,
      messageData: message.value,
    };

    if (data.nameData && data.mailData && data.messageData) {
      postGoogle(data);
    } else {
      alert("Thieu");
    }
  });
});

async function postGoogle(data) {
  const formURL =
    "https://docs.google.com/forms/d/e/1FAIpQLScdj-04B8749mexEbbS0fGce7FlBvoQ-fE_kgermIWtKZ1sbQ/formResponse";
  const postName = "entry.1168536969";
  const postMail = "entry.36760840";
  const postMessage = "entry.755376585";
  const formData = new FormData();
  formData.append(postName, data.nameData);
  formData.append(postMail, data.mailData);
  formData.append(postMessage, data.messageData);
  try {
    await fetch(formURL, {
      method: "POST",
      body: formData,
    });
  } catch {
    console.error("Lỗi");
  }
}
