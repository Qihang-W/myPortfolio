const sound = new Howl({
    src: ['./audio/SmooveGroove.mp3', './audio/SmooveGroove.ogg'],
    html5: true, // Use HTML5 Audio for better performance  
  });

  const playButton = document.getElementById('play-btn');
  const player = document.querySelector('.player');

  let isPlaying = false; // Track whether music is playing

    // Auto-play on page load
  window.addEventListener('load', () => {
    sound.play();
    player.style.animation = 'spin 3s linear infinite'; // Start rotating the disc
    playButton.textContent = '⏸️'; // Change button to pause icon
    isPlaying = true;
  });

  playButton.addEventListener('click', () => {
    if (!isPlaying) {
      sound.play();
      player.style.animation = 'spin 3s linear infinite'; // Start rotating the disc
      playButton.textContent = '⏸️'; // Change button to pause icon
    } else {
      sound.pause();
      player.style.animation = 'none'; // Stop rotating the disc
      playButton.textContent = '▶️'; // Change button back to play icon
    }
    isPlaying = !isPlaying; // Toggle the playing state
  });

  document.getElementById('download-btn').addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = './files/QihangWang_CV.pdf'; 
    link.download = 'QihangWang_CV.pdf';    
    document.body.appendChild(link);   
    link.click();                     
    document.body.removeChild(link);  
  });