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

const form = document.getElementById("contactForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Validate form
        if (validateForm(form)) {
            showSavedMessage();
            form.reset(); // Reset the form fields after success
        }
    });


function validateForm(form) {
    let isValid = true;

    const nameInput = form.elements["name"];
    const nameError = nameInput.nextElementSibling;
    if (nameInput.value.trim() === "") {
        nameError.style.display = "block";
        isValid = false;
    } else {
        nameError.style.display = "none";
    }

    const emailInput = form.elements["email"];
    const emailError = emailInput.nextElementSibling;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        emailError.style.display = "block";
        isValid = false;
    } else {
        emailError.style.display = "none";
    }

    const messageInput = form.elements["message"];
    const messageError = messageInput.nextElementSibling;
    if (messageInput.value.trim() === "") {
        messageError.style.display = "block";
        isValid = false;
    } else {
        messageError.style.display = "none";
    }

    return isValid;
}

function showSavedMessage() {
    const savedMessage = document.getElementById("savedMessage");
    savedMessage.style.display = "block";
    setTimeout(() => {
        savedMessage.style.display = "none";
    }, 2000);
}