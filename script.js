// JavaScript per far apparire il testo della sorpresa dopo un po' di tempo
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('surpriseText').style.display = 'block';
  }, 2000); // Mostra il testo sorpresa dopo 2 secondi
});
