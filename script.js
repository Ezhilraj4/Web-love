// Initialize Scroll Animations
AOS.init({
    duration: 1000,
    once: false
});

// Game Logic
const reasons = [
    "Your smile 😊", "Your kindness ✨", "Our long talks 📞",
    "How you care ❤️", "Your silliness 🤪", "Your support 🤝",
    "Your eyes 👁️", "The way you love me 🥰", "Just being YOU! 💖"
];

const board = document.getElementById('game-board');
const display = document.getElementById('reason-display');

reasons.forEach((reason) => {
    const btn = document.createElement('button');
    btn.className = 'heart-btn';
    btn.innerHTML = '❤️';
    btn.onclick = () => {
        display.innerText = reason;
        btn.style.background = '#ffcad4';
        btn.innerHTML = '💖';
    };
    board.appendChild(btn);
});

// Simple Slideshow logic (optional)
// Neenga unga photos link-ai inge mathikalaam
