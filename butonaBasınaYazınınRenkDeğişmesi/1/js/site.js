var btnPrimary = document.querySelector("#btnPrimary");
btnPrimary.onclick = function () {
  txtTitle.className = "text-primary text-center mb-5";
};
btnSecondary.onclick = function () {
  txtTitle.className = "text-secondary text-center mb-5";
};
btnSuccess.onclick = function () {
  txtTitle.className = "text-success text-center mb-5";
};
btnDanger.onclick = function () {
  txtTitle.className = "text-danger text-center mb-5";
};
btnWarning.onclick = function () {
  txtTitle.className = "text-warning text-center mb-5";
};
btnİnfo.onclick = function () {
  txtTitle.className = "text-info text-center mb-5";
};
btnLight.onclick = function () {
  txtTitle.className = "text-light text-center mb-5";
};
btnDark.onclick = function () {
  txtTitle.className = "text-dark text-center mb-5";
};

$(".increment").click(function () {
  var fontSize = $("#txtTitle").css("font-size");
  $("#txtTitle").css("font-size", "+=1");
  $("#txtTitle").text("Hello");
});
$(".decrement").click(function () {
  var fontSize = $("#txtTitle").css("font-size");
  $("#txtTitle").css("font-size", "-=1");
  $("#txtTitle").text("Hello");
});
