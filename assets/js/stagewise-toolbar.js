// Stagewise Toolbar Integration
(function() {
  // Only initialize in development mode
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    // Add process shim for browser environment
    if (typeof window.process === 'undefined') {
      window.process = {
        env: {
          NODE_ENV: 'development'
        }
      };
    }
    
    // First load the CSS
    const styleLink = document.createElement('link');
    styleLink.rel = 'stylesheet';
    styleLink.type = 'text/css';
    styleLink.href = '/assets/css/stagewise/stagewise.css';
    document.head.appendChild(styleLink);
    
    // Then load the script
    const script = document.createElement('script');
    script.src = '/assets/js/stagewise/stagewise.js';
    script.onload = function() {
      try {
        // Try to access the library - it might be exposed under different names
        // Check common patterns for UMD modules
        const stagewise = window.stagewise || window.Stagewise || 
                         window.stagewiseToolbar || window.StagewiseToolbar;
        
        if (stagewise) {
          console.log('Found stagewise as:', stagewise);
          // Configure the toolbar
          const stagewiseConfig = {
            plugins: []
          };
          
          // Initialize the toolbar - try different possible function names
          if (typeof stagewise.initToolbar === 'function') {
            stagewise.initToolbar(stagewiseConfig);
            console.log('Stagewise toolbar initialized with initToolbar');
          } else if (typeof stagewise.init === 'function') {
            stagewise.init(stagewiseConfig);
            console.log('Stagewise toolbar initialized with init');
          } else if (typeof stagewise === 'function') {
            stagewise(stagewiseConfig);
            console.log('Stagewise toolbar initialized by calling directly');
          } else {
            console.error('No initialization method found on stagewise object:', stagewise);
          }
        } else {
          console.error('Stagewise toolbar object not available in window, dumping window keys for debugging:');
          console.log(Object.keys(window).filter(k => !k.startsWith('_')).join(', '));
        }
      } catch (error) {
        console.error('Error initializing stagewise toolbar:', error);
      }
    };
    script.onerror = function() {
      console.error('Failed to load Stagewise toolbar script', script.src);
    };
    document.head.appendChild(script);
  }
})(); 