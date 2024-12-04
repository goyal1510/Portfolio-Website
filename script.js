// Toggle the side menu on hamburger click
const hamburger = document.querySelector(".hamburger");
const sidemenu = document.getElementById("sidemenu");
const menuLinks = sidemenu.querySelectorAll("li a");

// Toggle sidemenu visibility
hamburger.addEventListener("click", () => {
  sidemenu.classList.toggle("active");
});

// Close sidemenu when any link is clicked
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    sidemenu.classList.remove("active");
  });
});
