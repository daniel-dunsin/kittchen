export interface Questionnaire {
  question: string;
  type: QuestionType;
  // for only obj
  answers?: ObjAnswer[];
  theoryNextIndex?: number | 'submit';
  isEmail?: boolean;
}

export enum QuestionType {
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
  THEORY = 'THEORY',
  COUNTRY_SELECT = 'COUNTRY_SELECT',
  PHONE_NUMBER = 'PHONE_NUMBER',
}

export interface ObjAnswer {
  text: string;
  nextIndex: number | 'submit';
}

export interface SelectAnswerDTO {
  question: string;
  answer: string;
  nextIdx?: ObjAnswer['nextIndex'];
}
