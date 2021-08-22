// NAVBAR TOGGLE
const elMenu = document.querySelector(".menu");
const elTargets = document.querySelectorAll(".target");

elMenu.addEventListener("click", () => {
  elTargets.forEach((item) => {
    item.classList.toggle("change");
  });
});

// SLIDE SHOW
// nodelist similar as objects of array
const elIcons = document.querySelectorAll(".section-1-icons i");

// To change icons i need to add/remove change class to i tag with some intervals
let i = 1;
setInterval(() => {
  i++;
  const elIcon = document.querySelector(".section-1-icons .change");
  elIcon.classList.remove("change");

  //   To make a loop of existing icons
  if (i > elIcons.length) {
    elIcons[0].classList.add("change");
    i = 1;
  } else {
    //   to find next sibling element
    elIcon.nextElementSibling.classList.add("change");
  }
}, 4000);
