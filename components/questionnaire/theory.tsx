import { ObjAnswer, SelectAnswerDTO } from '@/lib/schema/interfaces/questionnaire.interface';
import React, { useState } from 'react';
import { UnderlinedTextField } from '../ui/textField';
import { ButtonContained, ButtonOutlined } from '../ui/buttons';

interface Props {
  question: string;
  selectAnswer(data: SelectAnswerDTO): void;
  nextIndex?: ObjAnswer['nextIndex'];
  prev?(): void;
  updateEmail?(email: string): void;
  isEmail?: boolean;
}

const Theory = (props: Props) => {
  const [answer, setAnswer] = useState<string>('');

  const reset = () => {
    setAnswer('');
  };

  const submit = () => {
    props.selectAnswer({
      question: props.question,
      answer,
      nextIdx: props.nextIndex,
    });

    if (props.isEmail) {
      props.updateEmail?.(answer);
    }

    reset();
  };

  return (
    <>
      <UnderlinedTextField
        InputProps={{
          type: props.isEmail ? 'email' : 'text',
          placeholder: 'Enter your answer here',
          required: true,
          className: `placeholder:text-[1.1rem] text-[1.1rem] md:placeholder:text-[1.3rem] !pl-0  md:text-[1.3rem]`,
          value: answer,
          onChange(e) {
            setAnswer(e.target.value);
          },
        }}
      />

      <div className="flex items-center gap-3 flex-wrap mt-5">
        {props.prev && (
          <ButtonOutlined
            onClick={() => {
              props?.prev?.();
              reset();
            }}
            className="max-w-[120px] !rounded-full"
          >
            Previous
          </ButtonOutlined>
        )}
        {answer && (
          <ButtonContained className="!rounded-full max-w-[120px]" onClick={submit}>
            Continue
          </ButtonContained>
        )}
      </div>
    </>
  );
};

export default Theory;
