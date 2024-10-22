document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("close-btn");
  const triggerElements = document.querySelectorAll(".lightbox-trigger");

  triggerElements.forEach((trigger) => {
    trigger.setAttribute("draggable", "false");

    trigger.addEventListener("click", function () {
      const imgUrl = trigger.getAttribute("src");
      openLightbox(imgUrl);
      disableScroll();
    });
  });

  closeBtn.addEventListener("click", function () {
    closeLightbox();
    enableScroll();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeLightbox();
      enableScroll();
    }
  });

  lightbox.addEventListener("click", function (event) {
    if (!event.target.closest("#lightbox-img")) {
      closeLightbox();
      enableScroll();
    }
  });

  function openLightbox(imgUrl) {
    lightboxImg.setAttribute("src", imgUrl);
    lightbox.style.display = "flex";
    lightboxImg.style.objectFit = "contain";

    lightboxImg.addEventListener("click", function () {
      closeLightbox();
      enableScroll();
    });
  }

  function closeLightbox() {
    lightbox.style.display = "none";
    lightboxImg.style.objectFit = "cover";

    lightboxImg.removeEventListener("click", function () {
      closeLightbox();
      enableScroll();
    });
  }

  function disableScroll() {
    const scrollY = window.scrollY;
    document.addEventListener('scroll', preventScroll);
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
  }

  function preventScroll(event) {
    event.preventDefault();
  }

  function enableScroll() {
    document.removeEventListener('scroll', preventScroll);
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
  }
});
