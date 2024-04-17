'use client';
import React, { useState } from 'react';
import ContentBox from './contentBox';
import { ButtonContained } from '../ui/buttons';
import { Questionnaire } from '@/lib/data/questionnaire';

interface Props {
  question: string;
  answers: Questionnaire['answers'];
  onSubmit(question: string, answer: string, nextIndex?: number | 'submit'): void;
}

const ObjQuestion = (props: Props) => {
  const [answer, setAnswer] = useState<string>('');
  const [nextIndex, setNextIndex] = useState<number | 'submit' | undefined>();

  const selectAnswer = (_answer: string, index?: number | 'submit') => {
    if (answer === _answer) {
      setAnswer('');
      setNextIndex(undefined);
    } else {
      setAnswer(_answer);
      setNextIndex(index);
    }
  };

  return (
    <ContentBox>
      <h1 className="text-main text-[1.1rem] md:text-[1.7rem] max-w-[400px]">{props?.question}</h1>

      <div className="my-4 max-h-[250px] overflow-y-scroll">
        {props?.answers?.map((_answer, index) => {
          return (
            <article
              onClick={() => selectAnswer(_answer.text, _answer.nextIndex)}
              className={`rounded-xl text-[.85rem] border-2 py-2 px-4 my-3 md:max-w-[400px] cursor-pointer transition-all duration-100 ${
                answer === _answer.text && '!bg-main-gradient !text-white border-main'
              }`}
              key={index}
            >
              <span
                className={`inline-block align-middle w-[15px] h-[15px] rounded-full mr-3 ${
                  answer === _answer.text ? 'bg-white' : 'bg-gray-300 '
                }`}
              ></span>
              {_answer.text}
            </article>
          );
        })}
      </div>

      {answer && (
        <ButtonContained
          className="mt-5 !rounded-full max-w-[120px]"
          onClick={() => props?.onSubmit(props?.question, answer, nextIndex)}
        >
          Continue
        </ButtonContained>
      )}
    </ContentBox>
  );
};

export default ObjQuestion;
