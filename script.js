// Change background color on button click
document.getElementById('changeColorBtn').addEventListener('click', function() {
    document.body.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Fetch data from an example API
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        document.getElementById('apiData').innerText = `Title: ${data.title}\nBody: ${data.body}`;
    })
    .catch(error => console.error('Error fetching data:', error));

// Form validation and submission
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (validateForm(name, email)) {
        document.getElementById('formMessage').innerText = 'Form submitted successfully!';
        document.getElementById('formMessage').style.backgroundColor = '#4CAF50';
        document.getElementById('formMessage').style.color = 'white';
    }
});

function validateForm(name, email) {
    if (name.trim() === '' || email.trim() === '') {
        document.getElementById('formMessage').innerText = 'Please fill out all fields.';
        document.getElementById('formMessage').style.backgroundColor = '#f44336';
        document.getElementById('formMessage').style.color = 'white';
        return false;
    }
    return true;
}
