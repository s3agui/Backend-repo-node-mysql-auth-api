import nodemailer from 'nodemailer';

export default async function sendEmail({ to, subject, html, from = process.env.EMAIL_FROM }: any) {
    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    await transport.sendMail({ from, to, subject, html });
}