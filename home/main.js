const fileInput = document.getElementById('file-input');
const imagePreview = document.getElementById('image-preview');
const resultText = document.getElementById('result-text');
const loading = document.getElementById('loading');

fileInput.addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (file) {
        // Create a URL for the file
        const imageUrl = URL.createObjectURL(file);

        // Display the image preview using the URL
        imagePreview.style.display = 'block';
        imagePreview.src = imageUrl;

        // Process the image (you can send the URL or file to your backend)
        processImage(file, imageUrl);
    }
});

async function processImage(file, imageUrl) {
    loading.style.display = 'block';
    resultText.value = '';

    // Simulate sending the image URL to your backend
    console.log('Image URL:', imageUrl); // Log the URL for debugging

    // Simulate OCR processing with a timeout
    setTimeout(() => {
        // Replace this with actual OCR API call
        const mockText = "This is a simulation of extracted text.\nReplace this with actual OCR results from your backend.";
        resultText.value = mockText;
        loading.style.display = 'none';
    }, 2000);
}