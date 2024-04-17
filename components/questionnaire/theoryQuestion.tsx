'use client';
import React, { useState } from 'react';
import ContentBox from './contentBox';
import { UnderlinedTextField } from '../ui/textField';
import { ButtonContained } from '../ui/buttons';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import useCountry from '@/lib/hooks/useCountry';
import { ICountryData, getEmojiFlag } from 'countries-list';
import { Country, State } from '@/lib/schema/interfaces/country.interface';

interface Props {
  multiline?: boolean;
  placeholder?: string;
  question: string;
  onSubmit(question: string, answer: string): void;
  selectCountry?: boolean;
  isPhoneNumber?: boolean;
}

const TheoryQuestion = (props: Props) => {
  const [answer, setAnswer] = useState<string>('');
  const [countryOptionsOpen, setCountryOptionsOpen] = useState<boolean>(false);
  const [stateOptionsOpen, setStateOptionsOpen] = useState<boolean>(false);
  const [country, setCountry] = useState<Country | undefined>();
  const [state, setState] = useState<State | undefined>();

  const { countries, getCountryFlag, getCountryStates, states } = useCountry();

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
          <>
            <div className="relative">
              <header
                className="justify-between flex items-center border-b-[1.5px] p-3 hover:bg-[#f7f7f7] cursor-pointer"
                onClick={() => {
                  setCountryOptionsOpen(!countryOptionsOpen);
                  setStateOptionsOpen(false);
                }}
              >
                <p>{country?.name || 'Select Country'}</p>
                <div>{countryOptionsOpen ? <BsChevronUp size={24} /> : <BsChevronDown size={24} />}</div>
              </header>

              {countryOptionsOpen && (
                <div className="absolute bottom-[80%] left-0 bg-[#f4f4f4] rounded-xl shadow-md max-h-[200px] overflow-y-scroll">
                  {countries?.map((country: Country, index) => {
                    return (
                      <article
                        onClick={() => {
                          setCountry(country);
                          setCountryOptionsOpen(false);
                          getCountryStates(country.id);
                          setState(undefined);
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

            {country && (
              <div className="relative mt-5">
                <header
                  className="justify-between flex items-center border-b-[1.5px] p-3 hover:bg-[#f7f7f7] cursor-pointer"
                  onClick={() => {
                    setStateOptionsOpen(!stateOptionsOpen);
                    setCountryOptionsOpen(false);
                  }}
                >
                  <p>{state?.name || 'Select State'}</p>
                  <div>{stateOptionsOpen ? <BsChevronUp size={24} /> : <BsChevronDown size={24} />}</div>
                </header>

                {stateOptionsOpen && (
                  <div className="absolute bottom-[80%] left-0 bg-[#f4f4f4] rounded-xl shadow-md max-h-[200px] overflow-y-scroll">
                    {states?.map((state: State, index) => {
                      return (
                        <article
                          onClick={() => {
                            setState(state);
                            setStateOptionsOpen(false);
                            setAnswer(`${state?.name}, ${country?.name}`);
                          }}
                          key={index}
                          className="flex items-center gap-3 w-full p-2 cursor-pointer hover:bg-white"
                        >
                          {state?.name}
                        </article>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </>
        )}

        {props?.isPhoneNumber && (
          <div>
            <div className=" p-3 flex items-center gap-4">
              <img src={getCountryFlag(country?.iso2)} alt="" className="w-[40px] h-[40px]" />
              <UnderlinedTextField
                InputProps={{
                  type: 'number',
                  placeholder: `+${country?.phone_code}....`,
                  className: `placeholder:text-[1.1rem] text-[1.1rem] md:placeholder:text-[1.3rem] !pl-0  md:text-[1.3rem]`,
                  value: answer,
                  onChange(e) {
                    setAnswer(e.target.value);
                  },
                }}
              />
            </div>
          </div>
        )}

        {answer && <ButtonContained className="mt-5 !rounded-full max-w-[120px]">Continue</ButtonContained>}
      </form>
    </ContentBox>
  );
};

export default TheoryQuestion;
