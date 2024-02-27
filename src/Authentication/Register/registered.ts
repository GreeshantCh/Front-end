// main.ts

function redirectToRegisters() {
    // Assuming you have form fields with id 'username', 'email', and 'password'
    const username = (<HTMLInputElement>document.getElementById("username")).value;
    const email = (<HTMLInputElement>document.getElementById("email")).value;
    const password = (<HTMLInputElement>document.getElementById("password")).value;

    
    // Check if required fields are not empty
    if (username && email && password) {
        // Prepare registration data
        const registrationData = {
            "username": username,
            "email": email,
            "password": password
        };

        // Send a POST request to the server
        fetch("http://localhost:8080/auth/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(registrationData),
        })
        .then(response => {
            // Handle the response from the server (you can customize this part)
            if (response.ok) {
                console.log("Registration successful!");
                // Optionally, you can redirect the user to a success page here
            } else {
                console.error("Registration failed. Please try again.");
            }
        })
        .catch(error => {
            console.error("Error occurred while sending registration request:", error);
        });
    } else {
        console.error("Please fill out all required fields.");
    }
}

document.getElementById("registerButton")?.addEventListener("click", redirectToRegisters);
