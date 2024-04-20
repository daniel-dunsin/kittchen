import { ObjAnswer, SelectAnswerDTO } from '@/lib/schema/interfaces/questionnaire.interface';
import React, { useState } from 'react';
import { ButtonContained, ButtonOutlined } from '../ui/buttons';

interface Props {
  answers?: ObjAnswer[];
  question: string;
  selectAnswer: (data: SelectAnswerDTO) => void;
  prev?(): void;
}

const MultipleChoice = (props: Props) => {
  const [answer, setAnswer] = useState<ObjAnswer | undefined>(undefined);

  const reset = () => {
    setAnswer(undefined);
  };

  const submit = () => {
    props.selectAnswer({
      question: props.question,
      answer: answer?.text!,
      nextIdx: answer?.nextIndex as number,
    });
    reset();
  };

  return (
    <>
      <div className="my-4 md:max-h-[250px] overflow-y-scroll">
        {props?.answers?.map((_answer, index) => {
          return (
            <article
              onClick={() => {
                setAnswer(_answer);
              }}
              className={`rounded-xl text-[.85rem] border-2 py-2 px-4 my-3 md:max-w-[400px] cursor-pointer transition-all duration-100 ${
                answer?.text === _answer.text && '!bg-main-gradient !text-white border-main'
              }`}
              key={index}
            >
              <span
                className={`inline-block align-middle w-[15px] h-[15px] rounded-full mr-3 ${
                  answer?.text === _answer.text ? 'bg-white' : 'bg-gray-300 '
                }`}
              ></span>
              {_answer.text}
            </article>
          );
        })}
      </div>

      <div className="flex items-center gap-3 flex-wrap mt-5">
        {props.prev && (
          <ButtonOutlined
            onClick={() => {
              props.prev?.();
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

export default MultipleChoice;
