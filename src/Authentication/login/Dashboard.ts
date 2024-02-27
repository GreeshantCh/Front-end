


document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton') as HTMLFormElement;
    loginButton.addEventListener('click', async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        

        const email = (document.getElementById('email') as HTMLInputElement).value;
        const password = (document.getElementById('password') as HTMLInputElement).value;

        try {
            fetch('http://localhost:8080/auth/login', {
                method: 'POST',
               mode: 'cors',
               credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'

                },                                
                body: JSON.stringify({ email, password })
            })
            .then((response) => response.json()) // Parse the response as JSON
            .then((data) => {
                
                console.log(data);
                const cookie = data.authentication.sessionToken;
                        
                        // Set the received cookie in the browser
                        document.cookie = cookie;
                        // Login successful, redirect to dashboard
                    let pathname = document.location.pathname;

                    // Remove the current directory and go back three folders
                    pathname = pathname.split('/').slice(0, -3).join('/');

                    // Append the path to the dashboard.html
                    pathname += '/views/Dashboard.html';

                    // Navigate to the new URL
                    document.location.href = pathname;
                

        }) 
        } catch (error) {
            console.error('Error occurred:', error);
        }
    });
})
