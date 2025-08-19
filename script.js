// Smooth cycling adjectives in hero section
const words = ["Techie", "Builder", "Cybernaut", "Dreamer", "Napster"];
let index = 0;
const changingWord = document.getElementById("changing-word");

function changeWord() {
    changingWord.style.opacity = 0;
    setTimeout(() => {
        changingWord.textContent = words[index];
        changingWord.style.opacity = 1;
        index = (index + 1) % words.length;
    }, 500);
}

changingWord.style.opacity = 1;
setInterval(changeWord, 2000);

// Navbar active link functionality
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const offset = 100;
        const topPos = target.offsetTop - offset;
        window.scrollTo({
            top: topPos,
            behavior: 'smooth'
        });
    });
});

// Particles.js configuration
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 50, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#00aaff" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5, "random": true },
        "size": { "value": 3, "random": true },
        "line_linked": { "enable": true, "distance": 150, "color": "#00aaff", "opacity": 0.4, "width": 1 },
        "move": { "enable": true, "speed": 2, "out_mode": "out" }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" } },
        "modes": { "repulse": { "distance": 100 }, "push": { "particles_nb": 4 } }
    },
    "retina_detect": true
});

// Animate section headings on scroll
// Animate section headings on scroll, both up and down
// Animate section headings and skill headings on scroll
document.addEventListener('DOMContentLoaded', () => {
    // Select both section headings and skill headings
    const headings = document.querySelectorAll('section h2, .skill-category h3');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('visible');   // animate in
            } else {
                entry.target.classList.remove('visible'); // reset when out of view
            }
        });
    }, { threshold: 0.2 }); // trigger when 20% visible

    headings.forEach(h => observer.observe(h));
});

document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.skill');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                // Stagger animation
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, Array.from(skills).indexOf(entry.target) * 50);
                observer.unobserve(entry.target); // optional: animate only once
            }
        });
    }, { threshold: 0.2 });

    skills.forEach(skill => observer.observe(skill));
});

document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.skill');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const el = entry.target;
            if (entry.isIntersecting) {
                el.classList.add('visible'); // animate in
            } else {
                el.classList.remove('visible'); // animate out when scrolling up
            }
        });
    }, { threshold: 0.2 }); // trigger when 20% visible

    skills.forEach(skill => observer.observe(skill));
});

document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-container .card');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('visible'); // Animate in
            } else {
                entry.target.classList.remove('visible'); // Animate out when scrolling away
            }
        });
    }, { threshold: 0.2 });

    projectCards.forEach(card => observer.observe(card));
});

document.addEventListener('DOMContentLoaded', () => {
    const aboutCards = document.querySelectorAll('.about-card');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting && !entry.target.classList.contains('visible')) {
                // Animate only when scrolling down into view
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, Array.from(aboutCards).indexOf(entry.target) * 100);
            } else if (!entry.isIntersecting && entry.target.classList.contains('visible')) {
                // Remove the class only when scrolling up past it
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.2 });

    aboutCards.forEach(card => observer.observe(card));
});

document.addEventListener('DOMContentLoaded', () => {
    const achievementCards = document.querySelectorAll('.achievement-card');
    const achievementHeading = document.querySelector('#achievements h2');

    // Animate heading every time in view
    const headingObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.2 });
    headingObserver.observe(achievementHeading);

    // Animate achievement cards individually every time in view
    const cardObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const el = entry.target;
            if(entry.isIntersecting) {
                // staggered animation
                setTimeout(() => {
                    el.classList.add('visible');
                }, Array.from(achievementCards).indexOf(el) * 100);
            } else {
                el.classList.remove('visible'); // reset when scrolling away
            }
        });
    }, { threshold: 0.2 });

    achievementCards.forEach(card => cardObserver.observe(card));
});

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    // Animate burger lines
    burger.classList.toggle('toggle');
});

const backToTopBtn = document.getElementById("backToTop");

// Show button when user scrolls down
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "flex";
  } else {
    backToTopBtn.style.display = "none";
  }
});

// Scroll smoothly to top when clicked
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// ===== Scroll Spy (About, Skills, Projects, Achievements) =====
// Select the progress bar
const progressBar = document.querySelector('.spy-progress');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;

  progressBar.style.height = scrollPercent + "%";
});

const circle = document.getElementById("cursorCircle");

let mouseX = 0, mouseY = 0;
let circleX = 0, circleY = 0;

// This matches your dot.png hotspot (8,8)
const hotspotX = 16;
const hotspotY = 16;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX + hotspotX;
  mouseY = e.clientY + hotspotY;
});

function animate() {
  // Smooth interpolation
  circleX += (mouseX - circleX) * 0.1;
  circleY += (mouseY - circleY) * 0.1;

  circle.style.left = circleX + "px";
  circle.style.top = circleY + "px";

  requestAnimationFrame(animate);
}
animate();


































