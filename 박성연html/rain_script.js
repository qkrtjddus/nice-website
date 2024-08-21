const canvas = document.getElementById('rainCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const rainDrops = [];

function createRainDrop() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const length = Math.random() * 20 + 10;
    const speed = Math.random() * 5 + 2;
    
    rainDrops.push({x, y, length, speed});
}

function drawRainDrop(drop) {
    ctx.beginPath();
    ctx.moveTo(drop.x, drop.y);
    ctx.lineTo(drop.x, drop.y + drop.length);
    ctx.strokeStyle = 'rgba(174,194,224,0.5)';
    ctx.lineWidth = 1;
    ctx.lineCap = 'round';
    ctx.stroke();
}

function updateRainDrop(drop) {
    drop.y += drop.speed;
    if (drop.y > canvas.height) {
        drop.y = -drop.length;
        drop.x = Math.random() * canvas.width;
    }
}

function animateRain() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const drop of rainDrops) {
        drawRainDrop(drop);
        updateRainDrop(drop);
    }
    requestAnimationFrame(animateRain);
}

// 빗방울을 충분히 많이 생성하여 전체 화면에 비가 내리도록 설정
for (let i = 0; i < 500; i++) {
    createRainDrop();
}

animateRain();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
