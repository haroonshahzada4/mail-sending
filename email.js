const express = require("express");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 5000;





const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth: {
        user:"haroonzulkifl@gmail.com",
        pass:"Shahzada444",
    },
});

app.post('/text-mail', (req, res) => {
    const {to, subject, text } = req.body;
    const mailData = {
        from: "haroonzulkifl@gmail.com",
        to: "haroonzulkifl@gmail.com",
        subject: " mail send",
        text: "hello mail wala ",
    };

    transporter.sendMail(mailData, (error, info) => {
        if (error) {
            return console.log(error);
        }
        res.status(200).send({ message: "Mail send" });
    });
});
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});