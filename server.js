const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post('/send-email', async (req, res) => {
    try {
        const { to, subject, message } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: '*************@gmail.com',  // Replace with your Gmail email
                pass: '***'         // Replace with your Gmail password
            }
        });

        const mailOptions = {
            from: '',
            to,
            subject,
            text: message
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info);

        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
