document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.show-details-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const details = this.nextElementSibling;

          
            if (details.style.display === "none" || details.style.display === "") {
                details.style.display = "block";      
                this.textContent = "Hide Details";    
            } else {
                details.style.display = "none";    
                this.textContent = "Show Details";  
            }
        });
    });
});