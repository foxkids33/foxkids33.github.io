const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});

class Firefly {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.velocity = {
            x: (Math.random() - 0.5) * 2,
            y: (Math.random() - 0.5) * 2
        };
        this.alpha = 1;
        this.maxAlpha = 0.8 + Math.random() * 0.2;
        this.minAlpha = 0.1 + Math.random() * 0.3;
        this.alphaVelocity = 0.005;
    }

    draw() {
        c.save();
        c.globalAlpha = this.alpha;
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = 'yellow';
        c.shadowColor = 'yellow';
        c.shadowBlur = 15;
        c.fill();
        c.closePath();
        c.restore();
    }

    update() {
        this.draw();

    // Move firefly
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        // Boundary checks
        if (this.x <= 0 || this.x >= canvas.width) {
            this.velocity.x = -this.velocity.x;
        }
        if (this.y <= 0 || this.y >= canvas.height) {
            this.velocity.y = -this.velocity.y;
        }

        // Change alpha for blinking effect
        if (this.alpha + this.alphaVelocity > this.maxAlpha || this.alpha + this.alphaVelocity < this.minAlpha) {
            this.alphaVelocity = -this.alphaVelocity;
        }
        this.alpha += this.alphaVelocity;
        }
}

let fireflies = [];

function init() {
    fireflies = [];
    for (let i = 0; i < 50; i++) {
        const radius = Math.random() * 5 + 2;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        fireflies.push(new Firefly(x, y, radius));
    }
}

function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = 'rgba(82, 78, 183, 0.25)'; // Slight motion trail effect
    c.fillRect(0, 0, canvas.width, canvas.height);

    fireflies.forEach(firefly => {
        firefly.update();
    });
}

init();
animate();
