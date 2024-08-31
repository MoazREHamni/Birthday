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
