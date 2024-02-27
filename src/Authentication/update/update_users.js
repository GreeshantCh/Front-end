document.addEventListener('DOMContentLoaded', function () {
    var updateButton = document.getElementById('updateUserBtn');
    updateButton.addEventListener('click', function () {
        // Redirect to the user profile page
        window.location.href = '../Authentication/update/update_user.html';
    });
});
