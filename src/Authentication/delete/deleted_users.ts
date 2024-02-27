document.addEventListener('DOMContentLoaded', () => {
    const deleteButton = document.getElementById('delete-button');

    deleteButton.addEventListener('click', async () => {
        const userIdInput = document.getElementById('user-id') as HTMLInputElement;
        const userId = userIdInput.value.trim();

        if (!userId) {
            alert('Please enter a user ID');
            return;
        }

        
            const response = await fetch(`http://localhost:8080/users/${userId}`, {
                method: 'DELETE',
                credentials: 'include', // Include cookies in the request
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                alert('User deleted successfully');
                // Optionally, redirect to another page or perform any other action
            } else {
                const errorMessage = await response.text();
                alert(`Failed to delete user: ${errorMessage}`);
                console.error('Failed to delete user:', errorMessage);
                // Display error message or perform error handling
            }
        
        })
        
    });