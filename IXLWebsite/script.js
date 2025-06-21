// Get elements for the Sign Up popup
const signupBtn = document.getElementById('signupBtn');
const closeBtn = document.getElementById('closeBtn');
const signupPopup = document.getElementById('signupPopup');
const signupForm = document.getElementById('signupForm');

// Function to open popup
function openPopup(popupElement) {
    // To display the popup and enable scrolling to the top if it's very long
    popupElement.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent scrolling of background content
}

// Function to close popup
function closePopup(popupElement) {
    popupElement.style.display = 'none';
    document.body.style.overflow = ''; // Restore scrolling
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

// All "See all skills" buttons now toggle content on the page
document.querySelectorAll('.skills-button').forEach(button => {
    // Check if the button has the 'toggle-skills-button' class
    if (button.classList.contains('toggle-skills-button')) {
        button.addEventListener('click', function() {
            const skillDetails = this.closest('.grade-level-card').querySelector('.skill-details');
            const skillSummary = this.closest('.grade-level-card').querySelector('.skill-summary');

            if (skillDetails.style.display === 'none' || skillDetails.style.display === '') {
                skillDetails.style.display = 'block';
                skillSummary.style.display = 'none';
                this.textContent = 'Show less <';
            } else {
                skillDetails.style.display = 'none';
                skillSummary.style.display = 'block';
                this.textContent = 'See all skills >';
            }
        });
    }
});


// JavaScript for subject filtering
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        // Prevent default only if it's a subject link
        if (this.dataset.subject) {
            e.preventDefault();
            const selectedSubject = this.dataset.subject;
            document.querySelectorAll('.grade-level-card').forEach(card => {
                if (card.dataset.subject === selectedSubject) {
                    card.style.display = 'flex'; // Or 'block', depending on your layout
                } else {
                    card.style.display = 'none';
                }
            });

            // Update hero title and subtitle based on subject
            const heroTitle = document.getElementById('heroTitle');
            const heroSubtitle = document.getElementById('heroSubtitle');

            if (selectedSubject === 'math') {
                heroTitle.textContent = 'Explore Our Math Curriculum';
                heroSubtitle.textContent = 'Gain fluency and confidence in math! IXL students master essential skills at their own pace through fun and interactive questions, built-in support, and motivating awards.';
            } else if (selectedSubject === 'language-arts') {
                heroTitle.textContent = 'Explore Our Language Arts Curriculum';
                heroSubtitle.textContent = 'Develop strong reading, writing, and communication skills with our comprehensive Language Arts curriculum.';
            } else if (selectedSubject === 'science') {
                heroTitle.textContent = 'Explore Our Science Curriculum';
                heroSubtitle.textContent = 'Discover the wonders of the natural world with engaging science topics and experiments.';
            } else if (selectedSubject === 'social-studies') {
                heroTitle.textContent = 'Explore Our Social Studies Curriculum';
                heroSubtitle.textContent = 'Learn about history, geography, civics, and culture to understand the world around us.';
            }
        }
    });
});