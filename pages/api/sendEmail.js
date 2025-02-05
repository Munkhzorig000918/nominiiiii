import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Only POST requests allowed' });
    }

    const { to, name, date, time, location, locationUrl } = req.body;

    if (!to || !name || !date || !time || !location || !locationUrl) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

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
                <h2 style="color: #ff5e78;">💖 You're Invited, ${name}! 💖</h2>
                <p style="color: #d63384; font-size: 18px;">It's a special date just for you! Here are the details:</p>
                <div style="background-color: #fff; padding: 15px; border-radius: 8px; display: inline-block; text-align: left;">
                    <p><strong>📅 Date:</strong> ${date}</p>
                    <p><strong>⏰ Time:</strong> ${time}</p>
                    <p><strong>📍 Location:</strong> ${location}</p>
                </div>
                <p style="color: #d63384; margin-top: 15px;">💌 Can't wait to see you there! 💌</p>
                <div style="margin-top: 20px;">
                    <a href="${locationUrl}" 
                       style="background-color: #ff5e78; color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none; font-weight: bold;">
                        View on Map 🗺️
                    </a>
                </div>
            </div>
        `;

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to,
            subject: "💌 Your Lovely Date Invitation! 💌",
            html: htmlContent,
        };

        await transporter.sendMail(mailOptions);
        return res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        return res.status(500).json({ message: 'Error sending email', error });
    }
}
