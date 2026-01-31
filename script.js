// Initialize Animations
AOS.init({ duration: 1200 });

// Music Control
function toggleMusic() {
    const audio = document.getElementById('bgMusic');
    const btn = document.querySelector('.music-control');
    if (audio.paused) {
        audio.play();
        btn.innerText = "⏸️ Pause Music";
    } else {
        audio.pause();
        btn.innerText = "🎵 Play Music";
    }
}

// Game Reasons
const data = [
    "Your smile 😊", "Your kindness ✨", "Our memories 📸",
    "Your support 🤝", "Your voice 🎙️", "How you care ❤️",
    "Your eyes 👁️", "The way you laugh 😂", "Simply being YOU! 💖"
];

const board = document.getElementById('game-board');
const msg = document.getElementById('game-msg');

data.forEach((text) => {
    const b = document.createElement('button');
    b.className = 'h-btn';
    b.innerText = '❤️';
    b.onclick = () => {
        msg.innerText = text;
        b.style.transform = 'scale(0.9)';
        b.innerText = '💖';
        b.style.background = '#ffe5ec';
    };
    board.appendChild(b);
});

// Simple Background Heart Generator
function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'absolute';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    heart.style.opacity = Math.random();
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    document.getElementById('hearts-bg').appendChild(heart);
    
    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 300);
