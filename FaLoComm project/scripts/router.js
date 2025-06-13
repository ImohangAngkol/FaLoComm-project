// Simple Client-Side Router
function initRouter() {
    // Handle all clicks on links with data-route attribute
    document.addEventListener('click', function(e) {
        const routeLink = e.target.closest('[data-route]');
        if (routeLink) {
            e.preventDefault();
            const route = routeLink.getAttribute('data-route');
            navigateTo(route);
        }
    });
    
    // Handle browser back/forward
    window.addEventListener('popstate', function() {
        const route = window.location.hash.substring(1) || 'home';
        loadRoute(route);
    });
    
    // Initial route
    const initialRoute = window.location.hash.substring(1) || 'home';
    navigateTo(initialRoute, true);
}

function navigateTo(route, replace = false) {
    // Update URL without reload
    if (replace) {
        window.history.replaceState({}, '', `#${route}`);
    } else {
        window.history.pushState({}, '', `#${route}`);
    }
    
    // Load the route
    loadRoute(route);
}

function loadRoute(route) {
    const mainContent = document.getElementById('main-content');
    
    // Simple routing logic
    switch(route) {
        case 'home':
            mainContent.innerHTML = `
                <div class="welcome-message">
                    <h1>Welcome to MSU-IIT FaLoComm</h1>
                    <p>Connecting faculty with local communities for collaborative projects</p>
                </div>
            `;
            break;
            
        case 'about':
            mainContent.innerHTML = `
                <div class="card">
                    <h1>About FaLoComm</h1>
                    <p>The Faculty and Local Community Connection platform facilitates collaboration between MSU-IIT faculty members and local communities.</p>
                </div>
            `;
            break;
            
        case 'services':
            mainContent.innerHTML = `
                <div class="card">
                    <h1>Our Services</h1>
                    <ul>
                        <li>Community Project Matching</li>
                        <li>Expertise Directory</li>
                        <li>Collaboration Tools</li>
                        <li>Impact Measurement</li>
                    </ul>
                </div>
            `;
            break;
            
        case 'contact':
            mainContent.innerHTML = `
                <div class="card">
                    <h1>Contact Us</h1>
                    <p>Email: falocomm@msuiit.edu.ph</p>
                    <p>Phone: (063) 221-4050</p>
                </div>
            `;
            break;
            
        case 'profile':
            mainContent.innerHTML = `
                <div class="card">
                    <h1>Your Profile</h1>
                    <p>Profile information will be displayed here.</p>
                </div>
            `;
            break;
            
        case 'settings':
            mainContent.innerHTML = `
                <div class="card">
                    <h1>Account Settings</h1>
                    <p>Settings will be displayed here.</p>
                </div>
            `;
            break;
            
        default:
            mainContent.innerHTML = `
                <div class="card">
                    <h1>Page Not Found</h1>
                    <p>The requested page does not exist.</p>
                </div>
            `;
    }
}