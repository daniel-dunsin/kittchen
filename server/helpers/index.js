require('dotenv').config();
const { renderFile } = require('ejs');
const nodemailer = require('nodemailer');
const path = require('path');

class AppError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS,
  },
});

async function sendMail(mailOptions) {
  try {
    await transporter.sendMail({
      from: process.env.NODEMAILER_USER,
      ...mailOptions,
    });
  } catch (error) {
    throw new AppError(400, error);
  }
}

function renderTemplate(file, data) {
  const filepath = path.join(__dirname, '../templates', file);

  let html = '';

  renderFile(filepath, data, (err, str) => {
    if (err) throw new AppError(500, 'unable to render file');
    html = str;
  });

  return html;
}

module.exports = {
  AppError,
  renderTemplate,
  sendMail,
};
