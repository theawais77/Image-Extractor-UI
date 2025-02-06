document.querySelector('form').addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Prepare data to send
    const data = { name, email, password };

    try {
        const response = await fetch('http://localhost:3000/users/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            // If the response status is not OK, show the error message
            const errorData = await response.json();
            alert('Error: ' + errorData.message);
        } else {
            // If the signup is successful
            alert('User created successfully!');
            // Redirect or clear form, as needed
        }
    } catch (error) {
        console.error('An error occurred:', error);
        alert('An error occurred. Please try again.');
    }
});
