document.addEventListener('DOMContentLoaded', function () {
    var deleteButton = document.getElementById('deleteUserBtn');
    deleteButton.addEventListener('click', function () {
        window.location.href = '../Authentication/delete/delete.html'; // Redirect to delete.html page
    });
});
