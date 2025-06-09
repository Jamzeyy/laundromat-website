/**
 * Cursor Stagewise Integration
 * 
 * This script helps Cursor implement changes requested through the stagewise toolbar.
 * 
 * Usage:
 * 1. Run the script in Cursor terminal: node cursor-stagewise-integration.js
 * 2. The script will read cursor-stagewise-tasks.json and convert it to Cursor-friendly commands
 */

const fs = require('fs');
const path = require('path');

// Path to the tasks file
const tasksFilePath = path.join(__dirname, 'cursor-stagewise-tasks.json');

// Check if the file exists
if (!fs.existsSync(tasksFilePath)) {
  console.error(`Error: Tasks file not found at ${tasksFilePath}`);
  console.log('Make sure you have sent tasks from the toolbar first.');
  process.exit(1);
}

// Read the tasks file
try {
  const tasksData = JSON.parse(fs.readFileSync(tasksFilePath, 'utf8'));
  
  if (!tasksData.tasks || !Array.isArray(tasksData.tasks) || tasksData.tasks.length === 0) {
    console.error('Error: No tasks found in the file');
    process.exit(1);
  }
  
  console.log(`Found ${tasksData.tasks.length} tasks to implement from ${tasksData.url}`);
  console.log('\nTask details for Cursor implementation:');
  
  // Process each task and format it for Cursor
  tasksData.tasks.forEach((task, index) => {
    console.log(`\n------------- TASK ${index + 1} -------------`);
    console.log(`ELEMENT: ${task.selector}`);
    console.log(`INSTRUCTION: ${task.instruction}`);
    console.log(`HTML CONTEXT: ${task.element_html.substring(0, 100)}${task.element_html.length > 100 ? '...' : ''}`);
    console.log('----------------------------------------');
  });
  
  console.log('\nCursor tasks ready for implementation!');
  console.log('To implement these changes, copy the tasks above and ask Cursor to make the requested modifications.');
  
} catch (error) {
  console.error('Error processing tasks file:', error);
  process.exit(1);
} 