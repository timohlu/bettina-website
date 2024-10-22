var lastScrollTop;

navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  var scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > 200) {
    navbar.style.transform = "translateY(-100%)";
  } else {
    navbar.style.transform = "translateY(0%)";
  }

  lastScrollTop = scrollTop;
});
