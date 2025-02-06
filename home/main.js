window.onload = function() {
    const token = localStorage.getItem('jwtToken');  // Get JWT token from localStorage

    if (!token) {
        // If no token found, redirect to login page
        window.location.href = '/signIn/signIn.html';  // Adjust path if necessary
    } else {
        // Optionally, you can verify if the token is valid here (e.g., by decoding it)
        // If you need more verification, like checking expiration, you can decode the token here
    }
};

const fileInput = document.getElementById('file-input');
const imagePreview = document.getElementById('image-preview');
const resultText = document.getElementById('result-text');
const loading = document.getElementById('loading');

fileInput.addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (file) {
        // Display the image preview
        const imageUrl = URL.createObjectURL(file);
        imagePreview.style.display = 'block';
        imagePreview.src = imageUrl;

        // Process the image by sending it to the backend
        processImage(file);
    }
});

async function processImage(file) {
    loading.style.display = 'block';
    resultText.value = '';

    const formData = new FormData();
    formData.append("image", file); 

    try {
        const response = await fetch("http://localhost:3000/upload", {
            method: "POST",
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`Failed to upload image: ${response.statusText}`);
        }

        const data = await response.json();  // Get the JSON response from backend
        console.log("OCR Result from backend:", data.text);
        resultText.value = data.text;
    } catch (error) {
        console.error("Error:", error.message);
        resultText.value = "Error processing the image.";
    } finally {
        loading.style.display = 'none';
    }
}
