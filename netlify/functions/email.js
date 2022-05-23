const nodemailer = require("nodemailer");

exports.handler = async function (event, context) {
    const body = JSON.parse(event.body);
    const customerEmail = body.email;
    const orders = body.orders;

    let total = 0;
    let emailContent = "We have received a new order: \n\n";

    orders.forEach((orders) => {
        emailContent =
        emailContent +
        '${orders.name} - ${orders.quantity} pcs - ${orders.price * orders.quantity}\n';
        total = total + orders.price * orders.quantity; });

        emailContent = emailContent + '\n Total Amount: ${total.toFixed(2)}';

        const email = {
            from: "norhafizah.my@gmail.com",
            to: customerEmail,
            subject: "New Order Received",
            text: emailContent,
        };

        const mailer = nodemailer.createTransport({
            host: 'in-v3.mailjet.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.MailJetAPIKey,
                pass: process.env.MailJetAPISecretKey
            }
        });

        try {
            await mailer.sendMail(email);
            return {
                statusCode: 200,
                body: JSON.stringify({
                    message: "Email sent successfully",
                }),
            };
        } catch (error) {
            console.log("Error sending email", error);
        }
    };