document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('.image-container').forEach(container => {
    container.addEventListener('mouseenter', function() {
      const hoverCard = this.querySelector('.hover-card');
      hoverCard.style.display = 'block'; // Show the card to measure it

      // Get the position of the hover card relative to the viewport
      const hoverCardRect = hoverCard.getBoundingClientRect();
      const containerRect = this.getBoundingClientRect();

      // If the hover card is in the last column, adjust its position
      if (containerRect.right + hoverCard.offsetWidth > window.innerWidth) {
        hoverCard.style.right = '0';
        hoverCard.style.left = 'auto';
        hoverCard.style.transform = 'translateX(0)';
      } else {
        hoverCard.style.left = '50%';
        hoverCard.style.right = 'auto';
        hoverCard.style.transform = 'translateX(-50%)';
      }

      // Check for bottom overflow
      if (hoverCardRect.bottom > window.innerHeight) {
        hoverCard.style.top = 'auto';
        hoverCard.style.bottom = '50%';
      } else {
        hoverCard.style.top = '50%';
        hoverCard.style.bottom = 'auto';
      }
    });

    container.addEventListener('mouseleave', function() {
      const hoverCard = this.querySelector('.hover-card');
      hoverCard.style.display = 'none'; // Hide the card
      // Reset positions
      hoverCard.style.left = '50%';
      hoverCard.style.top = '50%';
      hoverCard.style.right = 'auto';
      hoverCard.style.bottom = 'auto';
      hoverCard.style.transform = 'translateX(-50%)';
    });
  });
});
