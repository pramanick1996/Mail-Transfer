function sendEmail() {
    const to = document.getElementById('to').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/send-email', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                alert('Email sent successfully!');
            } else {
                console.error('Error:', xhr.responseText);
                alert('Error sending email. Please check the console for details.');
            }
        }
    };

    const data = JSON.stringify({ to, subject, message });
    xhr.send(data);
}
