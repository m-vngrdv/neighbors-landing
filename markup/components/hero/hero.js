document.querySelector('.hero__cta-btn').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('feedback-request').scrollIntoView({
        behavior: 'smooth'
    });
});
