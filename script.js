document.getElementById('magicButton').addEventListener('click', function() {
    const box = document.getElementById('animatedBox');
    const image = document.getElementById('flyingImage');
    const music = document.getElementById('backgroundMusic');

    box.style.animation = 'boxAnimation 2s infinite';
    image.classList.remove('hidden');
    music.play();
});
