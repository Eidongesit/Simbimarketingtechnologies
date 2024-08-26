
// Google section
document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.content-slide');
  let currentIndex = 0;
  function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.classList.remove('active', 'prev', 'next');
          if (i === index) {
              slide.classList.add('active');
          } else if (i < index) {
              slide.classList.add('prev');
          } else {
              slide.classList.add('next');
          }
          
      });
  }

  function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
  }

  setInterval(nextSlide, 3000); // Change slide every 3 seconds
  showSlide(currentIndex);
});

// Add fade effect between slides

document.addEventListener('DOMContentLoaded', function() {
    const textColumn = document.querySelector('.text-column');

    function checkVisibility() {
        const rect = textColumn.getBoundingClientRect();
        const isVisible = (rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight && rect.right <= window.innerWidth);
        
        if (isVisible) {
            textColumn.classList.add('is-visible');
        } else {
            textColumn.classList.remove('is-visible');
        }
    }

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility); // Optional: to handle window resizing

    checkVisibility(); // Initial check in case it's already visible on load
});

// animation for the Sell pitch 

// Get the modal

    // Function to open the modal and set the video source
    function openModal(videoId) {
        var modal = document.getElementById("videoModal");
        var iframe = document.getElementById("videoPlayer");
        iframe.src = "https://www.youtube.com/embed/" + videoId + "?autoplay=1";
        modal.style.display = "block";
    }

    // Function to close the modal
    function closeModal() {
        var modal = document.getElementById("videoModal");
        var iframe = document.getElementById("videoPlayer");
        iframe.src = ""; // Stop the video
        modal.style.display = "none";
    }

    // Event listener for the close button
    document.querySelector(".close").addEventListener("click", closeModal);

    // Close the modal if the user clicks outside of it
    window.onclick = function(event) {
        if (event.target == document.getElementById("videoModal")) {
            closeModal();
        }
    }
 // Function for the smallcard
 
 document.addEventListener('DOMContentLoaded', function() {
    const textColumns = document.querySelectorAll('.text-column');

    function checkVisibility() {
        textColumns.forEach(textColumn => {
            const rect = textColumn.getBoundingClientRect();
            const isVisible = (rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight && rect.right <= window.innerWidth);
            
            if (isVisible) {
                textColumn.classList.add('is-visible');
            } else {
                textColumn.classList.remove('is-visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility); // Optional: to handle window resizing

    checkVisibility(); // Initial check in case it's already visible on load
});



// script.js


  