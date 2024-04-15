interface Questionnaire {
  question: string;
  isObj: boolean;
  answers?: string[];
  theoryPlaceholder?: string;
}

export const questions: Questionnaire[] = [
  {
    question: 'What was your previous experience in the food/restaurant industry?',
    isObj: true,
    answers: ['I currently work in the restaurant industry.', 'I am new to this industry', " I want to work with Kittchen's"],
  },
  {
    question: 'What position do you hold in the restaurant industry currently?',
    isObj: true,
    answers: [
      'I own a restaurant',
      'I own a franchise/ I am a franchisee',
      'I  manage a restaurant',
      'I work as a Chief/cook in a restaurant.',
    ],
  },
  {
    question: 'What kind of restaurant are you working with at the moment?',
    isObj: true,
    answers: ['Brick and mortar ', 'Catering/meal preparation', 'Food truck', 'Fast food', 'Others'],
  },

  {
    question: "What's your full name?",
    isObj: false,
  },

  {
    question: 'Which of this best describes you?',
    isObj: true,
    answers: [
      "I need a job, i want to work with Kittchen's ",
      'I want to propose a commercial partnership; e.g, supply food items, logistics, etc.',
      'I have a property [sell/lease] . I would like to give you more information on this.',
    ],
  },

  {
    question: 'Awesome! Describe where you would like to work',
    isObj: false,
  },

  {
    question: 'Awesome! Describe the service you would like to provide',
    isObj: false,
  },

  {
    question: "What's your email address? We would like to get in touch with you",
    isObj: false,
    theoryPlaceholder: 'Enter your email here...',
  },

  {
    question: 'We would like to contact you further on this, please add your phone number here',
    isObj: false,
    theoryPlaceholder: '+234....',
  },

  {
    question: "When will you like to start your virtual Kittchen's.",
    isObj: true,
    answers: [
      'As soon as possible',
      'In the next next 30 days',
      'Between 2 to 6 months',
      'Between 6 to 12 months',
      'I think more than a year',
      'I am not sure yet',
    ],
  },

  {
    question: 'What is the country or region you will like to start your virtual kitchen?',
    isObj: false,
  },
];
