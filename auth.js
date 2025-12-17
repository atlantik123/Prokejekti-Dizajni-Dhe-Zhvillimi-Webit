// Authentication Form Validation - Plain JavaScript (No Libraries)

document.addEventListener('DOMContentLoaded', function() {
    // Login Form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            clearLoginErrors();
            
            const email = document.getElementById('loginEmail').value.trim();
            const password = document.getElementById('loginPassword').value.trim();
            
            let isValid = true;
            
            // Validate email
            if (!email) {
                showError('loginEmailError', 'Email is required');
                isValid = false;
            } else if (!validateEmail(email)) {
                showError('loginEmailError', 'Please enter a valid email address');
                isValid = false;
            }
            
            // Validate password
            if (!password) {
                showError('loginPasswordError', 'Password is required');
                isValid = false;
            } else if (password.length < 6) {
                showError('loginPasswordError', 'Password must be at least 6 characters long');
                isValid = false;
            }
            
            if (isValid) {
                // Simulate successful login
                const successMessage = document.getElementById('loginSuccess');
                successMessage.textContent = 'Login successful! Redirecting...';
                successMessage.style.display = 'block';
                
                // Simulate redirect after 2 seconds
                setTimeout(function() {
                    alert('Login successful! (This is a demo - no actual authentication is performed)');
                    // In a real app, you would redirect: window.location.href = 'index.html';
                }, 2000);
            }
        });
        
        // Real-time validation
        const loginEmail = document.getElementById('loginEmail');
        const loginPassword = document.getElementById('loginPassword');
        
        if (loginEmail) {
            loginEmail.addEventListener('blur', function() {
                const email = this.value.trim();
                if (!email) {
                    showError('loginEmailError', 'Email is required');
                } else if (!validateEmail(email)) {
                    showError('loginEmailError', 'Please enter a valid email address');
                } else {
                    clearError('loginEmailError');
                }
            });
        }
        
        if (loginPassword) {
            loginPassword.addEventListener('blur', function() {
                const password = this.value.trim();
                if (!password) {
                    showError('loginPasswordError', 'Password is required');
                } else if (password.length < 6) {
                    showError('loginPasswordError', 'Password must be at least 6 characters long');
                } else {
                    clearError('loginPasswordError');
                }
            });
        }
    }
    
    // Register Form
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            clearRegisterErrors();
            
            const name = document.getElementById('registerName').value.trim();
            const email = document.getElementById('registerEmail').value.trim();
            const password = document.getElementById('registerPassword').value.trim();
            const confirmPassword = document.getElementById('registerConfirmPassword').value.trim();
            
            let isValid = true;
            
            // Validate name
            if (!name) {
                showError('registerNameError', 'Name is required');
                isValid = false;
            } else if (name.length < 2) {
                showError('registerNameError', 'Name must be at least 2 characters long');
                isValid = false;
            }
            
            // Validate email
            if (!email) {
                showError('registerEmailError', 'Email is required');
                isValid = false;
            } else if (!validateEmail(email)) {
                showError('registerEmailError', 'Please enter a valid email address');
                isValid = false;
            }
            
            // Validate password
            if (!password) {
                showError('registerPasswordError', 'Password is required');
                isValid = false;
            } else if (password.length < 6) {
                showError('registerPasswordError', 'Password must be at least 6 characters long');
                isValid = false;
            }
            
            // Validate confirm password
            if (!confirmPassword) {
                showError('registerConfirmPasswordError', 'Please confirm your password');
                isValid = false;
            } else if (password !== confirmPassword) {
                showError('registerConfirmPasswordError', 'Passwords do not match');
                isValid = false;
            }
            
            if (isValid) {
                // Simulate successful registration
                const successMessage = document.getElementById('registerSuccess');
                successMessage.textContent = 'Registration successful! You can now login.';
                successMessage.style.display = 'block';
                
                // Optionally save to localStorage (simulating backend)
                const userData = {
                    name: name,
                    email: email,
                    password: password // In real app, this would be hashed
                };
                localStorage.setItem('user_' + email, JSON.stringify(userData));
                
                // Reset form
                registerForm.reset();
                
                // Show success and redirect option
                setTimeout(function() {
                    if (confirm('Registration successful! Would you like to go to the login page?')) {
                        window.location.href = 'login.html';
                    }
                }, 1000);
            }
        });
        
        // Real-time validation
        const registerName = document.getElementById('registerName');
        const registerEmail = document.getElementById('registerEmail');
        const registerPassword = document.getElementById('registerPassword');
        const registerConfirmPassword = document.getElementById('registerConfirmPassword');
        
        if (registerName) {
            registerName.addEventListener('blur', function() {
                const name = this.value.trim();
                if (!name) {
                    showError('registerNameError', 'Name is required');
                } else if (name.length < 2) {
                    showError('registerNameError', 'Name must be at least 2 characters long');
                } else {
                    clearError('registerNameError');
                }
            });
        }
        
        if (registerEmail) {
            registerEmail.addEventListener('blur', function() {
                const email = this.value.trim();
                if (!email) {
                    showError('registerEmailError', 'Email is required');
                } else if (!validateEmail(email)) {
                    showError('registerEmailError', 'Please enter a valid email address');
                } else {
                    clearError('registerEmailError');
                }
            });
        }
        
        if (registerPassword) {
            registerPassword.addEventListener('blur', function() {
                const password = this.value.trim();
                if (!password) {
                    showError('registerPasswordError', 'Password is required');
                } else if (password.length < 6) {
                    showError('registerPasswordError', 'Password must be at least 6 characters long');
                } else {
                    clearError('registerPasswordError');
                }
            });
        }
        
        if (registerConfirmPassword) {
            registerConfirmPassword.addEventListener('blur', function() {
                const password = document.getElementById('registerPassword').value.trim();
                const confirmPassword = this.value.trim();
                if (!confirmPassword) {
                    showError('registerConfirmPasswordError', 'Please confirm your password');
                } else if (password !== confirmPassword) {
                    showError('registerConfirmPasswordError', 'Passwords do not match');
                } else {
                    clearError('registerConfirmPasswordError');
                }
            });
        }
    }
});

// Validation functions
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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

function clearLoginErrors() {
    clearError('loginEmailError');
    clearError('loginPasswordError');
}

function clearRegisterErrors() {
    clearError('registerNameError');
    clearError('registerEmailError');
    clearError('registerPasswordError');
    clearError('registerConfirmPasswordError');
}

