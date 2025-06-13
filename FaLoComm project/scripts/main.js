// Main Application Script
document.addEventListener('DOMContentLoaded', function() {
    // Load navbar
    loadNavbar();
    
    // Initialize router
    initRouter();
    
    // Check if user is logged in (simulated)
    checkAuthStatus();
});

function loadNavbar() {
    const navbarContainer = document.getElementById('navbar-container');
    navbarContainer.innerHTML = `
        <nav class="navbar">
            <div class="container">
                <a href="#" class="logo" data-route="home">
                    <img src="https://www.msuiit.edu.ph/ias/wp-content/uploads/2022/04/cropped-msuiit-logo-1-32x32.png" alt="MSU-IIT Logo">
                    <span>FaLoComm</span>
                </a>
                <div class="nav-links" id="navLinks">
                    <a href="#" class="nav-link" data-route="home">Home</a>
                    <a href="#" class="nav-link" data-route="about">About</a>
                    <a href="#" class="nav-link" data-route="services">Services</a>
                    <a href="#" class="nav-link" data-route="contact">Contact</a>
                    <div class="auth-buttons" id="authButtons">
                        <button id="loginBtn" class="btn btn-outline">Log In</button>
                        <button id="signupBtn" class="btn btn-primary">Sign Up</button>
                    </div>
                    <div class="user-dropdown" id="userDropdown">
                        <button class="user-profile">
                            <img src="https://via.placeholder.com/40" alt="User" id="userAvatar">
                            <span id="usernameDisplay">User</span>
                            <i class="fas fa-chevron-down"></i>
                        </button>
                        <div class="dropdown-menu">
                            <a href="#" data-route="profile"><i class="fas fa-user"></i> Profile</a>
                            <a href="#" data-route="settings"><i class="fas fa-cog"></i> Settings</a>
                            <a href="#" id="logoutBtn"><i class="fas fa-sign-out-alt"></i> Log Out</a>
                        </div>
                    </div>
                </div>
                <button class="hamburger" id="hamburger">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
        </nav>
    `;
    
    // Hamburger menu toggle for mobile
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
}

function checkAuthStatus() {
    // Simulated authentication check
    const isLoggedIn = localStorage.getItem('falocomm_isLoggedIn') === 'true';
    
    const authButtons = document.getElementById('authButtons');
    const userDropdown = document.getElementById('userDropdown');
    
    if (authButtons && userDropdown) {
        if (isLoggedIn) {
            authButtons.style.display = 'none';
            userDropdown.style.display = 'block';
            
            // Set user data if available
            const userData = JSON.parse(localStorage.getItem('falocomm_userData') || '{}');
            if (userData.username) {
                document.getElementById('usernameDisplay').textContent = userData.username;
            }
            if (userData.avatar) {
                document.getElementById('userAvatar').src = userData.avatar;
            }
        } else {
            authButtons.style.display = 'flex';
            userDropdown.style.display = 'none';
        }
    }
}