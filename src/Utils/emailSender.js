const whois = require('node-whois');
const cron = require('node-cron');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const nodemailer = require('nodemailer');
const domainController = require('./Controllers/domainController');

// Set up the transporter for sending emails (configure with your SMTP details)
const transporter = nodemailer.createTransport({
  host: 'your_smtp_host',
  port: 587,
  secure: false,
  auth: {
    user: 'your_email@example.com',
    pass: 'your_email_password',
  },
});

// Set up the cron job to run daily at a specific time (e.g., midnight)
cron.schedule('0 0 * * *', async () => {
  try {
    await domainController.extractAndEmailWHOISData();
    transporter.sendMail();
  } catch (error) {
    console.error('Error during extraction and email:', error);
  }
});

module.exports = {
  transporter
}