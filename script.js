function toggleCard(button) {
  const clickedCard = button.closest('.grid-item');
  const isAlreadyExpanded = clickedCard.classList.contains('expanded');

  if (!isAlreadyExpanded) {
    clickedCard.classList.add('expanded');
  } else {
    clickedCard.classList.remove('expanded');
  }
}
