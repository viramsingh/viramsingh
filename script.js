
// Add active class to current navigation item
const currentLocation = location.href;
const navLinks = document.querySelectorAll("nav ul li a");

for (const link of navLinks) {
if (link.href === currentLocation) {
link.classList.add("active");
}
}


// Modal Images
var modal = document.getElementById("myModal");

var img = document.getElementById("myImg");
var images = document.getElementsByClassName('myImages');

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

for (var i = 0; i < images.length; i++) {
  var img = images[i];
  img.onclick = function (e) {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
}
