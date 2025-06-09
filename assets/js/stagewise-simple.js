/**
 * Simple implementation of a development toolbar 
 * inspired by Stagewise but implemented from scratch
 */
(function() {
  // Only run in development mode
  if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
    return;
  }
  
  // Create the toolbar styles
  const style = document.createElement('style');
  style.textContent = `
    #dev-toolbar {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: #2a2a2a;
      color: white;
      padding: 8px 16px;
      font-family: Arial, sans-serif;
      z-index: 9999;
      display: flex;
      align-items: center;
      box-shadow: 0 -2px 5px rgba(0,0,0,0.2);
      transition: transform 0.3s ease;
      transform: translateY(0);
    }
    
    #dev-toolbar.hidden {
      transform: translateY(100%);
    }
    
    #dev-toolbar .logo {
      font-weight: bold;
      margin-right: 20px;
      font-size: 16px;
    }
    
    #dev-toolbar .toggle {
      position: absolute;
      top: -30px;
      right: 20px;
      background: #2a2a2a;
      color: white;
      border: none;
      border-radius: 4px 4px 0 0;
      padding: 5px 10px;
      cursor: pointer;
    }
    
    #dev-toolbar .button {
      background: #4a4a4a;
      color: white;
      border: none;
      border-radius: 4px;
      padding: 5px 10px;
      margin: 0 5px;
      cursor: pointer;
      transition: background 0.2s;
    }
    
    #dev-toolbar .button:hover {
      background: #666;
    }
    
    #dev-toolbar .select-container {
      position: relative;
      display: inline-block;
      margin: 0 10px;
    }
    
    #dev-toolbar .highlight-mode-toggle.active {
      background: #0066cc;
    }
    
    .element-highlight {
      position: absolute;
      pointer-events: none;
      border: 2px solid #0066cc !important;
      background-color: rgba(0, 102, 204, 0.1) !important;
      z-index: 9998;
    }
    
    .element-highlight-label {
      position: absolute;
      background: #0066cc;
      color: white;
      padding: 2px 6px;
      font-size: 12px;
      z-index: 9998;
      pointer-events: none;
      top: -20px;
      left: 0;
      font-family: monospace;
    }
    
    .comment-panel {
      position: fixed;
      bottom: 60px;
      right: 20px;
      width: 300px;
      background: #fff;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
      padding: 15px;
      z-index: 9997;
      display: none;
    }
    
    .comment-panel.active {
      display: block;
    }
    
    .comment-panel textarea {
      width: 100%;
      min-height: 100px;
      margin-bottom: 10px;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    
    .comment-panel .target-info {
      font-size: 12px;
      color: #666;
      margin-bottom: 8px;
    }
    
    .comment-panel button {
      padding: 5px 10px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    
    .comment-panel .submit-btn {
      background: #0066cc;
      color: white;
    }
    
    .comment-panel .cancel-btn {
      background: #f5f5f5;
      color: #333;
      margin-left: 5px;
    }
    
    .element-comment-indicator {
      position: absolute;
      background: #ffd700;
      color: black;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      text-align: center;
      line-height: 20px;
      font-size: 12px;
      top: -10px;
      right: -10px;
      z-index: 9999;
      cursor: pointer;
    }
  `;
  document.head.appendChild(style);
  
  // Create the toolbar
  const toolbar = document.createElement('div');
  toolbar.id = 'dev-toolbar';
  toolbar.innerHTML = `
    <div class="logo">Dev Toolbar</div>
    <button class="button highlight-mode-toggle">Highlight Elements</button>
    <button class="button clear-highlights">Clear Highlights</button>
    <button class="button export-comments">Export Tasks</button>
    <button class="button send-to-cursor">Send to Cursor</button>
    <button class="toggle">▼</button>
  `;
  document.body.appendChild(toolbar);
  
  // Create comment panel
  const commentPanel = document.createElement('div');
  commentPanel.className = 'comment-panel';
  commentPanel.innerHTML = `
    <div class="target-info">No element selected</div>
    <textarea placeholder="Describe what changes you'd like to make to this element..."></textarea>
    <button class="submit-btn">Submit</button>
    <button class="cancel-btn">Cancel</button>
  `;
  document.body.appendChild(commentPanel);
  
  // Toolbar functionality
  const toggleButton = toolbar.querySelector('.toggle');
  const highlightModeToggle = toolbar.querySelector('.highlight-mode-toggle');
  const clearHighlightsButton = toolbar.querySelector('.clear-highlights');
  const exportCommentsButton = toolbar.querySelector('.export-comments');
  const sendToCursorButton = toolbar.querySelector('.send-to-cursor');
  
  // Comment panel elements
  const targetInfoElement = commentPanel.querySelector('.target-info');
  const commentTextarea = commentPanel.querySelector('textarea');
  const submitCommentButton = commentPanel.querySelector('.submit-btn');
  const cancelCommentButton = commentPanel.querySelector('.cancel-btn');
  
  let highlightMode = false;
  let highlights = [];
  let comments = [];
  let currentTarget = null;
  
  // Toggle toolbar visibility
  toggleButton.addEventListener('click', () => {
    toolbar.classList.toggle('hidden');
    toggleButton.textContent = toolbar.classList.contains('hidden') ? '▲' : '▼';
  });
  
  // Toggle highlight mode
  highlightModeToggle.addEventListener('click', () => {
    highlightMode = !highlightMode;
    highlightModeToggle.classList.toggle('active', highlightMode);
    
    if (highlightMode) {
      document.body.style.cursor = 'crosshair';
    } else {
      document.body.style.cursor = '';
    }
  });
  
  // Clear all highlights
  clearHighlightsButton.addEventListener('click', () => {
    clearHighlights();
    comments = [];
    hideCommentPanel();
  });
  
  // Export comments
  exportCommentsButton.addEventListener('click', () => {
    if (comments.length === 0) {
      alert('No comments to export.');
      return;
    }
    
    // Format for Cursor integration
    const cursorFormat = {
      type: "cursor_stagewise_tasks",
      url: window.location.href,
      timestamp: new Date().toISOString(),
      tasks: comments.map(comment => ({
        type: "modification_request",
        selector: comment.selector,
        element_html: comment.elementHtml,
        instruction: comment.text,
        path: window.location.pathname
      }))
    };
    
    // Log to console in a format Cursor can detect
    console.log('CURSOR_STAGEWISE_TASKS:', JSON.stringify(cursorFormat));
    
    // Create a file to download that's compatible with Cursor
    const blob = new Blob([JSON.stringify(cursorFormat, null, 2)], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cursor-stagewise-tasks.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    // Copy to clipboard for easy pasting into Cursor
    navigator.clipboard.writeText(JSON.stringify(cursorFormat, null, 2))
      .then(() => {
        alert('Tasks copied to clipboard and saved as cursor-stagewise-tasks.json.\n\nPaste into Cursor to implement changes automatically.');
      })
      .catch(err => {
        alert('Tasks saved as cursor-stagewise-tasks.json. Please open this file in Cursor to implement changes.');
        console.error('Failed to copy to clipboard:', err);
      });
  });
  
  // Send to Cursor functionality
  sendToCursorButton.addEventListener('click', () => {
    if (comments.length === 0) {
      alert('No tasks to send to Cursor. Highlight elements and add comments first.');
      return;
    }
    
    // Format for Cursor integration
    const cursorFormat = {
      type: "cursor_stagewise_tasks",
      url: window.location.href,
      timestamp: new Date().toISOString(),
      tasks: comments.map(comment => ({
        type: "modification_request",
        selector: comment.selector,
        element_html: comment.elementHtml,
        instruction: comment.text,
        path: window.location.pathname
      }))
    };
    
    // Send tasks directly to Cursor through our server endpoint
    fetch('/cursor-stagewise', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cursorFormat)
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert(`Successfully sent ${data.tasksCount} tasks to Cursor!\n\nOpen your Cursor editor to implement the changes.`);
        console.log('Tasks sent to Cursor:', cursorFormat);
      } else {
        alert('Failed to send tasks to Cursor. Please try exporting them instead.');
        console.error('Error sending to Cursor:', data);
      }
    })
    .catch(error => {
      alert('Error sending tasks to Cursor. Please try exporting them instead.');
      console.error('Error:', error);
    });
  });
  
  // Element highlighting
  document.addEventListener('mousemove', (e) => {
    if (!highlightMode) return;
    
    const element = document.elementFromPoint(e.clientX, e.clientY);
    if (!element || element.closest('#dev-toolbar') || element.closest('.comment-panel')) return;
    
    // Temporarily highlight hovered element
    element.dataset.tempHighlight = 'true';
    element.style.outline = '2px dashed #0066cc';
    
    // Remove outline from previously hovered elements
    document.querySelectorAll('[data-temp-highlight="true"]').forEach(el => {
      if (el !== element) {
        el.style.outline = '';
        delete el.dataset.tempHighlight;
      }
    });
  });
  
  document.addEventListener('click', (e) => {
    if (!highlightMode) return;
    
    const element = document.elementFromPoint(e.clientX, e.clientY);
    if (!element || element.closest('#dev-toolbar') || element.closest('.comment-panel')) return;
    
    e.preventDefault();
    e.stopPropagation();
    
    const highlightInfo = highlightElement(element);
    
    // Show comment panel for this element
    showCommentPanel(element, highlightInfo.identifier);
  });
  
  // Comment panel events
  submitCommentButton.addEventListener('click', () => {
    if (!currentTarget || !commentTextarea.value.trim()) return;
    
    // Save the comment
    const commentText = commentTextarea.value.trim();
    const commentObj = {
      selector: currentTarget.selector,
      text: commentText,
      element: currentTarget.element,
      elementHtml: currentTarget.element.outerHTML,
      timestamp: new Date().toISOString()
    };
    
    comments.push(commentObj);
    
    // Add comment indicator to the highlight
    if (currentTarget.highlight) {
      const indicator = document.createElement('div');
      indicator.className = 'element-comment-indicator';
      indicator.textContent = '💬';
      indicator.title = commentText;
      indicator.dataset.commentIndex = comments.length - 1;
      currentTarget.highlight.appendChild(indicator);
      
      // Show comment when clicking on indicator
      indicator.addEventListener('click', (e) => {
        e.stopPropagation();
        const index = parseInt(e.target.dataset.commentIndex);
        const comment = comments[index];
        if (comment) {
          showCommentPanel(comment.element, comment.selector, comment.text);
        }
      });
    }
    
    // Hide the panel
    hideCommentPanel();
    console.log(`Comment added for ${currentTarget.selector}:`, commentText);
  });
  
  cancelCommentButton.addEventListener('click', () => {
    hideCommentPanel();
  });
  
  function showCommentPanel(element, selector, existingComment = '') {
    // Store current target info
    currentTarget = {
      element: element,
      selector: selector,
      highlight: highlights[highlights.length - 1]
    };
    
    // Update panel info
    targetInfoElement.textContent = `Selected: ${selector}`;
    commentTextarea.value = existingComment;
    
    // Position and show panel
    commentPanel.classList.add('active');
    commentTextarea.focus();
  }
  
  function hideCommentPanel() {
    commentPanel.classList.remove('active');
    currentTarget = null;
  }
  
  function highlightElement(element) {
    // Remove temporary highlight
    element.style.outline = '';
    delete element.dataset.tempHighlight;
    
    // Create permanent highlight
    const rect = element.getBoundingClientRect();
    const highlight = document.createElement('div');
    highlight.classList.add('element-highlight');
    highlight.style.top = rect.top + window.scrollY + 'px';
    highlight.style.left = rect.left + window.scrollX + 'px';
    highlight.style.width = rect.width + 'px';
    highlight.style.height = rect.height + 'px';
    
    // Create label
    const label = document.createElement('div');
    label.classList.add('element-highlight-label');
    
    // Get element identifier
    let identifier = element.tagName.toLowerCase();
    if (element.id) {
      identifier += `#${element.id}`;
    } else if (element.className && typeof element.className === 'string') {
      identifier += `.${element.className.split(' ')[0]}`;
    }
    
    label.textContent = identifier;
    highlight.appendChild(label);
    
    document.body.appendChild(highlight);
    highlights.push(highlight);
    
    // Generate a CSS selector for this element
    const selector = generateSelector(element);
    
    // Log element to console for developer use
    console.log('Selected element:', {
      element,
      selector,
      html: element.outerHTML
    });
    
    // Add data attribute to help with tracking
    const uniqueId = 'highlight-' + Date.now();
    element.dataset.highlightId = uniqueId;
    highlight.dataset.elementId = uniqueId;
    
    // Update position on scroll and resize
    updateHighlightPositions();
    
    return {
      element, 
      highlight,
      identifier
    };
  }
  
  function generateSelector(element) {
    let selector = '';
    
    if (element.id) {
      return `#${element.id}`;
    }
    
    // Try to build a selector
    let current = element;
    const path = [];
    
    while (current && current !== document.body && current !== document.documentElement) {
      let currentSelector = current.tagName.toLowerCase();
      
      if (current.className && typeof current.className === 'string') {
        const classes = current.className.split(' ').filter(c => c);
        if (classes.length) {
          currentSelector += `.${classes[0]}`;
        }
      }
      
      // Add nth-child if it has siblings
      if (current.parentNode) {
        const siblings = Array.from(current.parentNode.children);
        if (siblings.length > 1) {
          const index = siblings.indexOf(current) + 1;
          currentSelector += `:nth-child(${index})`;
        }
      }
      
      path.unshift(currentSelector);
      current = current.parentNode;
      
      // Don't go too deep to avoid overly complex selectors
      if (path.length >= 3) break;
    }
    
    return path.join(' > ');
  }
  
  function updateHighlightPositions() {
    document.querySelectorAll('.element-highlight').forEach(highlight => {
      const elementId = highlight.dataset.elementId;
      if (!elementId) return;
      
      const element = document.querySelector(`[data-highlight-id="${elementId}"]`);
      if (!element) return;
      
      const rect = element.getBoundingClientRect();
      highlight.style.top = rect.top + window.scrollY + 'px';
      highlight.style.left = rect.left + window.scrollX + 'px';
      highlight.style.width = rect.width + 'px';
      highlight.style.height = rect.height + 'px';
    });
  }
  
  function clearHighlights() {
    highlights.forEach(highlight => highlight.remove());
    highlights = [];
    
    // Clear data attributes
    document.querySelectorAll('[data-highlight-id]').forEach(el => {
      delete el.dataset.highlightId;
    });
  }
  
  // Add keyboard shortcut to toggle toolbar
  document.addEventListener('keydown', (e) => {
    // Alt+S
    if (e.altKey && e.key === 's') {
      toolbar.classList.toggle('hidden');
      toggleButton.textContent = toolbar.classList.contains('hidden') ? '▲' : '▼';
    }
    
    // Escape to cancel highlight mode or close comment panel
    if (e.key === 'Escape') {
      if (commentPanel.classList.contains('active')) {
        hideCommentPanel();
      } else if (highlightMode) {
        highlightMode = false;
        highlightModeToggle.classList.remove('active');
        document.body.style.cursor = '';
      }
    }
  });
  
  // Add scroll and resize event listeners for highlight positions
  window.addEventListener('scroll', updateHighlightPositions);
  window.addEventListener('resize', updateHighlightPositions);
  
  console.log('Dev toolbar initialized. Press Alt+S to toggle visibility.');
})(); 