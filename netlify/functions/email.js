const nodemailer = require("nodemailer");
const sibTransport = require('nodemailer-sendinblue-transport');

transport = nodemailer.createTransport(sibTransport({
    apiKey: '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',
  }));

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