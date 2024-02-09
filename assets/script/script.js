var qrCode = document.querySelector(".qr-code");
var container = document.querySelector(".container");
var btnOk = document.querySelector(".agree");
var btnKhong = document.querySelector(".disagree");

function swapButtons() {
  var okPos = { top: btnOk.offsetTop, left: btnOk.offsetLeft };
  var khongPos = { top: btnKhong.offsetTop, left: btnKhong.offsetLeft };

  btnKhong.style.position = "absolute";
  btnOk.style.position = "absolute";
  btnKhong.style.transition = "0.5s";
  btnOk.style.transition = "0.5s";
  btnKhong.style.top = okPos.top + "px";
  btnKhong.style.left = okPos.left + "px";
  btnOk.style.top = khongPos.top + "px";
  btnOk.style.left = khongPos.left + "px";
}
swapButtons();

btnKhong.addEventListener("mouseover", swapButtons);
btnKhong.addEventListener("click", swapButtons);

btnOk.addEventListener("click", function () {
  qrCode.style.display = "block";
  container.style.display = "none";
});
