var tiplabel = document.getElementById("tiplabel");
tiplabel.style.display = "none";

var calculate = document.getElementById("calculate");

calculate.addEventListener("click", function () {
  var amount = document.getElementById("billAmount").value;
  var rating = document.getElementById("sService").value;
  var count = document.getElementById("count").value;

  var totalTip = (amount * rating)/count;
  document.getElementById("totaltip").value = "Rs."+totalTip+" !";
  tiplabel.style.display = "";
});