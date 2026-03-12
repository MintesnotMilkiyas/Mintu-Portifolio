var typed = new Typed(".multiple-text", {

strings:[
"Frontend Web Developer",
"Backend Web Developer",
"Full Stack Web Developer",
"Web Designer"
],

typeSpeed:80,
backSpeed:80,
backDelay:1000,
loop:true

});


/* --- New Image Changing Logic --- */
const aboutImg = document.querySelector(".about-img img"); // Selects the image inside your about div
const profileImages = [
    "images/port.jpg", 
    "images/mintu.jpg", 
    "images/port1.jpg"
]; 

let imageIndex = 0;

function rotateImage() {
    // 1. Brief fade out effect
    aboutImg.style.opacity = "0.4";
    aboutImg.style.transition = "0.5s ease";

    setTimeout(() => {
        // 2. Change to the next image in the list
        imageIndex = (imageIndex + 1) % profileImages.length;
        aboutImg.src = profileImages[imageIndex];
        
        // 3. Fade back in
        aboutImg.style.opacity = "5";
    }, 500);
}

// Change the image every 4 seconds (4000 milliseconds)
setInterval(rotateImage, 3000);


// Get the elements
const viewer = document.getElementById('image-viewer');
const fullImg = document.getElementById('full-image');
const closeBtn = document.querySelector('#image-viewer .close');

// Select all testimonial images
document.querySelectorAll('.client-info img').forEach(img => {
    img.addEventListener('click', function() {
        viewer.style.display = 'flex'; // Show the viewer
        fullImg.src = this.src;        // Copy the source of the clicked image
    });
});

// Close the viewer when clicking 'X'
closeBtn.addEventListener('click', function() {
    viewer.style.display = 'none';
});

// Close the viewer when clicking anywhere on the black background
viewer.addEventListener('click', function(e) {
    if(e.target !== fullImg) {
        viewer.style.display = 'none';
    }
});