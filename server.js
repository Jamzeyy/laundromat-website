const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, '/')));

// In development mode, set up stagewise
if (process.env.NODE_ENV === 'development') {
    console.log('Running in development mode - Stagewise toolbar enabled');
    
    // Set up stagewise files
    require('./setup-stagewise');
    
    // Add MIME type for .cjs files
    express.static.mime.define({
        'application/javascript': ['cjs']
    });
    
    app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
    
    // Add Cursor integration endpoint
    app.post('/cursor-stagewise', (req, res) => {
        const taskData = req.body;
        
        // Save tasks to a file that Cursor can access
        const cursorTasksPath = path.join(__dirname, 'cursor-stagewise-tasks.json');
        fs.writeFileSync(cursorTasksPath, JSON.stringify(taskData, null, 2));
        
        console.log('Received Stagewise tasks for Cursor integration:');
        console.log(`Saved to: ${cursorTasksPath}`);
        console.log(`Number of tasks: ${taskData.tasks ? taskData.tasks.length : 0}`);
        
        res.status(200).json({
            success: true,
            message: 'Tasks received and saved for Cursor integration',
            tasksCount: taskData.tasks ? taskData.tasks.length : 0,
            savedPath: cursorTasksPath
        });
    });
}

// API endpoint for machine status
app.get('/api/status', (req, res) => {
    // In a real application, this would fetch data from a database
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
    
    // Simulate a small delay like in a real API
    setTimeout(() => {
        res.json(statusData);
    }, 500);
});

// API endpoint for booking a machine
app.post('/api/book', (req, res) => {
    const bookingData = req.body;
    
    // Log the booking data
    console.log('Received booking:', bookingData);
    
    // In a real application, this would validate and store the booking in a database
    
    // Send a success response
    res.status(201).json({
        success: true,
        message: 'Booking received successfully',
        booking: bookingData
    });
});

// API endpoint for contact form
app.post('/api/contact', (req, res) => {
    const contactData = req.body;
    
    // Log the contact data
    console.log('Received contact message:', contactData);
    
    // In a real application, this would store the message in a database
    // and potentially send an email notification
    
    // Send a success response
    res.status(201).json({
        success: true,
        message: 'Contact message received successfully'
    });
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
}); 