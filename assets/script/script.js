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
  var result = confirm("Bạn phải nhấn nút OK!");
  if (result) {
    // Người dùng đã nhấn nút OK
    // Thực hiện hành động tương ứng tại đây
  } else {
    // Người dùng đã nhấn nút Cancel hoặc đã đóng hộp thoại
    // Thực hiện hành động tương ứng tại đây
  }
});
