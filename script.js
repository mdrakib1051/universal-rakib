let startX, startY, userName = "";
let attempts = 0;
const ball = document.getElementById('ball');
const card = document.getElementById('premiumCard');

function startGame() {
    userName = document.getElementById('userName').value;
    if (userName.trim() !== "") {
        document.getElementById('display-name').innerText = "প্রিয় " + userName + ",";
        document.getElementById('name-screen').style.display = "none";
    } else {
        alert("দয়া করে নাম লিখুন!");
    }
}

ball.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
});

ball.addEventListener('touchend', (e) => {
    let endX = e.changedTouches[0].clientX;
    let endY = e.changedTouches[0].clientY;
    
    let diffX = endX - startX;
    let diffY = startY - endY;

    if (diffY > 50) { // Valid upward swipe
        shootBall(diffX);
    }
});

function shootBall(xMove) {
    attempts++;
    // Physics: Ball follows swipe direction
    ball.style.transition = "all 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.1)";
    
    if (attempts < 4) {
        // MISS logic: Move slightly away from center
        ball.style.transform = `translate(calc(-50% + ${xMove}px), -350px) scale(0.6)`;
        setTimeout(() => {
            ball.style.transform = "translateX(-50%) scale(1)";
        }, 1000);
    } else {
        // GOAL: Straight into the net
        ball.style.transform = `translate(calc(-50% + ${xMove/4}px), -450px) scale(0.4)`;
        document.getElementById('goalPost').style.borderColor = "gold";
        
        setTimeout(() => {
            // Ball falls down and vanishes
            ball.style.transition = "all 1s ease-in";
            ball.style.transform = `translate(-50%, 600px) scale(0)`;
            
            // Show Letter with Delay
            setTimeout(() => {
                card.classList.add('active');
            }, 600);
        }, 700);
    }
}

function closeCard() {
    card.classList.remove('active');
    attempts = 0; // Reset for another try
    ball.style.transform = "translateX(-50%) scale(1)";
}
