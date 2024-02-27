document.addEventListener('DOMContentLoaded', () => {
    const deleteButton = document.getElementById('deleteUserBtn');

    deleteButton.addEventListener('click', () => {
        window.location.href = '../Authentication/delete/delete.html'; // Redirect to delete.html page
    });
});