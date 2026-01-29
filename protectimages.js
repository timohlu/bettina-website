function preventContextMenu(event) {
    event.preventDefault();
    console.log("Please don't steal the images!");
    console.log("If you cannot resist, ask me for them.");
}

document.addEventListener("contextmenu", preventContextMenu);

document.addEventListener("DOMContentLoaded", function () {
    var images = document.querySelectorAll('img');

    images.forEach(function (image) {
        image.setAttribute('draggable', 'false');
    });
});