import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstName, lastName, email, phone, message } = req.body;

    // Configure the email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use your email service
      auth: {
        user: "nbreneman1@gmail.com", // Replace with your email
        pass: "Dor50945@", // Replace with your email password or app-specific password
      },
    });

    // Configure the email options
    const mailOptions = {
      from: email,
      to: "nick@apiaryconnect.com.com",
      subject: `Contact Form Submission from ${firstName} ${lastName}`,
      text: `You have a new message:\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
