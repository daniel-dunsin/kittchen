'use client';
import React, { useState } from 'react';
import ContentBox from './contentBox';
import { UnderlinedTextField } from '../ui/textField';
import { ButtonContained } from '../ui/buttons';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import useCountry from '@/lib/hooks/useCountry';
import { getEmojiFlag } from 'countries-list';

interface Props {
  multiline?: boolean;
  placeholder?: string;
  question: string;
  onSubmit(question: string, answer: string): void;
  selectCountry?: boolean;
  isPhoneNumber?: boolean;
  close(): void;
}

const TheoryQuestion = (props: Props) => {
  const [answer, setAnswer] = useState<string>('');
  const [optionsOpen, setOptionsOpen] = useState<boolean>(false);

  const { countries, getCountryFlag } = useCountry();

  return (
    <ContentBox close={props.close}>
      <h1 className="text-main text-[1.1rem] md:text-[1.7rem] max-w-[400px]">{props?.question}</h1>

      <form
        className="mt-6"
        onSubmit={(e) => {
          e.preventDefault();
          props.onSubmit(props?.question, answer);
          setAnswer('');
        }}
      >
        {!props.selectCountry && !props.isPhoneNumber && (
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
        )}

        {props.selectCountry && (
          <div className="relative">
            <header
              className="justify-between flex items-center border-b-[1.5px] p-3 hover:bg-[#f7f7f7] cursor-pointer"
              onClick={() => {
                setOptionsOpen(!optionsOpen);
              }}
            >
              <p>{answer || 'Select Country'}</p>
              <div>{optionsOpen ? <BsChevronUp size={24} /> : <BsChevronDown size={24} />}</div>
            </header>

            {optionsOpen && (
              <div className="absolute bottom-[80%] left-0 bg-[#f4f4f4] rounded-xl shadow-md max-h-[200px] overflow-y-scroll">
                {countries?.map((country, index) => {
                  return (
                    <article
                      onClick={() => {
                        setAnswer(country?.name);
                        setOptionsOpen(false);
                      }}
                      key={index}
                      className="flex items-center gap-3 w-full p-2 cursor-pointer hover:bg-white"
                    >
                      <img alt={country?.name} src={getCountryFlag(country?.iso2)} className="w-[25px] h-[25px]" />
                      {country?.name}
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        )}
        {answer && <ButtonContained className="mt-5 !rounded-full max-w-[120px]">Continue</ButtonContained>}
      </form>
    </ContentBox>
  );
};

export default TheoryQuestion;
