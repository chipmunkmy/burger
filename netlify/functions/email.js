const nodemailer = require("nodemailer");

exports.handler = async function (event, context) {
    const body = JSON.parse(event.body);
    const customerEmail = body.email;
    const orders = body.orders;

    let total = 0;
    let emailContent = "We have received a new order: \n\n";

    orders.forEach((order) => {
        emailContent =
        emailContent +
        '${order.name} - ${order.quantity} pcs - ${order.price * order.quantity}\n';
        total = total + order.price * order.quantity; });

        emailContent = emailContent + '\n Total Amount: ${total.toFixed(2)}';

        const email = {
            from: "norhafizah.my@gmail.com",
            to: customerEmail,
            subject: "New Order Received",
            text: emailContent,
        };

        const mailer = nodemailer.createTransport({
            host: "smtp-relay.sendinblue.com",
            port: 587,
            secure: true,
            auth: {
                user: "apiKey",
                pass: process.env.apiKey,
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