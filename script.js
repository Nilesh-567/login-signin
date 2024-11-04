// Function to close the modal
function closeModal() {
    document.getElementById('overlay').style.display = 'none';
}

// Function to open a specific tab (Sign In or Sign Up)
function openTab(event, tabName) {
    var i, tabContent, tabButton;

    // Hide all tab content
    tabContent = document.getElementsByClassName('tab-content');
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].classList.remove('active');
    }

    // Remove active class from all tab buttons
    tabButton = document.getElementsByClassName('tab-button');
    for (i = 0; i < tabButton.length; i++) {
        tabButton[i].classList.remove('active');
    }

    // Show the selected tab content and set the button as active
    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Optional: Function to open the modal (if you use a trigger button)
function openModal() {
    document.getElementById('overlay').style.display = 'flex';
    //'flex';
}

// Initialize default tab to Sign In
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('signIn').classList.add('active');
});

// Close the modal when the user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById("overlay");
    if (event.target == modal) {
        closeModal();
    }
}