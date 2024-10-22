function preventContextMenu(event) {
  const body = document.getElementById("body");
  body.style.cursor = "not-allowed";
  event.preventDefault();
  console.log("Please don't steal the images!")
  setTimeout(() => {
    body.style.cursor = "default";
  }, "2000");
}

document.addEventListener("contextmenu", preventContextMenu);