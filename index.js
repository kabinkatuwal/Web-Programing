window.onload = function() {
    setTimeout (() => {
        document.getElementById('profile-pic').style.display = 'block';
    }, 10000);
};

document.getElementById('current-year').textContent = new Date().toLocaleDateString();