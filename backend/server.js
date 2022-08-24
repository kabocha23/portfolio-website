const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;
// middleware
app.use(express.json());
app.use(cors());

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

app.get('/', (req, res) => {
    res.send("server.js is running on Heroku")
})

app.listen(PORT, () => {
    console.log(`Server is running on ${ PORT }`)
})

const transporter = nodemailer.createTransport({
    logger: true,
    debug: true,
    host:'smtp.gmail.com',
    port: 465,
    secure: false,
    auth: {
        type: 'OAuth2',
        user: process.env.REACT_APP_NODEMAILER_USER,
        pass: process.env.REACT_APP_NODEMAILER_KEY,
        clientId: process.env.REACT_APP_OAUTH_CLIENTID,
        clientSecret: process.env.REACT_APP_OAUTH_CLIENT_SECRET,
        refreshToken: process.env.REACT_APP_OAUTH_REFRESH_TOKEN,
    }

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
        subject: `Message from ${req.body.mailerState.name} (${req.body.mailerState.email})`,
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
