// Authentication Script
document.addEventListener('DOMContentLoaded', function() {
    // Load auth modals
    loadAuthModals();
    
    // Set up event listeners
    setupAuthEventListeners();
});

function loadAuthModals() {
    const authModals = document.getElementById('auth-modals');
    authModals.innerHTML = `
        <!-- Login Modal -->
        <div class="auth-modal" id="loginModal">
            <div class="modal-content">
                <div class="modal-header">
                    <h2>Log In</h2>
                    <button class="close-btn" id="closeLogin">&times;</button>
                </div>
                <div class="modal-body">
                    <form id="loginForm">
                        <div class="form-group">
                            <label for="loginEmail">Email</label>
                            <input type="email" id="loginEmail" required>
                            <div class="error-message" id="loginEmailError"></div>
                        </div>
                        <div class="form-group">
                            <label for="loginPassword">Password</label>
                            <input type="password" id="loginPassword" required>
                            <div class="error-message" id="loginPasswordError"></div>
                        </div>
                        <button type="submit" class="auth-submit">Log In</button>
                    </form>
                    <div class="auth-toggle">
                        Don't have an account? <a href="#" id="showSignup">Sign Up</a>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Signup Modal -->
        <div class="auth-modal" id="signupModal">
            <div class="modal-content">
                <div class="modal-header">
                    <h2>Sign Up</h2>
                    <button class="close-btn" id="closeSignup">&times;</button>
                </div>
                <div class="modal-body">
                    <form id="signupForm">
                        <div class="form-group">
                            <label for="signupName">Full Name</label>
                            <input type="text" id="signupName" required>
                            <div class="error-message" id="signupNameError"></div>
                        </div>
                        <div class="form-group">
                            <label for="signupEmail">Email</label>
                            <input type="email" id="signupEmail" required>
                            <div class="error-message" id="signupEmailError"></div>
                        </div>
                        <div class="form-group">
                            <label for="signupPassword">Password</label>
                            <input type="password" id="signupPassword" required>
                            <div class="error-message" id="signupPasswordError"></div>
                        </div>
                        <div class="form-group">
                            <label for="signupConfirmPassword">Confirm Password</label>
                            <input type="password" id="signupConfirmPassword" required>
                            <div class="error-message" id="signupConfirmError"></div>
                        </div>
                        <button type="submit" class="auth-submit">Sign Up</button>
                    </form>
                    <div class="auth-toggle">
                        Already have an account? <a href="#" id="showLogin">Log In</a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function setupAuthEventListeners() {
    // Login button
    document.addEventListener('click', function(e) {
        if (e.target && e.target.id === 'loginBtn') {
            document.getElementById('loginModal').classList.add('active');
        }
    });
    
    // Signup button
    document.addEventListener('click', function(e) {
        if (e.target && e.target.id === 'signupBtn') {
            document.getElementById('signupModal').classList.add('active');
        }
    });
    
    // Close buttons
    document.getElementById('closeLogin')?.addEventListener('click', function() {
        document.getElementById('loginModal').classList.remove('active');
    });
    
    document.getElementById('closeSignup')?.addEventListener('click', function() {
        document.getElementById('signupModal').classList.remove('active');
    });
    
    // Toggle between login and signup
    document.getElementById('showSignup')?.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('loginModal').classList.remove('active');
        document.getElementById('signupModal').classList.add('active');
    });
    
    document.getElementById('showLogin')?.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('signupModal').classList.remove('active');
        document.getElementById('loginModal').classList.add('active');
    });
    
    // Logout button
    document.addEventListener('click', function(e) {
        if (e.target && e.target.id === 'logoutBtn') {
            e.preventDefault();
            logoutUser();
        }
    });
    
    // Form submissions
    document.getElementById('loginForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        loginUser();
    });
    
    document.getElementById('signupForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        registerUser();
    });
}

function loginUser() {
    // Simulated login
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Simple validation
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // In a real app, you would make an API call here
    localStorage.setItem('falocomm_isLoggedIn', 'true');
    localStorage.setItem('falocomm_userData', JSON.stringify({
        username: email.split('@')[0],
        email: email,
        avatar: 'https://via.placeholder.com/40'
    }));
    
    // Close modal and update UI
    document.getElementById('loginModal').classList.remove('active');
    checkAuthStatus();
    
    // Show welcome message
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <div class="dashboard">
            <div class="dashboard-header">
                <h1 class="dashboard-title">Welcome to FaLoComm</h1>
            </div>
            <div class="card">
                <h2 class="card-title">Recent Activities</h2>
                <p>You have no recent activities yet.</p>
            </div>
        </div>
    `;
}

function registerUser() {
    // Simulated registration
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;
    
    // Simple validation
    if (!name || !email || !password || !confirmPassword) {
        alert('Please fill in all fields');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    
    // In a real app, you would make an API call here
    localStorage.setItem('falocomm_isLoggedIn', 'true');
    localStorage.setItem('falocomm_userData', JSON.stringify({
        username: name,
        email: email,
        avatar: 'https://via.placeholder.com/40'
    }));
    
    // Close modal and update UI
    document.getElementById('signupModal').classList.remove('active');
    checkAuthStatus();
    
    // Show welcome message
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <div class="dashboard">
            <div class="dashboard-header">
                <h1 class="dashboard-title">Welcome to FaLoComm, ${name}</h1>
            </div>
            <div class="card">
                <h2 class="card-title">Getting Started</h2>
                <p>Complete your profile to start connecting with the community.</p>
            </div>
        </div>
    `;
}

function logoutUser() {
    // Clear authentication data
    localStorage.removeItem('falocomm_isLoggedIn');
    localStorage.removeItem('falocomm_userData');
    
    // Update UI
    checkAuthStatus();
    
    // Return to home page
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <div class="welcome-message">
            <h1>Welcome to MSU-IIT FaLoComm</h1>
            <p>Connecting faculty with local communities for collaborative projects</p>
        </div>
    `;
}