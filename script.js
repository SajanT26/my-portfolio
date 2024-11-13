document.addEventListener("DOMContentLoaded", function() {
    // Select all buttons with the class .show-details-btn
    const buttons = document.querySelectorAll('.show-details-btn');

    // Loop over each button to add event listeners
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Select the project details associated with the button
            const details = this.nextElementSibling;

            // Toggle visibility and button text
            if (details.style.display === "none" || details.style.display === "") {
                details.style.display = "block";      // Show details
                this.textContent = "Hide Details";    // Change button text
            } else {
                details.style.display = "none";       // Hide details
                this.textContent = "Show Details";    // Change button text back
            }
        });
    });
});