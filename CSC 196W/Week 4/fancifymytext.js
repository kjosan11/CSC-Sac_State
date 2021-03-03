function biggerText() {
  document.getElementById("bigText").style.fontSize = "24pt";
}
function styleText() {
  document.getElementById("uncheckBoring").checked = false;
  document.getElementById("bigText").style.fontWeight = "bold";
  document.getElementById("bigText").style.color = "#DC143C";
  document.getElementById("bigText").style.textDecoration = "underline";
}
function removeStyle() {
  document.getElementById("uncheckFancy").checked = false;
  document.getElementById("bigText").style.fontSize = "inherit";
  document.getElementById("bigText").style.fontWeight = "inherit";
  document.getElementById("bigText").style.color = "inherit";
  document.getElementById("bigText").style.textDecoration = "none";
  document.getElementById("bigText").style.textTransform = "none";
}
function upperCaseText() {
  document.getElementById("bigText").style.textTransform = "uppercase";
  var input = document.getElementById("bigText").value;
  var parts = input.split(".");
  str = parts.join("-Moo");
  alert(str);
}
