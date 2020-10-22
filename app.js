let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll("nav ul li");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

navLinks.forEach((link) => {
  VanillaTilt.init(link);

  link.addEventListener("mouseenter", (e) => {
    mouseCursor.classList.add("cursor-grow");
    // link.classList.add("test");
  });
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("cursor-grow");
    // link.classList.remove("test");
  });
});

// testing area .....................................
// ..................................................
// let navLinkT = document.querySelector(".test");

// function setTranslate(xPos, yPos, el) {
//   el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
// }

// navLinkT.addEventListener("mousemove", () => {
//   let random = Math.floor(Math.random() * 5);
//   setTranslate(random, random, navLinkT);
// });
// ..................................................
// testing area .....................................
