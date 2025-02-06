document.querySelector('form').addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Prepare data to send to the backend
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
            const errorData = await response.json(); // Parse the error response
            if (errorData.message === 'User already exists. Please log in.') {
                // Redirect to the login page if user already exists
                alert('User already exists. Redirecting to login page...');
                window.location.href = '/signIn/signIn.html'; // Adjust URL to your login page
            } else {
                alert('Error: ' + errorData.message);
            }
        } else {
            // Successful signup
            alert('User created successfully!');
            window.location.href = '/signIn/signIn.html'; // Redirect to login after successful signup
        }
    } catch (error) {
        console.error('An error occurred:', error);
        alert('An error occurred. Please try again.');
    }
});
