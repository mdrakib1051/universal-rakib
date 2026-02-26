let startY, startX;
let attempts = 0;
const ball = document.getElementById('ball');
const card = document.getElementById('premiumCard');
const msg = document.getElementById('msg');

ball.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY;
    startX = e.touches[0].clientX;
});

ball.addEventListener('touchend', (e) => {
    let endY = e.changedTouches[0].clientY;
    let endX = e.changedTouches[0].clientX;
    
    if (startY > endY) { // Upward swipe
        handleShoot(startX - endX);
    }
});

function handleShoot(deviation) {
    attempts++;
    ball.style.transition = "all 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)";
    
    if (attempts < 4) { 
        // MISS: Ball hits the bar or goes wide
        ball.style.transform = `translate(calc(-50% - ${deviation}px), -400px) scale(0.6)`;
        msg.innerText = "So Close! Try Harder (" + attempts + "/4)";
        
        setTimeout(() => {
            ball.style.transform = "translateX(-50%) scale(1)"; // Reset ball
        }, 1000);
    } else {
        // GOAL: Success on 4th or 5th attempt
        ball.style.transform = `translate(-50%, -480px) scale(0.4)`;
        msg.innerText = "GOAL!!!";
        document.getElementById('goalPost').style.borderColor = "gold";

        setTimeout(() => {
            // Ball animation to bottom
            ball.style.transition = "all 0.8s ease-in";
            ball.style.transform = "translate(-50%, 500px) scale(0)";
            
            // Show Premium Card
            setTimeout(() => {
                card.classList.add('active');
            }, 500);
        }, 800);
    }
}
