const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const cors = require('cors');
// middleware
app.use(express.json());
app.use(cors());
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const port = 3001;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})

const transporter = nodemailer.createTransport({
    logger: true,
    debug: true,
    service:'gmail',
    port: 465,
    secure: false,
    auth: {
        type: 'OAuth2',
        user: process.env.REACT_APP_NODEMAILER_USER,
        pass: process.env.REACT_APP_NODEMAILER_KEY,
        clientId: process.env.REACT_APP_OAUTH_CLIENTID,
        clientSecret: process.env.REACT_APP_OAUTH_CLIENT_SECRET,
        refreshToken: process.env.REACT_APP_OAUTH_REFRESH_TOKEN,
    },
    debug: false,
    logger: true

})

transporter.verify((err, success) => {
    err
        ? console.log(err)
        : console.log(`server is ready to take our messages: ${success}`)
});

app.post('/send', (req, res) => {
    const mailOptions = {
        from: `${req.body.mailerState.email}`,
        to: process.env.REACT_APP_NODEMAILER_RECIPIENT,
        subject: `Message from ${req.body.mailerState.name}`,
        text: `${req.body.mailerState.message}`,
    };

    transporter.sendMail(mailOptions, (err, data) => {
        if(err) { 
            res.json({
                status: 'fail',
            })
        } else {
            console.log('Message sent');
            res.json({
                status: 'success',
            })
        }
    })   
})
