const pixelLetter = document.getElementById('pixel-letter');
const introScreen = document.getElementById('intro-screen');
const letterScreen = document.getElementById('letter-screen');

pixelLetter.addEventListener('click', () => {
  // Fade out intro
  introScreen.classList.add('hidden');
  
  // Attendi mezzo secondo per fare fade in lettera
  setTimeout(() => {
    letterScreen.classList.remove('hidden');
  }, 500);
});