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
        event.preventDefault();    
        if (validateForm(form)) {
            showSavedMessage();
            form.reset(); 
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
    setTimeout(() => savedMessage.style.opacity = 1, 0); 
    setTimeout(() => {
        savedMessage.style.opacity = 0;
        setTimeout(() => savedMessage.style.display = "none", 500); 
    }, 2000);
}

const toggleThemeButton = document.getElementById('toggleTheme');
toggleThemeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        projects.forEach(project => {
            if (project.getAttribute('data-category') === category || category === 'all') {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});
