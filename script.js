// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu functionality
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
});

// Terminal typing animation
const commands = [
    'python vuln_scanner.py --target example.com',
    'burp-suite --scan web-app',
    'nmap -sV -sC target-network',
    'metasploit -x "use exploit/multi/handler"'
];

let currentCommand = 0;
let currentChar = 0;
let isDeleting = false;

function typeCommand() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;
    
    const command = commands[currentCommand];
    
    if (!isDeleting) {
        typingElement.textContent = command.substring(0, currentChar);
        currentChar++;
        
        if (currentChar > command.length) {
            isDeleting = true;
            setTimeout(typeCommand, 2000); // Wait before deleting
            return;
        }
    } else {
        typingElement.textContent = command.substring(0, currentChar);
        currentChar--;
        
        if (currentChar < 0) {
            isDeleting = false;
            currentCommand = (currentCommand + 1) % commands.length;
            setTimeout(typeCommand, 500); // Wait before typing next command
            return;
        }
    }
    
    setTimeout(typeCommand, isDeleting ? 50 : 100);
}

// Start typing animation when page loads
window.addEventListener('load', () => {
    setTimeout(typeCommand, 1000);
});

// Active navigation link highlighting
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// Contact form handling
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Simple form validation
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Simulate form submission
    alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon.`);
    contactForm.reset();
});

// Intersection Observer for animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
window.addEventListener('load', () => {
    const animatedElements = document.querySelectorAll('.skill-category, .project-card, .stat');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        nav.style.background = 'rgba(10, 10, 10, 0.95)';
    }
});

// Add some cybersecurity-themed easter eggs
document.addEventListener('keydown', function(e) {
    // Konami code easter egg
    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    if (!window.konamiSequence) window.konamiSequence = [];
    
    window.konamiSequence.push(e.keyCode);
    window.konamiSequence = window.konamiSequence.slice(-10);
    
    if (window.konamiSequence.join('') === konamiCode.join('')) {
        console.log('🔒 ACCESS GRANTED: Welcome to the matrix, fellow hacker!');
        document.body.style.filter = 'hue-rotate(120deg)';
        setTimeout(() => {
            document.body.style.filter = 'none';
        }, 3000);
    }
});

// Console welcome message
console.log(`
🔒 CYBERSECURITY PORTFOLIO SYSTEM v2.0
═══════════════════════════════════════
Status: SECURE
Encryption: AES-256
Last Scan: ${new Date().toLocaleString()}
═══════════════════════════════════════
Unauthorized access is prohibited.
This system is monitored.
═══════════════════════════════════════
`);

// Particle effect for hero section (optional enhancement)
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(0, 255, 157, 0.5);
            border-radius: 50%;
            pointer-events: none;
            animation: float ${3 + Math.random() * 4}s infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 2}s;
        `;
        hero.appendChild(particle);
    }
}

// Add floating particle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.5;
        }
        50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Initialize particles
window.addEventListener('load', createParticles);