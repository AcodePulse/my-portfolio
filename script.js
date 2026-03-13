// Function for Dark/Light Mode
const themeToggle = document.getElementById('theme-toggle-btn');
const body = document.body;
const themeIcon = document.getElementById('theme-icon');

themeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    
    // Update the icon based on the theme
    if (body.classList.contains('dark-mode')) {
        themeIcon.textContent = '🌙';
    } else {
        themeIcon.textContent = '💡';
    }
});

// Mobile Menu Toggle Logic
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Simple animation for burger button (optional)
    menuBtn.classList.toggle('open');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Animation for Language Progress Bars on Scroll
const observerOptions = {
    threshold: 0.2 
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const progressBars = entry.target.querySelectorAll('.progress');
        
        if (entry.isIntersecting) {
            
            progressBars.forEach(bar => {
                bar.style.width = bar.getAttribute('data-width');
            });
        } else {
            
            progressBars.forEach(bar => {
                bar.style.width = '0';
            });
        }
    });
}, observerOptions);

const languagesContainer = document.querySelector('.languages-container');
if (languagesContainer) {
    observer.observe(languagesContainer);
}