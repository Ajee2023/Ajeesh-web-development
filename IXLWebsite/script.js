// Get elements for the Sign Up popup
const signupBtn = document.getElementById('signupBtn');
const closeBtn = document.getElementById('closeBtn');
const signupPopup = document.getElementById('signupPopup');
const signupForm = document.getElementById('signupForm');

// Function to open popup
function openPopup(popupElement) {
    popupElement.style.display = 'flex'; // Use flex to center
}

// Function to close popup
function closePopup(popupElement) {
    popupElement.style.display = 'none';
}

// Event Listeners for Sign Up Popup
if (signupBtn) { // Check if the element exists to prevent errors
    signupBtn.addEventListener('click', () => openPopup(signupPopup));
}

if (closeBtn) { // Check if the element exists
    closeBtn.addEventListener('click', () => closePopup(signupPopup));
}

// Close signup popup when clicking outside of the content
if (signupPopup) { // Check if the element exists
    signupPopup.addEventListener('click', (event) => {
        if (event.target === signupPopup) {
            closePopup(signupPopup);
        }
    });
}

// Handle Sign Up form submission
if (signupForm) { // Check if the element exists
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Here you would typically send this data to a server
        alert(`Account created for ${email}! (This is just a demo)`);

        // Reset form and close popup
        signupForm.reset();
        closePopup(signupPopup);
    });
}
// as the membership link now opens a new HTML page directly.