document.addEventListener("DOMContentLoaded", function () {
    var welcomeContainer = document.getElementById('welcomeContainer');
    var errorMessage = document.getElementById('errorMessage');

    
    var userEmail = prompt("Email: (Hint: alaa@gmail.com)");
    

    
    if (userEmail === 'alaa@gmail.com') {
        var userPassword = prompt("password: (Hint : 123)");
        if (userPassword === '123') {
            
            welcomeContainer.style.display = 'block';
            errorMessage.style.display = 'none';

           
            var navigateButton = document.getElementById('navigateButton');
            if (navigateButton) {
                navigateButton.addEventListener('click', function () {
                    window.location.href = 'home.html';
                });
            }
        } else {
           
            errorMessage.textContent = "Invalid password";
            errorMessage.style.display = 'block';
            welcomeContainer.style.display = 'none';
        }
    } else {
      
        errorMessage.textContent = "Invalid Email";
        errorMessage.style.display = 'block';
        welcomeContainer.style.display = 'none';
    }
});