const sendEmail = async(receiverEmail, subject, bodyText) => {
    return new Promise(
        async(resolve, reject) => {
            console.log(process.env.USER_EMAIL);
            try{
                // Create a nodemailer transporter
                const transporter = await nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                    user: process.env.USER_EMAIL,
                    pass: process.env.USER_EMAIL_PASS,
                    },
                });
                
                // Define email options
                const mailOptions = {
                    from: process.env.USER_EMAIL,
                    to: receiverEmail,
                    subject: subject,
                    text: bodyText,
                };
                
                // Send the email
                await transporter.sendMail(mailOptions);
                resolve();
            } catch{
                reject();
            }
        }
    )
};

module.exports = {
    sendEmail,

}

