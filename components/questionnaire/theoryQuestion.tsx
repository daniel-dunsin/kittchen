'use client';
import React, { useState } from 'react';
import ContentBox from './contentBox';
import { UnderlinedTextField } from '../ui/textField';
import { ButtonContained } from '../ui/buttons';

interface Props {
  multiline?: boolean;
  placeholder?: string;
  question: string;
  onSubmit(question: string, answer: string): void;
}

const TheoryQuestion = (props: Props) => {
  const [answer, setAnswer] = useState<string>('');

  return (
    <ContentBox>
      <h1 className="text-main text-[1.1rem] md:text-[1.7rem] max-w-[400px]">{props?.question}</h1>

      <form
        className="mt-6"
        onSubmit={(e) => {
          e.preventDefault();
          props.onSubmit(props?.question, answer);
          setAnswer('');
        }}
      >
        <UnderlinedTextField
          InputProps={{
            type: 'text',
            placeholder: props?.placeholder || 'Enter your answer here',
            className: `placeholder:text-[1.1rem] text-[1.1rem] md:placeholder:text-[1.3rem] !pl-0  md:text-[1.3rem]`,
            value: answer,
            onChange(e) {
              setAnswer(e.target.value);
            },
          }}
        />
        <ButtonContained className="mt-5 !rounded-full max-w-[120px]">Continue</ButtonContained>
      </form>
    </ContentBox>
  );
};

export default TheoryQuestion;
