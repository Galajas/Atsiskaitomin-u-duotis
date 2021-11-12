function myFunction() {
  var x = document.getElementsByClassName("myLinks");
  for (var i = 0; i < x.length; i++) {
    if (x[i].style.display === "flex") {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "flex";
    }
  }
}
