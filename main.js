// main.js
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
    behavior: 'smooth'
    });
    });
    });
    // Dynamic header
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
    header.classList.add('scrolled');
    } else {
    header.classList.remove('scrolled');
    }
    });
    // Simple form validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
    alert('Please fill in all fields');
    return;
    }
    if (!isValidEmail(email)) {
    alert('Please enter a valid email address');
    return;
    }
    // If validation passes, you would typically send the form data to a server here
    alert('Form submitted successfully!');
    contactForm.reset();
    });
    }
    // Email validation helper function
    function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]
    {1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
    }
    // Feature hover effect
    const features = document.querySelectorAll('.feature');
    features.forEach(feature => {
    feature.addEventListener('mouseover', () => {
    feature.style.transform = 'scale(1.05)';
    });
    feature.addEventListener('mouseout', () => {
    feature.style.transform = 'scale(1)';
    });
    });
    });
