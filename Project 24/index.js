const navbar = document.querySelector(".navbar");
const bottomContainer = document.querySelector(".bottom-container");

const updateNavbar = () => {
  const scrollOffset = window.scrollY;
  const bottomOffset = bottomContainer.offsetTop;
  const navbarHeight = navbar.offsetHeight;

  if (scrollOffset > bottomOffset - navbarHeight - 50) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
};

window.addEventListener("scroll", updateNavbar);
