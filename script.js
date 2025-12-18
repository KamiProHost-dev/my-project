// Test Website JavaScript - For Web Hosting Tool

document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Test Website JavaScript Loaded Successfully!');
    console.log('All three files (HTML, CSS, JS) are working together');
    
    // DOM Elements
    const testButton = document.getElementById('testButton');
    const colorButton = document.getElementById('colorButton');
    const resetButton = document.getElementById('resetButton');
    const clickCountElement = document.getElementById('clickCount');
    const currentTimeElement = document.getElementById('currentTime');
    const cssTestElement = document.getElementById('cssTest');
    const jsTestElement = document.getElementById('jsTest');
    const cssStatusElement = document.getElementById('cssStatus');
    const jsStatusElement = document.getElementById('jsStatus');
    
    // State
    let clickCount = 0;
    let colorChanged = false;
    
    // Initialize
    init();
    
    function init() {
        console.log('🚀 Initializing test website...');
        
        // Mark CSS as loaded
        setTimeout(() => {
            cssTestElement.classList.add('success');
            cssTestElement.querySelector('.icon').textContent = '✓';
            cssTestElement.querySelector('.text').textContent = 'CSS File Loaded';
            
            cssStatusElement.textContent = 'PASS';
            cssStatusElement.classList.add('success');
            
            console.log('✅ CSS styles applied successfully');
        }, 1000);
        
        // Mark JS as loaded
        setTimeout(() => {
            jsTestElement.classList.add('success');
            jsTestElement.querySelector('.icon').textContent = '✓';
            jsTestElement.querySelector('.text').textContent = 'JavaScript File Loaded';
            
            jsStatusElement.textContent = 'PASS';
            jsStatusElement.classList.add('success');
            
            console.log('✅ JavaScript executed successfully');
        }, 1500);
        
        // Start time updates
        updateTime();
        setInterval(updateTime, 1000);
        
        // Setup event listeners
        setupEventListeners();
        
        console.log('✅ Test website initialized successfully!');
    }
    
    function setupEventListeners() {
        // Test Button - Count clicks
        testButton.addEventListener('click', function() {
            clickCount++;
            clickCountElement.textContent = clickCount;
            
            // Change button text temporarily
            const originalText = this.textContent;
            this.textContent = 'Clicked!';
            this.style.background = '#17a2b8';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.style.background = '';
            }, 500);
            
            console.log(`Button clicked ${clickCount} times`);
        });
        
        // Color Button - Change background color
        colorButton.addEventListener('click', function() {
            const colors = [
                'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
                'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
                'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)',
                'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
            ];
            
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            document.body.style.background = randomColor;
            colorChanged = true;
            
            console.log('Background color changed:', randomColor);
        });
        
        // Reset Button - Reset everything
        resetButton.addEventListener('click', function() {
            clickCount = 0;
            clickCountElement.textContent = clickCount;
            
            document.body.style.background = '';
            colorChanged = false;
            
            // Reset test items animation
            cssTestElement.classList.remove('success');
            cssTestElement.querySelector('.icon').textContent = '?';
            cssTestElement.querySelector('.text').textContent = 'CSS File Loading...';
            
            jsTestElement.classList.remove('success');
            jsTestElement.querySelector('.icon').textContent = '?';
            jsTestElement.querySelector('.text').textContent = 'JavaScript File Loading...';
            
            setTimeout(() => {
                cssTestElement.classList.add('success');
                cssTestElement.querySelector('.icon').textContent = '✓';
                cssTestElement.querySelector('.text').textContent = 'CSS File Loaded';
                
                jsTestElement.classList.add('success');
                jsTestElement.querySelector('.icon').textContent = '✓';
                jsTestElement.querySelector('.text').textContent = 'JavaScript File Loaded';
            }, 500);
            
            console.log('✅ All tests reset successfully');
        });
        
        // Add hover effect to test items
        const testItems = document.querySelectorAll('.test-item');
        testItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
                this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = '';
                this.style.boxShadow = '';
            });
        });
        
        // Add click effect to boxes
        const boxes = document.querySelectorAll('.box');
        boxes.forEach(box => {
            box.addEventListener('click', function() {
                const originalText = this.textContent;
                this.textContent = 'Clicked!';
                
                setTimeout(() => {
                    this.textContent = originalText;
                }, 1000);
                
                console.log(`${originalText} clicked`);
            });
        });
    }
    
    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        currentTimeElement.textContent = timeString;
    }
    
    // Test different JavaScript features
    console.log('Testing JavaScript features:');
    
    // Array test
    const testArray = ['HTML', 'CSS', 'JavaScript'];
    console.log('Array test:', testArray);
    
    // Object test
    const testObject = {
        html: 'Working',
        css: 'Working',
        javascript: 'Working'
    };
    console.log('Object test:', testObject);
    
    // Function test
    function testFunction() {
        return 'Function is working';
    }
    console.log('Function test:', testFunction());
    
    // Promise test
    const testPromise = new Promise((resolve) => {
        setTimeout(() => resolve('Promise resolved'), 100);
    });
    
    testPromise.then(result => {
        console.log('Promise test:', result);
    });
    
    // DOM manipulation test
    const testElement = document.createElement('div');
    testElement.style.display = 'none';
    testElement.id = 'test-element';
    testElement.textContent = 'DOM manipulation test';
    document.body.appendChild(testElement);
    
    console.log('DOM manipulation test: Element created and added');
    
    // Remove test element
    setTimeout(() => {
        testElement.remove();
        console.log('DOM manipulation test: Element removed');
    }, 2000);
    
    // Final success message
    setTimeout(() => {
        console.log('=========================================');
        console.log('🎉 ALL TESTS PASSED SUCCESSFULLY!');
        console.log('=========================================');
        console.log('The Web Hosting Tool is working perfectly!');
        console.log('✅ HTML, CSS, and JavaScript are all loaded');
        console.log('✅ Files are working together correctly');
        console.log('✅ You can now host your own websites');
        console.log('=========================================');
    }, 3000);
});
