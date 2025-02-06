document.querySelector('form').addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Prepare data to send to backend
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
            // Store the JWT token in localStorage
            localStorage.setItem('jwtToken', responseData.token);  // Assuming the token is in responseData.token

            alert('Login successful!');
            window.location.href = '/home/index.html';  // Redirect to the main/home page after login
        } else {
            // Show error if login fails
            alert('Error: ' + responseData.message);
        }
    } catch (error) {
        console.error('An error occurred:', error);
        alert('An error occurred. Please try again.');
    }
});
