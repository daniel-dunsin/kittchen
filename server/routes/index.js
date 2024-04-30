const { Router } = require('express');
const nodemailer = require('nodemailer');
const Questionnaire = require('../models/questionnaire');
const { sendMail, renderTemplate } = require('../helpers');
require('dotenv').config();

const router = Router();

router.post('/submit-questionnaire', async (req, res, next) => {
  try {
    const submissions = req.body.submissions;
    const email = req.body.email;

    const questionnaire = await Questionnaire.create({ submissions });

    await sendMail({
      to: 'info@kittchens.com',
      subject: 'NEW QUESTIONNAIRE SUBMISSION',
      html: renderTemplate('questionnaire-submission.ejs', { submissions }),
    });

    if (email) {
      await sendMail({
        to: email,
        subject: "Welcome to Kittchen's",
        html: renderTemplate('submission-received.ejs', {}),
      });
    }

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
