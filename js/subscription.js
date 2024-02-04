document.addEventListener('DOMContentLoaded', () => {
    const subscribeButton = document.querySelector('.subscribe-btn');

    subscribeButton.addEventListener('click', (event) => {

        const emailInput = document.getElementById('exampleInputAmount').value;

        event.preventDefault();

        if (isValidEmail(emailInput)) {
            alert("Subscription was successful! Thank you for subscribing.");
        } else {
            alert("Please enter a valid email address.");
        }
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});