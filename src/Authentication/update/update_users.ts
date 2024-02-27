document.addEventListener('DOMContentLoaded', () => {
    const updateButton = document.getElementById('updateUserBtn');

    updateButton.addEventListener('click', () => {
        // Redirect to the user profile page
        window.location.href = '../Authentication/update/update_user.html';
    });
});