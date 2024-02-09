var qrCode = document.querySelector(".qr-code");
var container = document.querySelector(".container");
var btnOk = document.querySelector(".agree");
var btnKhong = document.querySelector(".disagree");

btnOk.addEventListener("click", function () {
  qrCode.style.display = "block";
  container.style.display = "none";
});

var btnKhong = document.querySelector(".disagree");

btnKhong.addEventListener("click", function () {
  var result = confirm("Bấm nút OK đi hihi <3");
});
