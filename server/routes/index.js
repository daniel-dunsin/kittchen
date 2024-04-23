const { Router } = require('express');
const nodemailer = require('nodemailer');
const Questionnaire = require('../models/questionnaire');
const { sendMail, renderTemplate } = require('../helpers');
require('dotenv').config();

const router = Router();

router.post('/submit-questionnaire', async (req, res, next) => {
  try {
    const reqBody = req.body;

    const questionnaire = await Questionnaire.create({ submissions: reqBody });

    await sendMail({
      to: 'adejaredaniel12@gmail.com',
      subject: 'NEW QUESTIONNAIRE SUBMISSION',
      html: renderTemplate('questionnaire-submission.ejs', { submissions: reqBody }),
    });

    res.status(201).json(questionnaire);
  } catch (error) {
    return next(error);
  }
});

router.get('/submissions', async (req, res, next) => {
  try {
    const data = await Questionnaire.find({}).sort({ createdAt: -1 });

    res.status(200).json(data);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
