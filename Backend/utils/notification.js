const nodemailer = require("nodemailer");


//! ============> NodeMailer utils

const transporter = nodemailer.createTransport({
    service: "gmail",
     host: 'smtp.gmail.com',
   port: 465,
   secure: true,
    auth: {
        user: 'bcs.legal.services.official@gmail.com',
        pass: 'etklvlfncmmdjmia'
    }
});

//! ===============> Send confirmation emails

transporter.verify(function(error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log("Nodemailer is working correctly!");
    }
});
const sendEmail = async (htmlBody) => {
        const mailOptions = {
            from: "bcs.legal.services.official@gmail.com",
            to: email,
            subject: "Verify your email",
            html: htmlBody, // html body
        };
        await transporter.sendMail(mailOptions);
}

module.exports = sendEmail;