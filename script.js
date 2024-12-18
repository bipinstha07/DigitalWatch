
function updateTime() {
    const now = new Date();
    const timeDisplay = document.getElementById('time');
    const dateDisplay = document.getElementById('date');
    const secondsBar = document.querySelector('.seconds-bar');
    const minutesBar = document.querySelector('.minutes-bar');
    const hoursBar = document.querySelector('.hours-bar');
    const particleContainer = document.getElementById('particle-container');

    // Time formatting
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    // Date formatting
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const dayName = days[now.getDay()];
    const monthName = months[now.getMonth()];
    const dateString = `${dayName}, ${monthName} ${now.getDate()}`;

    // Update display
    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
    dateDisplay.textContent = dateString;

    // Update progress bars
    secondsBar.style.width = `${(now.getSeconds() / 60) * 100}%`;
    minutesBar.style.width = `${(now.getMinutes() / 60) * 100}%`;
    hoursBar.style.width = `${(now.getHours() / 24) * 100}%`;

    // Generate colorful particles
    particleContainer.innerHTML = '';
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.setProperty('--move-x', Math.random() * 2 - 1);
        particle.style.setProperty('--move-y', Math.random() * 2 - 1);
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 3}s`;
        particleContainer.appendChild(particle);
    }
}

// Interactive 3D rotation
const colorfulWatch = document.querySelector('.colorful-watch');
colorfulWatch.addEventListener('mousemove', (e) => {
    const rect = colorfulWatch.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const rotateX = -(y - rect.height/2) / 20;
    const rotateY = (x - rect.width/2) / 20;
    
    colorfulWatch.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
});

colorfulWatch.addEventListener('mouseleave', () => {
    colorfulWatch.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
});

// Initial and recurring updates
updateTime();
setInterval(updateTime, 1000);
