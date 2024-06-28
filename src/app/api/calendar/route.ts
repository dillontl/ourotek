// @ts-ignore
import nodemailer from 'nodemailer';
import {NextRequest, NextResponse} from "next/server";

export default async function POST(req: NextRequest, res: NextResponse) {
        // @ts-ignore
    const { firstName, lastName, email, serviceType, otherService, summary, companyName, phoneNumber, appointmentDate, timezone } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'dillon@ourotek.com',
            subject: 'New Consultation Booking',
            text: `
                First Name: ${firstName}
                Last Name: ${lastName}
                Email: ${email}
                Service Type: ${serviceType === 'Other' ? otherService : serviceType}
                Summary: ${summary}
                Company Name: ${companyName}
                Phone Number: ${phoneNumber}
                Appointment Date: ${appointmentDate}
                Timezone: ${timezone}
            `,
        };

        try {
            await transporter.sendMail(mailOptions);
            // @ts-ignore
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error('Error sending email: ', error);
            // @ts-ignore
            res.status(500).json({ error: 'Error sending email' });
        }
}
