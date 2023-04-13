document.addEventListener('click', function(event) {
  if (event.target.classList.contains('imagen')) {
    window.location.href = event.target.src;
  }
});
