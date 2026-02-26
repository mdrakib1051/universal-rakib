function kickBall() {
    const ball = document.getElementById('ball');
    const card = document.getElementById('card');

    // 1. Kick the ball to goal
    ball.classList.add('kicked');

    // 2. Wait for goal, then celebrate and exit
    setTimeout(() => {
        // Goal Celebration (Simple logic)
        document.body.style.backgroundColor = "#1b4d2e"; // Flash green
        
        // 3. Move ball down and animate out
        setTimeout(() => {
            ball.classList.remove('kicked');
            ball.classList.add('ball-exit');
            
            // 4. Open the Premium Card
            card.classList.add('show');
        }, 600);
        
    }, 600);
}
