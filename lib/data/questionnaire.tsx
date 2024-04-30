import { QuestionType, Questionnaire } from '../schema/interfaces/questionnaire.interface';

export const questions: Questionnaire[] = [
  {
    question: 'What was your previous experience in the food/restaurant industry?',
    type: QuestionType.MULTIPLE_CHOICE,
    answers: [
      { text: 'I currently work in the restaurant industry.', nextIndex: 1 },
      { text: 'I am new to this industry', nextIndex: 3 },
      { text: " I want to work with Kittchen's", nextIndex: 11 },
    ],
  },
  {
    question: 'What position do you hold in the restaurant industry currently?',
    type: QuestionType.MULTIPLE_CHOICE,

    answers: [
      { text: 'I own a restaurant', nextIndex: 2 },
      { text: 'I own a franchise/ I am a franchisee', nextIndex: 2 },
      { text: 'I  manage a restaurant', nextIndex: 3 },
      { text: 'I work as a Chief/cook in a restaurant.', nextIndex: 3 },
    ],
  },
  {
    question: 'What kind of restaurant are you working with at the moment?',
    type: QuestionType.MULTIPLE_CHOICE,
    answers: [
      { text: 'Brick and mortar ', nextIndex: 3 },
      { text: 'Catering/meal preparation', nextIndex: 3 },
      { text: 'Food truck', nextIndex: 3 },
      { text: 'Fast food', nextIndex: 3 },
      { text: 'Others', nextIndex: 3 },
    ],
  },

  {
    question: "When will you like to start your virtual Kittchen's.",
    type: QuestionType.MULTIPLE_CHOICE,
    answers: [
      { text: 'As soon as possible', nextIndex: 4 },
      { text: 'In the next next 30 days', nextIndex: 4 },
      { text: 'Between 2 to 6 months', nextIndex: 4 },
      { text: 'Between 6 to 12 months', nextIndex: 4 },
      { text: 'I think more than a year', nextIndex: 4 },
      { text: 'I am not sure yet', nextIndex: 4 },
    ],
  },

  {
    question: 'What is the country or region you will like to start your virtual kitchen?',
    type: QuestionType.COUNTRY_SELECT,
    theoryNextIndex: 5,
  },

  {
    question: 'What budget are you looking at starting with for your virtual kitchen?',
    type: QuestionType.MULTIPLE_CHOICE,
    answers: [
      { text: 'Less than  NGN 1,000,000', nextIndex: 6 },
      { text: 'NGN 5,000,000 to 10,000,000', nextIndex: 6 },
      { text: 'NGN 10,000,000 to 20,000,000', nextIndex: 6 },
      { text: 'NGN 20,000,000 to 50,000,000', nextIndex: 6 },
      { text: 'NGN 50,000,000 and above ', nextIndex: 6 },
      { text: "I don't know yet", nextIndex: 6 },
    ],
  },

  {
    question: 'How many locations do you want to operate from at the moment?',
    type: QuestionType.THEORY,
    theoryNextIndex: 7,
  },
  {
    question: "What's the name of your resturant",
    type: QuestionType.THEORY,
    theoryNextIndex: 8,
  },

  {
    question: "Awesome, what's your full name?",
    type: QuestionType.THEORY,
    theoryNextIndex: 9,
  },

  {
    question: "What's your email address? We would like to get in touch with you",
    type: QuestionType.THEORY,
    theoryNextIndex: 10,
    isEmail: true,
  },

  {
    question: 'We would like to contact you further on this, please add your phone number here',
    type: QuestionType.PHONE_NUMBER,
    theoryNextIndex: 'submit',
  },

  {
    question: "What's your full name?",
    type: QuestionType.THEORY,
    theoryNextIndex: 12,
  },

  {
    question: 'Which Objective best describes your interests?',
    type: QuestionType.MULTIPLE_CHOICE,
    answers: [
      { text: "I want to work with Kittchen's (deliveries, administrative services, cleaning, others)", nextIndex: 13 },
      { text: "I'd like to propose a commercial partnership (raw materials supplier, logistics, others)", nextIndex: 16 },
      { text: "I have a property (sell/lease) and I'd like to give you more information", nextIndex: 17 },
    ],
  },

  {
    question: "Describe the area you'd like to work at",
    type: QuestionType.THEORY,
    theoryNextIndex: 14,
  },

  {
    question: "What's your email address? We would like to get in touch with you",
    type: QuestionType.THEORY,
    theoryNextIndex: 15,
    isEmail: true,
  },

  {
    question: "Now, What's your phone number",
    type: QuestionType.PHONE_NUMBER,
    theoryNextIndex: 'submit',
  },

  {
    question: "Please describe the type of services you'll like to provide",
    type: QuestionType.THEORY,
    theoryNextIndex: 14,
  },

  {
    question: 'Great! Do you have more information about the property?',
    type: QuestionType.THEORY,
    theoryNextIndex: 14,
  },
];
