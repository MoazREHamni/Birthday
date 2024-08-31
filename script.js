document.getElementById('birthdayForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent the form from submitting

    const name = document.getElementById('name').value;

    // Hide the form
    document.getElementById('form-container').classList.add('hidden');

    // Create the message with animation
    const message = `Happy Birthday, ${name}!`;
    const messageContainer = document.getElementById('birthdayMessage');
    
    message.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.classList.add('animated-letter');
        span.style.animationDelay = `${index * 0.2}s`;  // Slower reveal
        messageContainer.appendChild(span);
    });

    // Show the message
    messageContainer.classList.remove('hidden');
    messageContainer.style.opacity = 1;

    // Trigger the confetti
    startConfetti();
});

function startConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    const ctx = canvas.getContext('2d');
    const confetti = [];
    const colors = ['#ff0a54', '#ff477e', '#ff85a1', '#fbb1bd', '#f9bec7'];
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    function ConfettiParticle() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height - canvas.height;
        this.radius = Math.random() * 6 + 4;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.density = Math.random() * canvas.height / 10;
        this.velocityX = Math.random() * 2 - 1;  // Slower horizontal speed
        this.velocityY = Math.random() * 3 + 2;  // Slower vertical speed
    }

    function updateConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confetti.forEach((particle, index) => {
            particle.y += particle.velocityY;
            particle.x += particle.velocityX;
            if (particle.y > canvas.height) {
                confetti[index] = new ConfettiParticle(); // Reset particle
            }
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2, false);
            ctx.fillStyle = particle.color;
            ctx.fill();
        });
        requestAnimationFrame(updateConfetti);
    }

    function initConfetti() {
        for (let i = 0; i < 150; i++) {
            confetti.push(new ConfettiParticle());
        }
        updateConfetti();
    }

    initConfetti();
                }
