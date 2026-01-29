document.addEventListener("DOMContentLoaded", function () {
    // Define your array of image sources here
    const imageSources = [
        "/assets/images/HB_Gallery-Image_1.webp",
        "/assets/images/HB_Gallery-Image_2.webp",
        "/assets/images/HB_Gallery-Image_3.webp",
        "/assets/images/HB_Gallery-Image_4.webp",
        "/assets/images/HB_Gallery-Image_5.webp",
        "/assets/images/HB_Gallery-Image_6.webp",
        "/assets/images/HB_Gallery-Image_7.webp",
        "/assets/images/HB_Gallery-Image_8.webp",
        "/assets/images/HB_Gallery-Image_9.webp",
        "/assets/images/HB_Gallery-Image_10.webp",
        "/assets/images/HB_Gallery-Image_11.webp",
        "/assets/images/HB_Gallery-Image_12.webp",
        "/assets/images/HB_Gallery-Image_13.webp",
        "/assets/images/HB_Gallery-Image_14.webp",
        "/assets/images/HB_Gallery-Image_15.webp",
        "/assets/images/HB_Gallery-Image_16.webp"
    ];

    let currentIndex = 0; // To keep track of the currently displayed image
    const totalImages = imageSources.length; // Get the total number of images
    const currentImage = document.getElementById("currentImage"); // The image element that displays the current image
    const imageCounter = document.getElementById("imageCounter"); // The counter element to show the current image index

    // Update the gallery image and counter display
    function updateGallery() {
        currentImage.src = imageSources[currentIndex]; // Update the image source
        imageCounter.textContent = `${currentIndex + 1}/${totalImages}`; // Update the counter display (e.g., 3/16)
    }

    // Navigate to the previous image
    document.getElementById("prevBtn").addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Move to the previous image, loop if necessary
        updateGallery();
    });

    // Navigate to the next image
    document.getElementById("nextBtn").addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % totalImages; // Move to the next image, loop if necessary
        updateGallery();
    });

    // Initialize the gallery with the first image
    updateGallery();
});