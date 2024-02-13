document.addEventListener('DOMContentLoaded', function() {
  var triggerImages = document.querySelectorAll('.trigger-image');
  var textBoxes = document.querySelectorAll('.scrolling-text-container');
  var closeButtons = document.querySelectorAll('.close-text-box');
  triggerImages.forEach(function(img, index) {
    img.addEventListener('click', function() {
      // Close all text boxes before opening the new one
      textBoxes.forEach(function(box) {
        box.style.display = 'none';
      });

      // Calculate the position where the text box should appear
      var imgRect = img.getBoundingClientRect();
      var correspondingBox = document.getElementById('scrolling-text-box-' + (index + 1));
      correspondingBox.style.display = 'block';
      correspondingBox.style.position = 'absolute';
      correspondingBox.style.top = (imgRect.top + window.scrollY - 15) + 'px'; // Position it 10px below the image
      correspondingBox.style.left = imgRect.left + 'px'; // Align it with the left of the image
    });
  });

  closeButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      // Close the text box this button belongs to
      this.parentElement.style.display = 'none';
    });
  });

  window.addEventListener('click', function(event) {
    textBoxes.forEach(function(box) {
      // Check if the click is outside of the text box and not on the image
      if (event.target !== box && !box.contains(event.target) && !event.target.matches('.trigger-image')) {
        box.style.display = 'none';
      }
    });
  });
});
