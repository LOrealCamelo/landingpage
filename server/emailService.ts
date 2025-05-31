import nodemailer from 'nodemailer';
import { Contact } from '@shared/schema';
import { Inquiry } from '@shared/schema';

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'workwithloreal@gmail.com', // The email where we want to receive contact form submissions
    pass: process.env.EMAIL_PASSWORD // Password will need to be provided as an environment variable
  }
});

/**
 * Send email notification when a new contact form is submitted
 * @param contact The contact form data
 */
export const sendContactEmail = async (contact: Contact) => {
  try {
    // Email content
    const mailOptions = {
      from: `"Xpert AI Solutions Website" <noreply@xpertaisolutions.com>`,
      to: 'workwithloreal@gmail.com',
      subject: `New Contact Form Submission: ${contact.service}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${contact.name}</p>
        <p><strong>Email:</strong> ${contact.email}</p>
        <p><strong>Company:</strong> ${contact.company}</p>
        <p><strong>phone:</strong> ${contact.phone}</p>
        <p><strong>Service:</strong> ${contact.service}</p>
        <p><strong>Message:</strong></p>
        <p>${contact.message}</p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Contact form email sent successfully');
    return true;
  } catch (error) {
    console.error('Error sending contact form email:', error);
    return false;
  }
};

/**
 * Send email notification when a new inquiry is submitted
 * @param inquiry The inquiry form data
 */
export const sendInquiryEmail = async (inquiry: Inquiry) => {
  try {
    // Email content
    const mailOptions = {
      from: `"Xpert AI Solutions Website" <noreply@xpertaisolutions.com>`,
      to: 'workwithloreal@gmail.com',
      subject: `New Inquiry: ${inquiry.subject}`,
      html: `
        <h2>New Inquiry Submission</h2>
        <p><strong>Name:</strong> ${inquiry.name}</p>
        <p><strong>Email:</strong> ${inquiry.email}</p>
        <p><strong>phone:</strong> ${inquiry.phone}</p>
        ${inquiry.companyName ? `<p><strong>Company:</strong> ${inquiry.companyName}</p>` : ''}
        ${inquiry.phone ? `<p><strong>Phone:</strong> ${inquiry.phone}</p>` : ''}
        <p><strong>Subject:</strong> ${inquiry.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${inquiry.message}</p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Inquiry email sent successfully');
    return true;
  } catch (error) {
    console.error('Error sending inquiry email:', error);
    return false;
  }
};
