document.addEventListener('DOMContentLoaded', () => {

  // 1. Random Lightning Generator
  const lightningOverlay = document.getElementById('lightning-overlay');

  function triggerLightning() {
    // Random interval between 4 and 12 seconds
    const randomTime = Math.random() * 8000 + 4000;

    setTimeout(() => {
      if (lightningOverlay) {
        lightningOverlay.classList.add('flash-active');
        
        setTimeout(() => {
          lightningOverlay.classList.remove('flash-active');
        }, 600);
      }

      triggerLightning();
    }, randomTime);
  }

  triggerLightning();

  // 2. Storm Ambient Audio Toggle
  const audioBtn = document.getElementById('audio-toggle');
  const stormAudio = document.getElementById('storm-audio');
  let isPlaying = false;

  if (audioBtn && stormAudio) {
    audioBtn.addEventListener('click', () => {
      if (!isPlaying) {
        stormAudio.play().catch(e => console.log("Audio play blocked by browser:", e));
        audioBtn.textContent = '🔇';
        isPlaying = true;
      } else {
        stormAudio.pause();
        audioBtn.textContent = '🔊';
        isPlaying = false;
      }
    });
  }

  // 3. Pirate Secret Easter Egg (Type 'pirate' on keyboard)
  let keysPressed = [];
  const secretCode = 'pirate';

  window.addEventListener('keyup', (e) => {
    keysPressed.push(e.key.toLowerCase());
    keysPressed = keysPressed.slice(-secretCode.length);

    if (keysPressed.join('') === secretCode) {
      alert('☠️ You discovered the Abyss Secret! Welcome aboard, matey!');
    }
  });

});
