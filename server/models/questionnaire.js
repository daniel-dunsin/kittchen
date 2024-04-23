const { Schema, default: mongoose } = require('mongoose');

const QuestionnaireSchema = new Schema({
  submissions: [
    {
      question: {
        type: String,
        required: true,
      },
      answer: {
        type: String,
        required: true,
      },
    },
  ],
});

const Questionnaire = mongoose.model('Questionnaire', QuestionnaireSchema);

module.exports = Questionnaire;
