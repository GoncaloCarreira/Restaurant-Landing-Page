document.addEventListener('DOMContentLoaded', () => {

    const messageButton = document.getElementById('message-btn');
    const messageForm = document.getElementById('message-form');

    messageButton.addEventListener('click', (event) => {

        const nameInput = document.getElementById('exampleInputName').value;
        const emailInput = document.getElementById('exampleInputEmail').value;
        const msgInput = document.getElementById('exampleInputMessage').value;

        event.preventDefault();

        switch (true) {
            case isValidName(nameInput) && isValidEmail(emailInput) && msgInput !== '':
                alert("Message received! We'll answer as soon as possible.");
                messageForm.reset();
                break;
            case !isValidName(nameInput) && !isValidEmail(emailInput):
                alert('Please enter a valid name and email address.');
                break;
            case !isValidName(nameInput):
                alert('Please enter a valid name.');
                break;
            case !isValidEmail(emailInput):
                alert('Please enter a valid email address.');
                break;
            default:
                alert('Please enter a message.');
        }


    })

    isValidName = (name) => {
        const nameRegex = /^[a-zA-Z\s']+$/;
        return nameRegex.test(name);
    };

    isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});