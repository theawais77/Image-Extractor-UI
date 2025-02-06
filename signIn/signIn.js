document.querySelector('form').addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Prepare data to send to the backend
    const data = { email, password };

    try {
        const response = await fetch('http://localhost:3000/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const responseData = await response.json();

        if (response.ok) {
            // Successful login
            alert('Login successful!');
            window.location.href = '/home/index.html'; // Redirect to the dashboard or home page after login
        } else {
            // Show the error message if the login fails
            alert('Error: ' + responseData.message);
        }
    } catch (error) {
        console.error('An error occurred:', error);
        alert('An error occurred. Please try again.');
    }
});
