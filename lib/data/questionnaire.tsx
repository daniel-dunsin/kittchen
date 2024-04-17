export interface Questionnaire {
  question: string;
  isObj: boolean;
  answers?: { text: string; nextIndex?: number | 'submit' }[];
  theoryPlaceholder?: string;
  selectCountry?: boolean;
  isPhoneNumber?: boolean;
}

export const questions: Questionnaire[] = [
  {
    question: 'What was your previous experience in the food/restaurant industry?',
    isObj: true,
    answers: [
      { text: 'I currently work in the restaurant industry.', nextIndex: 1 },
      { text: 'I am new to this industry', nextIndex: 3 },
      { text: " I want to work with Kittchen's", nextIndex: 'submit' },
    ],
  },
  {
    question: 'What position do you hold in the restaurant industry currently?',
    isObj: true,
    answers: [
      { text: 'I own a restaurant', nextIndex: 2 },
      { text: 'I own a franchise/ I am a franchisee', nextIndex: 2 },
      { text: 'I  manage a restaurant', nextIndex: 3 },
      { text: 'I work as a Chief/cook in a restaurant.', nextIndex: 3 },
    ],
  },
  {
    question: 'What kind of restaurant are you working with at the moment?',
    isObj: true,
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
    isObj: true,
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
    isObj: false,
    selectCountry: true,
  },
  {
    question: 'Awesome! Describe the service you would like to provide',
    isObj: false,
  },

  {
    question: "Awesome, what's your full name?",
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
    isPhoneNumber: true,
  },
];
