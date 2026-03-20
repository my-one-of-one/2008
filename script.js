const pixelLetter = document.getElementById('pixel-letter');
const introScreen = document.getElementById('intro-screen');
const letterScreen = document.getElementById('letter-screen');
const nextButton = document.getElementById('next-button');
const letterScreen2 = document.getElementById('letter-screen-2');

// Mostra la prima lettera
pixelLetter.addEventListener('click', () => {
  introScreen.classList.add('hidden');
  setTimeout(() => {
    letterScreen.classList.remove('hidden');
  }, 500);
});

// Passaggio alla seconda schermata (P.S.)
nextButton.addEventListener('click', () => {
  letterScreen.classList.add('hidden');
  letterScreen2.classList.remove('hidden');
});