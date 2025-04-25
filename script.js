document.querySelector('a-scene').addEventListener('targetFound', () => {
    document.querySelector('#video').play();
  });
  
  document.querySelector('a-scene').addEventListener('targetLost', () => {
    document.querySelector('#video').pause();
  });