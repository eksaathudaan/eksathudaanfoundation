// Counter animation
function animateCounter(id, target) {
    const element = document.getElementById(id);
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString() + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 20);
}

// Start counters when page loads
window.addEventListener('load', () => {
    animateCounter('children-count', 5000);
    animateCounter('communities-count', 20);
    animateCounter('volunteers-count', 150);
    animateCounter('projects-count', 45);
});

// Mobile menu toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// Modal functions
function showLoginModal() {
    document.getElementById('login-modal').classList.remove('hidden');
    document.getElementById('login-modal').classList.add('flex');
}

function hideLoginModal() {
    document.getElementById('login-modal').classList.add('hidden');
    document.getElementById('login-modal').classList.remove('flex');
}

function showUserLogin() {
    hideLoginModal();
    document.getElementById('user-login-modal').classList.remove('hidden');
    document.getElementById('user-login-modal').classList.add('flex');
}

function hideUserLogin() {
    document.getElementById('user-login-modal').classList.add('hidden');
    document.getElementById('user-login-modal').classList.remove('flex');
}

function showAdminLogin() {
    hideLoginModal();
    document.getElementById('admin-login-modal').classList.remove('hidden');
    document.getElementById('admin-login-modal').classList.add('flex');
}

function hideAdminLogin() {
    document.getElementById('admin-login-modal').classList.add('hidden');
    document.getElementById('admin-login-modal').classList.remove('flex');
}

function showDonateModal() {
    document.getElementById('donate-modal').classList.remove('hidden');
    document.getElementById('donate-modal').classList.add('flex');
}

function hideDonateModal() {
    document.getElementById('donate-modal').classList.add('hidden');
    document.getElementById('donate-modal').classList.remove('flex');
}

function showVolunteerModal() {
    document.getElementById('volunteer-modal').classList.remove('hidden');
    document.getElementById('volunteer-modal').classList.add('flex');
}

function hideVolunteerModal() {
    document.getElementById('volunteer-modal').classList.add('hidden');
    document.getElementById('volunteer-modal').classList.remove('flex');
}

// Login functions
function loginWithGoogle() {
    alert('Google login integration would be implemented here. This would redirect to Google OAuth.');
    hideUserLogin();
}

function loginWithPhone() {
    alert('Phone login integration would be implemented here. This would show OTP verification.');
    hideUserLogin();
}

function adminLogin(event) {
    event.preventDefault();
    const username = document.getElementById('admin-username').value;
    const password = document.getElementById('admin-password').value;
    
    if (username === 'admin' && password === 'admin123') {
        alert('Admin login successful! This would redirect to the admin dashboard.');
        hideAdminLogin();
    } else {
        alert('Invalid credentials. Try username: admin, password: admin123');
    }
}

// Newsletter subscription
function subscribeNewsletter() {
    const email = document.getElementById('newsletter-email').value;
    if (email) {
        alert(`Thank you for subscribing with ${email}! You'll receive our latest updates.`);
        document.getElementById('newsletter-email').value = '';
    } else {
        alert('Please enter a valid email address.');
    }
}

// Volunteer form submission
function submitVolunteerForm(event) {
    event.preventDefault();
    const name = document.getElementById('volunteer-name').value;
    const email = document.getElementById('volunteer-email').value;
    const phone = document.getElementById('volunteer-phone').value;
    const interest = document.getElementById('volunteer-interest').value;
    
    alert(`Thank you ${name}! Your volunteer application has been submitted. We'll contact you at ${email} soon.`);
    hideVolunteerModal();
    
    // Reset form
    document.getElementById('volunteer-name').value = '';
    document.getElementById('volunteer-email').value = '';
    document.getElementById('volunteer-phone').value = '';
    document.getElementById('volunteer-interest').value = '';
}

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