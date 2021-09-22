import nodemailer from "nodemailer";

export const mail = (id) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "frstore@gmail.com",
      pass: "sunlite.1245209", // naturally, replace both with your real credentials or an application-specific password
    },
  });

  const mailOptions = {
    from: "frstore@gmail.com",
    to: "fahim1.618555@gmail.com",
    subject: "Invoices due",
    html: `<h1>Thank you for purchasing</h1>${id}`,
    attachments: [{ filename: "invoice.pdf", path: "./result.pdf" }],
    // attachments: [{ filename: "1.jpg", path: "./server/utils/1.jpg" }],
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
