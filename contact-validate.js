// Contact Form Validation - Plain JavaScript (No Libraries)

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Clear previous errors
            clearErrors();
            
            // Get form values
            const name = document.getElementById('contactName').value.trim();
            const email = document.getElementById('contactEmail').value.trim();
            const message = document.getElementById('contactMessage').value.trim();
            
            let isValid = true;
            
            // Validate name
            if (!validateName(name)) {
                showError('contactNameError', 'Name is required and must be at least 2 characters long');
                isValid = false;
            }
            
            // Validate email
            if (!validateEmail(email)) {
                showError('contactEmailError', 'Please enter a valid email address');
                isValid = false;
            }
            
            // Validate message
            if (!validateMessage(message)) {
                showError('contactMessageError', 'Message is required and must be at least 10 characters long');
                isValid = false;
            }
            
            // If valid, simulate form submission
            if (isValid) {
                // Simulate successful submission
                const successMessage = document.getElementById('contactSuccess');
                successMessage.textContent = 'Thank you! Your message has been sent successfully. We will get back to you soon.';
                successMessage.style.display = 'block';
                
                // Reset form
                contactForm.reset();
                
                // Hide success message after 5 seconds
                setTimeout(function() {
                    successMessage.style.display = 'none';
                }, 5000);
            }
        });
        
        // Real-time validation on blur
        const nameInput = document.getElementById('contactName');
        const emailInput = document.getElementById('contactEmail');
        const messageInput = document.getElementById('contactMessage');
        
        if (nameInput) {
            nameInput.addEventListener('blur', function() {
                if (!validateName(this.value.trim())) {
                    showError('contactNameError', 'Name is required and must be at least 2 characters long');
                } else {
                    clearError('contactNameError');
                }
            });
        }
        
        if (emailInput) {
            emailInput.addEventListener('blur', function() {
                if (!validateEmail(this.value.trim())) {
                    showError('contactEmailError', 'Please enter a valid email address');
                } else {
                    clearError('contactEmailError');
                }
            });
        }
        
        if (messageInput) {
            messageInput.addEventListener('blur', function() {
                if (!validateMessage(this.value.trim())) {
                    showError('contactMessageError', 'Message is required and must be at least 10 characters long');
                } else {
                    clearError('contactMessageError');
                }
            });
        }
    }
});

// Validation functions
function validateName(name) {
    return name.length >= 2;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateMessage(message) {
    return message.length >= 10;
}

// Error handling functions
function showError(errorId, message) {
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

function clearError(errorId) {
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(function(element) {
        element.textContent = '';
        element.style.display = 'none';
    });
}

