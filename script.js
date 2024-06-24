document.getElementById('magicButton').addEventListener('click', function() {
    const box = document.getElementById('animatedBox');
    const image = document.getElementById('flyingImage');
    const music = document.getElementById('backgroundMusic');
    const presentationText = document.getElementById('presentationText');

    box.style.animation = 'boxAnimation 2s infinite';
    image.classList.remove('hidden');
    music.play();

    image.addEventListener('animationend', function() {
        presentationText.classList.remove('hidden');
    });
});
