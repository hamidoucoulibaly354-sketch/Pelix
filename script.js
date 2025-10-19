document.getElementById('search').addEventListener('input', function () {
  const query = this.value.toLowerCase();
  const cards = document.querySelectorAll('.movie-card');
  cards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    card.style.display = title.includes(query) ? 'block' : 'none';
  });
});
