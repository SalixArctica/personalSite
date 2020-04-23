const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');
require('dotenv').config()

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const PORT = process.env.port || 7000
const api = express();

api.use(morgan('dev'));
api.use(cors());
api.use(bodyParser.json());

api.post('/api/contact', (req, res, next) => {

    let msg = {
        to: 'hank@tankcaster.dev',
        from: `mailbot@tankcaster.dev`,
        replyTo: req.body.email,
        subject: 'Form Message',
        text: `from: ${req.body.name},\n ${req.body.message}`,
        };

    sgMail.send(msg);

    res.status(200).send();
})

api.listen(PORT, () => {
    console.log(`listening on ${PORT}`) 
})