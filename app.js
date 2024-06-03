"use strict"; // Enable strict mode for better error-checking

// Select the overlay element
const overLay = document.querySelector(".overlay");

// Select the image element inside the overlay
const overLayImage = document.querySelector("#over-img");

// Select the container that holds all the images
const imagesOverAllCont = document.querySelector(".images");

// Add an event listener to the images container
imagesOverAllCont.addEventListener("click", (e) => {
  // Check if the clicked element has the id "image-cont"
  if (e.target.getAttribute("id") === "image-cont") {
    // Add the "show" class to the overlay to make it visible
    overLay.classList.add("show");
    // Set the src attribute of the overlay image to the src of the clicked image
    overLayImage.src = e.target.getAttribute("src");
  }
});

// Add an event listener to the overlay for closing it
overLay.addEventListener("click", (e) => {
  // Check if the clicked element has the class "times" (close button)
  if (e.target.getAttribute("class") === "times") {
    // Clear the src attribute of the overlay image
    overLayImage.src = "";
    // Remove the "show" class from the overlay to hide it
    overLay.classList.remove("show");
  }
  // Check if the clicked element is the overlay itself when it's visible
  if (e.target.getAttribute("class") === "overlay show") {
    // Clear the src attribute of the overlay image
    overLayImage.src = "";
    // Remove the "show" class from the overlay to hide it
    overLay.classList.remove("show");
  }
});
