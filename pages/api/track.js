import nodemailer from 'nodemailer';

export async function handler(req, res) {
  const ip = req.headers.get("x-forwarded-for") || req.ip || "unknown";
  const userAgent = req.headers.get("user-agent");

  console.log(`Visitor IP: ${ip}, User-Agent: ${userAgent}`);

  const { to } = req.body;
  try {
      const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASS,
          },
      });

      const htmlContent = `
          <div style="background-color: #ffe5ec; padding: 20px; text-align: center; border-radius: 10px; font-family: Arial, sans-serif;">
              <h2 style="color: #ff5e78;">Ip address: ${ip}! 💖</h2>
              <p style="color: #d63384; font-size: 18px;">User agent: ${userAgent}</p>
          </div>
      `;

      const mailOptions = {
          from: process.env.EMAIL_USER,
          to,
          subject: "TRACKER",
          html: htmlContent,
      };

      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
      return res.status(500).json({ message: 'Error sending email', error });
  }
}
