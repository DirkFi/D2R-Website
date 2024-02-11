document.addEventListener('DOMContentLoaded', function() {
  var openButton = document.getElementById('trigger-image');
  var closeButton = document.getElementById('close-text-box');
  var textBox = document.getElementById('scrolling-text-box');

  openButton.onclick = function() {
    var imgRect = openButton.getBoundingClientRect();
    textBox.style.display = 'block';
    textBox.style.top = (imgRect.bottom + window.scrollY + 10) + 'px'; // 10 pixels below the image
    textBox.style.left = (imgRect.left + window.scrollX) + 'px'; // Aligned with the left side of the image
  };

  closeButton.onclick = function() {
    textBox.style.display = 'none';
  };

  // Close the text box when clicking anywhere outside of it
  window.onclick = function(event) {
    if (event.target !== textBox && event.target !== openButton && !textBox.contains(event.target)) {
      textBox.style.display = 'none';
    }
  };
});
