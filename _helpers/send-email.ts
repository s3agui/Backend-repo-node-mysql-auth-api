import nodemailer from 'nodemailer';
import config from '../config.json';

export default async function sendEmail({to, subject, html, from = config.emailFrom}: any) {
    const transport = nodemailer.createTransport(config.smtpOptions);
    await transport.sendMail({ from, to, subject, html });

}