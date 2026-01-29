// Protect contact information from scrapers
document.addEventListener("DOMContentLoaded", () => {
  const contactLinks = document.querySelectorAll(".contact-text-link");

  contactLinks.forEach((link) => {
    const encoded = link.getAttribute("data-contact");
    if (encoded) {
      const decoded = atob(encoded.split("").reverse().join(""));
      link.href = decoded;
    }
  });
});
