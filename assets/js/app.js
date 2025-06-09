// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check for image loading issues and handle them
    handleImageLoadingIssues();
    
    // Setup top menu functionality
    setupTopMenu();
    
    // Create bubbles for top menu
    createTopMenuBubbles();
    
    // Add dark mode toggle button to the DOM
    createDarkModeToggle();
    
    // Initialize the machine status
    fetchMachineStatus();
    
    // Set up form event listeners
    setupForms();
    
    // Set up navigation smooth scrolling
    setupSmoothScrolling();
    
    // Set up booking button event listener
    setupBookingButton();
    
    // Add animation to cards on scroll
    setupScrollAnimations();
    
    // Create bubbly background - with a slight delay to ensure DOM is ready
    setTimeout(createBubblyBackground, 100);
    
    // Add hero-specific bubbles
    createHeroBubbles();
});

/**
 * Checks for image loading issues and handles them
 */
function handleImageLoadingIssues() {
    // Get all images on the page
    const images = document.querySelectorAll('img');
    
    // Add error handlers to all images
    images.forEach(img => {
        img.onerror = function() {
            // Check if this is an SVG that failed to load
            if (img.src.endsWith('.svg')) {
                console.log(`SVG image failed to load: ${img.src}`);
                
                // Special handling for the logo
                if (img.classList.contains('logo') || img.id === 'main-logo') {
                    console.log('Attempting to fix logo loading...');
                    
                    // Try to fall back to an inline SVG
                    const inlineSvgLogo = `
                        <svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <style>
                                @keyframes float {
                                    0% { transform: translateY(0); }
                                    50% { transform: translateY(-5px); }
                                    100% { transform: translateY(0); }
                                }
                                
                                @keyframes water-wave {
                                    0% { transform: translateY(0); }
                                    50% { transform: translateY(-2px); }
                                    100% { transform: translateY(0); }
                                }
                                
                                .bubble-1 { animation: float 3s infinite ease-in-out; }
                                .bubble-2 { animation: float 4s infinite ease-in-out; }
                                .bubble-3 { animation: float 3.5s infinite ease-in-out; animation-delay: 0.5s; }
                                .water-wave-1 { animation: water-wave 3s infinite ease-in-out; }
                                .water-wave-2 { animation: water-wave 3s infinite ease-in-out; animation-delay: 0.5s; }
                            </style>
                            <circle cx="100" cy="100" r="90" fill="#E3F2FD" />
                            <rect x="40" y="35" width="120" height="130" rx="10" ry="10" fill="#FFFFFF" stroke="#2196F3" stroke-width="4" />
                            <rect x="40" y="35" width="120" height="30" rx="10" ry="10" fill="#BBDEFB" stroke="#2196F3" stroke-width="2" />
                            <circle cx="80" cy="50" r="8" fill="#E3F2FD" stroke="#2196F3" stroke-width="2" />
                            <circle cx="120" cy="50" r="8" fill="#E3F2FD" stroke="#2196F3" stroke-width="2" />
                            <circle cx="100" cy="115" r="45" fill="#E3F2FD" stroke="#2196F3" stroke-width="6" />
                            <circle cx="100" cy="115" r="40" fill="#BBDEFB" />
                            <path class="water-wave-1" d="M65 125 Q85 110, 100 125 Q115 140, 135 125" fill="none" stroke="#2196F3" stroke-width="3" stroke-linecap="round" />
                            <path class="water-wave-2" d="M65 110 Q85 95, 100 110 Q115 125, 135 110" fill="none" stroke="#2196F3" stroke-width="3" stroke-linecap="round" />
                            <circle class="bubble-1" cx="80" cy="100" r="8" fill="#FFFFFF" opacity="0.7" />
                            <circle class="bubble-2" cx="95" cy="90" r="6" fill="#FFFFFF" opacity="0.7" />
                            <circle class="bubble-3" cx="110" cy="105" r="10" fill="#FFFFFF" opacity="0.7" />
                            <circle cx="150" cy="115" r="8" fill="#E3F2FD" stroke="#2196F3" stroke-width="3" />
                            <path d="M75 90 Q100 75, 125 90" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.4" />
                        </svg>
                    `;
                    
                    // Create wrapper to hold the SVG
                    const wrapper = document.createElement('div');
                    wrapper.className = img.className;
                    wrapper.id = img.id;
                    wrapper.style.width = '100%';
                    wrapper.style.height = '100%';
                    wrapper.innerHTML = inlineSvgLogo;
                    
                    // Replace the img with the inline SVG
                    img.parentNode.replaceChild(wrapper, img);
                    return;
                }
                
                // Try to fall back to PNG version for other images
                const pngSrc = img.src.replace('.svg', '.png');
                console.log(`Trying PNG: ${pngSrc}`);
                img.src = pngSrc;
                
                // If PNG also fails, use a data URI as final fallback
                img.onerror = function() {
                    console.log('PNG also failed, using data URI fallback');
                    img.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSI5MCIgZmlsbD0iIzIxOTZGMyIvPjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iNzAiIGZpbGw9IiNCQkRFRkIiLz48L3N2Zz4=';
                    img.onerror = null; // Prevent infinite loop
                };
            }
        };
    });
}

/**
 * Creates subtle bubbles in the top menu
 */
function createTopMenuBubbles() {
    const topMenu = document.getElementById('top-menu');
    if (!topMenu) return;
    
    // Create 6 static bubbles with different sizes and positions
    const bubbleSizes = [40, 30, 25, 35, 28, 32];
    const bubblePositions = [
        {top: '15%', left: '10%'},
        {top: '50%', left: '25%'},
        {top: '20%', left: '45%'},
        {top: '60%', left: '65%'},
        {top: '30%', left: '80%'},
        {top: '70%', left: '90%'}
    ];
    
    // Create bubbles with varying animation delays
    for (let i = 0; i < bubbleSizes.length; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'top-menu-bubble';
        
        const size = bubbleSizes[i];
        const position = bubblePositions[i];
        
        // Apply styles
        Object.assign(bubble.style, {
            width: `${size}px`,
            height: `${size}px`,
            top: position.top,
            left: position.left,
            animationDelay: `${i * 1.5}s` // Stagger animations
        });
        
        topMenu.appendChild(bubble);
    }
}

/**
 * Sets up the top menu functionality
 */
function setupTopMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const topMenu = document.getElementById('top-menu');
    const body = document.body;
    const menuLinks = document.querySelectorAll('.top-menu-nav a');
    
    // Toggle mobile menu
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            body.classList.toggle('menu-open');
            
            // Change icon based on state
            const icon = menuToggle.querySelector('i');
            if (body.classList.contains('menu-open')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Set active class on initial load
    setActiveMenuItemBySection();
    
    // Handle menu item clicks
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove active class from all links
            menuLinks.forEach(item => item.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Close mobile menu after clicking a link on mobile
            if (window.innerWidth < 992) {
                body.classList.remove('menu-open');
                
                // Reset hamburger icon
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    });
    
    // Set active menu item based on scroll position
    window.addEventListener('scroll', debounce(function() {
        setActiveMenuItemBySection();
    }, 100));
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (
            window.innerWidth < 992 && 
            body.classList.contains('menu-open') && 
            !topMenu.contains(e.target) && 
            !menuToggle.contains(e.target)
        ) {
            body.classList.remove('menu-open');
            
            // Reset hamburger icon
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });
}

/**
 * Set active menu item based on current section in viewport
 */
function setActiveMenuItemBySection() {
    const scrollPosition = window.scrollY;
    const menuLinks = document.querySelectorAll('.top-menu-nav a');
    
    // Get all sections
    const sections = document.querySelectorAll('section');
    
    // Find the current section
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Remove active class from all links
            menuLinks.forEach(item => item.classList.remove('active'));
            
            // Add active class to the corresponding link
            const activeLink = document.querySelector(`.top-menu-nav a[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}

/**
 * Creates animated bubbles in the hero section
 */
function createHeroBubbles() {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;
    
    // Create a container for the hero bubbles if it doesn't exist
    let heroBubblesContainer = heroSection.querySelector('.hero-bubbles');
    if (!heroBubblesContainer) {
        heroBubblesContainer = document.createElement('div');
        heroBubblesContainer.className = 'hero-bubbles';
        heroSection.insertBefore(heroBubblesContainer, heroSection.firstChild);
    }
    
    // Create bubbles for the hero section
    for (let i = 0; i < 20; i++) {
        createBubble(heroBubblesContainer);
    }
    
    // Add more bubbles periodically to hero section
    setInterval(() => {
        if (document.visibilityState === 'visible') {
            createBubble(heroBubblesContainer);
            
            // Remove excess bubbles
            const bubbles = heroBubblesContainer.querySelectorAll('.bubble');
            if (bubbles.length > 30) {
                bubbles[0].remove();
            }
        }
    }, 3000);
}

/**
 * Creates animated bubbles in the background
 */
function createBubblyBackground() {
    const bubbleContainer = document.getElementById('bubble-background');
    
    if (!bubbleContainer) {
        console.warn("Bubble container not found!");
        return;
    }
    
    // Clear any existing bubbles
    bubbleContainer.innerHTML = '';
    
    // Number of bubbles based on screen size
    const screenWidth = window.innerWidth;
    const numberOfBubbles = screenWidth < 768 ? 15 : 30;
    
    console.log(`Creating ${numberOfBubbles} bubbles for the background`);
    
    // Create initial bubbles
    for (let i = 0; i < numberOfBubbles; i++) {
        createBubble(bubbleContainer);
    }
    
    // Add more bubbles periodically
    setInterval(() => {
        if (document.visibilityState === 'visible') {
            createBubble(bubbleContainer);
            
            // Remove excess bubbles if too many exist to prevent performance issues
            const bubbles = bubbleContainer.querySelectorAll('.bubble');
            if (bubbles.length > 80) {
                bubbles[0].remove();
            }
        }
    }, 2000);
    
    // Handle window resize
    window.addEventListener('resize', debounce(() => {
        // Clear and recreate bubbles on resize
        bubbleContainer.innerHTML = '';
        const newScreenWidth = window.innerWidth;
        const newNumberOfBubbles = newScreenWidth < 768 ? 15 : 30;
        
        for (let i = 0; i < newNumberOfBubbles; i++) {
            createBubble(bubbleContainer);
        }
    }, 250));
}

/**
 * Creates a single bubble element and adds it to the container
 * @param {HTMLElement} container - The container to add the bubble to
 */
function createBubble(container) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    
    // Random size between 30px and 150px
    const size = Math.random() * 120 + 30;
    
    // Random horizontal position
    const left = Math.random() * 100;
    
    // Random colors for background with laundromat theme
    const blueOpacity = (Math.random() * 0.2 + 0.2).toFixed(2);
    const bgColor = container.id === 'bubble-background' 
        ? `rgba(79, 195, 247, ${blueOpacity})`
        : `rgba(255, 255, 255, ${blueOpacity})`;
    
    // Random animation duration between 15s and 30s
    const duration = Math.floor(Math.random() * 15 + 15);
    
    // Random horizontal movement
    const tx = Math.random() * 200 - 100;
    
    // Apply styles
    Object.assign(bubble.style, {
        width: `${size}px`,
        height: `${size}px`,
        left: `${left}%`,
        backgroundColor: bgColor,
        boxShadow: `0 0 ${Math.floor(size/6)}px rgba(255, 255, 255, 0.3)`,
        animation: `bubble-rise ${duration}s ease-in forwards`,
        animationDelay: `${Math.random() * 5}s`,
        '--tx': `${tx}px`
    });
    
    // Add bubble to container
    container.appendChild(bubble);
    
    // Remove bubble after animation completes (plus buffer)
    setTimeout(() => {
        if (bubble.parentNode === container) {
            bubble.remove();
        }
    }, (duration + 5) * 1000);
}

/**
 * Debounce function to limit how often a function is called
 * @param {Function} func - The function to debounce
 * @param {number} wait - The time to wait in milliseconds
 * @returns {Function} - The debounced function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Creates and adds the dark mode toggle button
 */
function createDarkModeToggle() {
    const toggleButton = document.createElement('button');
    toggleButton.className = 'dark-mode-toggle';
    toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
    toggleButton.setAttribute('title', 'Toggle Dark Mode');
    
    // Add to the top menu header
    const topMenu = document.getElementById('top-menu');
    if (topMenu) {
        const menuHeader = topMenu.querySelector('.top-menu-header');
        if (menuHeader) {
            menuHeader.appendChild(toggleButton);
        } else {
            topMenu.appendChild(toggleButton);
        }
    } else {
        document.body.appendChild(toggleButton);
    }
    
    // Check for saved preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    // Add click event
    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        // Update icon
        if (document.body.classList.contains('dark-mode')) {
            this.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('darkMode', 'enabled');
        } else {
            this.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('darkMode', 'disabled');
        }
    });
}

/**
 * Set up smooth scrolling for navigation links
 */
function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Smooth scroll to element
                targetElement.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Add animation to elements when they come into view
 */
function setupScrollAnimations() {
    // Only add these animations if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
        const cards = document.querySelectorAll('.status-widget, .service-card, .promotion-card, .loyalty-status');
        const sections = document.querySelectorAll('section');
        
        // Animate cards when they come into view
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    cardObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        // Set initial state and observe each card
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            cardObserver.observe(card);
        });
        
        // Add animation to section titles
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const title = entry.target.querySelector('h2');
                    if (title) {
                        title.style.opacity = '1';
                        title.style.transform = 'translateY(0)';
                    }
                    sectionObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        
        // Set initial state and observe each section
        sections.forEach(section => {
            const title = section.querySelector('h2');
            if (title && !section.classList.contains('hero')) {
                title.style.opacity = '0';
                title.style.transform = 'translateY(20px)';
                title.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                sectionObserver.observe(section);
            }
        });
    }
}

/**
 * Fetches machine status from the API
 */
function fetchMachineStatus() {
    // In a real implementation, this would make an API call
    // For demo purposes, we'll simulate an API response
    
    // Simulate network delay
    setTimeout(() => {
        try {
            // This is mock data - in production this would come from a real API
            const statusData = {
                washers: {
                    available: 3,
                    total: 5
                },
                dryers: {
                    available: 2,
                    total: 4
                }
            };
            
            updateMachineStatus(statusData);
            
            // Start a periodic refresh
            setInterval(() => {
                // Randomize availability for demo purposes
                const randomData = {
                    washers: {
                        available: Math.floor(Math.random() * 6),
                        total: 5
                    },
                    dryers: {
                        available: Math.floor(Math.random() * 5),
                        total: 4
                    }
                };
                updateMachineStatus(randomData);
            }, 10000);
            
        } catch (error) {
            console.error('Error fetching machine status:', error);
            displayError('Could not load machine status. Please try again later.');
        }
    }, 1000);
    
    // In a real implementation, this would be:
    /*
    fetch('/api/status')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            updateMachineStatus(data);
        })
        .catch(error => {
            console.error('Error fetching machine status:', error);
            displayError('Could not load machine status. Please try again later.');
        });
    */
}

/**
 * Updates the machine status in the UI
 * @param {Object} data - The machine status data
 */
function updateMachineStatus(data) {
    const washersAvailable = document.getElementById('washers-available');
    const washersTotal = document.getElementById('washers-total');
    const dryersAvailable = document.getElementById('dryers-available');
    const dryersTotal = document.getElementById('dryers-total');
    
    if (washersAvailable && washersTotal) {
        // Add animation for status changes
        if (washersAvailable.textContent !== data.washers.available.toString()) {
            animateNumberChange(washersAvailable, data.washers.available);
        }
        washersTotal.textContent = data.washers.total;
        
        // Update color based on availability
        updateAvailabilityColor(washersAvailable, data.washers.available, data.washers.total);
    }
    
    if (dryersAvailable && dryersTotal) {
        // Add animation for status changes
        if (dryersAvailable.textContent !== data.dryers.available.toString()) {
            animateNumberChange(dryersAvailable, data.dryers.available);
        }
        dryersTotal.textContent = data.dryers.total;
        
        // Update color based on availability
        updateAvailabilityColor(dryersAvailable, data.dryers.available, data.dryers.total);
    }
}

/**
 * Animates a number change
 * @param {HTMLElement} element - The element to update
 * @param {number} newValue - The new value
 */
function animateNumberChange(element, newValue) {
    // Add animation class
    element.classList.add('number-updating');
    
    // Update the value
    setTimeout(() => {
        element.textContent = newValue;
        
        // Remove animation class
        setTimeout(() => {
            element.classList.remove('number-updating');
        }, 300);
    }, 300);
}

/**
 * Updates color based on availability
 * @param {HTMLElement} element - The element to update
 * @param {number} available - Number of available machines
 * @param {number} total - Total number of machines
 */
function updateAvailabilityColor(element, available, total) {
    if (available === 0) {
        element.style.color = 'var(--unavailable-color)';
    } else if (available <= Math.floor(total * 0.3)) {
        element.style.color = 'var(--accent-color)';
    } else {
        element.style.color = 'var(--available-color)';
    }
}

/**
 * Set up event listeners for forms
 */
function setupForms() {
    // Booking form
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleBookingForm);
    }
    
    // Contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Login form
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLoginForm);
    }
    
    // Register form
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegisterForm);
    }
}

/**
 * Set up the booking button event listener
 */
function setupBookingButton() {
    const bookingButton = document.querySelector('.cta-button');
    if (bookingButton) {
        bookingButton.addEventListener('click', function() {
            const bookingSection = document.getElementById('booking');
            if (bookingSection) {
                bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                
                // Focus on the first form field after scrolling
                setTimeout(() => {
                    const firstInput = bookingSection.querySelector('input, select');
                    if (firstInput) {
                        firstInput.focus();
                    }
                }, 1000);
            }
        });
    }
}

/**
 * Handle booking form submission
 * @param {Event} event - The form submission event
 */
function handleBookingForm(event) {
    event.preventDefault();
    
    // Validate form
    const form = event.target;
    if (!validateForm(form)) return;
    
    // Get form data
    const formData = {
        date: form.elements['booking-date'].value,
        time: form.elements['booking-time'].value,
        machineType: form.elements['machine-type'].value,
        email: form.elements['customer-email'].value
    };
    
    // In a real implementation, this would send data to the server
    console.log('Booking data:', formData);
    
    // Display success message
    displaySuccessMessage(form, 'Booking submitted successfully! We will send a confirmation to your email.');
    
    // In a real implementation, this would be:
    /*
    fetch('/api/book', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        displaySuccessMessage(form, 'Booking submitted successfully! We will send a confirmation to your email.');
        form.reset();
    })
    .catch(error => {
        console.error('Error submitting booking:', error);
        displayError('Could not submit booking. Please try again later.');
    });
    */
}

/**
 * Handle contact form submission
 * @param {Event} event - The form submission event
 */
function handleContactForm(event) {
    event.preventDefault();
    
    // Validate form
    const form = event.target;
    if (!validateForm(form)) return;
    
    // Get form data
    const formData = {
        name: form.elements['contact-name'].value,
        email: form.elements['contact-email'].value,
        message: form.elements['contact-message'].value
    };
    
    // In a real implementation, this would send data to the server
    console.log('Contact data:', formData);
    
    // Display success message
    displaySuccessMessage(form, 'Message sent successfully! We will get back to you soon.');
    
    // In a real implementation, this would be:
    /*
    fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        displaySuccessMessage(form, 'Message sent successfully! We will get back to you soon.');
        form.reset();
    })
    .catch(error => {
        console.error('Error sending message:', error);
        displayError('Could not send message. Please try again later.');
    });
    */
}

/**
 * Handle login form submission
 * @param {Event} event - The form submission event
 */
function handleLoginForm(event) {
    event.preventDefault();
    
    // Validate form
    const form = event.target;
    if (!validateForm(form)) return;
    
    // Get form data
    const formData = {
        email: form.elements['login-email'].value,
        password: form.elements['login-password'].value
    };
    
    // In a real implementation, this would authenticate with the server
    console.log('Login data:', formData);
    
    // Display success message
    displaySuccessMessage(form, 'Login successful!');
    
    // Update the loyalty points after login
    document.getElementById('loyalty-points').textContent = '250';
    
    // In a real implementation, this would be an authentication API call
}

/**
 * Handle register form submission
 * @param {Event} event - The form submission event
 */
function handleRegisterForm(event) {
    event.preventDefault();
    
    // Validate form
    const form = event.target;
    if (!validateForm(form)) return;
    
    // Get form data
    const formData = {
        name: form.elements['register-name'].value,
        email: form.elements['register-email'].value,
        password: form.elements['register-password'].value
    };
    
    // In a real implementation, this would register with the server
    console.log('Register data:', formData);
    
    // Display success message
    displaySuccessMessage(form, 'Registration successful! You can now log in.');
    
    // In a real implementation, this would be a registration API call
}

/**
 * Validate a form
 * @param {HTMLFormElement} form - The form to validate
 * @returns {boolean} - Whether the form is valid
 */
function validateForm(form) {
    // Check if the form is valid using the browser's built-in validation
    if (!form.checkValidity()) {
        // The browser will show validation messages
        return false;
    }
    
    // Additional custom validation could be added here
    
    return true;
}

/**
 * Display a success message
 * @param {HTMLFormElement} form - The form that was submitted
 * @param {string} message - The success message to display
 */
function displaySuccessMessage(form, message) {
    // Check if there's already a message element
    let messageElement = form.querySelector('.form-message');
    
    if (!messageElement) {
        // Create a new message element
        messageElement = document.createElement('div');
        messageElement.className = 'form-message';
        form.appendChild(messageElement);
    }
    
    // Update the message and styling
    messageElement.textContent = message;
    messageElement.style.color = 'var(--success-color)';
    messageElement.style.marginTop = '1rem';
    
    // Reset the form
    form.reset();
    
    // Remove the message after a delay
    setTimeout(() => {
        if (messageElement.parentNode === form) {
            messageElement.remove();
        }
    }, 5000);
}

/**
 * Display an error message
 * @param {string} message - The error message to display
 */
function displayError(message) {
    // Create a notification element
    const notification = document.createElement('div');
    notification.className = 'error-notification';
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        backgroundColor: 'var(--error-color)',
        color: 'white',
        padding: '1rem',
        borderRadius: '8px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
        zIndex: '1000',
        maxWidth: '300px'
    });
    
    // Add to the document
    document.body.appendChild(notification);
    
    // Remove after a delay
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(30px)';
        notification.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        
        setTimeout(() => {
            if (notification.parentNode === document.body) {
                notification.remove();
            }
        }, 300);
    }, 5000);
} 