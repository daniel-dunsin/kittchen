import useCountry from '@/lib/hooks/useCountry';
import { Country } from '@/lib/schema/interfaces/country.interface';
import { ObjAnswer, SelectAnswerDTO } from '@/lib/schema/interfaces/questionnaire.interface';
import React, { useEffect, useState } from 'react';
import { BiChevronDown, BiChevronUp, BiLoaderAlt } from 'react-icons/bi';
import { UnderlinedTextField } from '../ui/textField';
import { CountrySelectFilter } from './countrySelect';
import { ButtonContained, ButtonOutlined } from '../ui/buttons';

interface Props {
  question: string;
  selectAnswer(data: SelectAnswerDTO): void;
  nextIndex?: ObjAnswer['nextIndex'];
  prev?(): void;
}

const PhoneNumber = (props: Props) => {
  const [country, setCountry] = useState<Country | undefined>(undefined);
  const [answer, setAnswer] = useState<string>('');
  const [optionsOpen, setOptionsOpen] = useState<boolean>(false);

  const { getCountryFlag, countries } = useCountry();

  const reset = () => {
    setCountry(undefined);
    setOptionsOpen(false);
    setAnswer('');
  };

  const submit = () => {
    props.selectAnswer({
      question: props.question,
      answer: answer,
      nextIdx: props.nextIndex,
    });
    reset();
  };

  useEffect(() => {
    setCountry(countries[0]);
  }, [countries]);

  return (
    <>
      <div className="flex items-center gap-2 relative">
        {optionsOpen && (
          <CountrySelectFilter
            close={() => setOptionsOpen(false)}
            onSelect={(country) => {
              setCountry(country);
              setOptionsOpen(false);
            }}
          />
        )}

        <div className="flex items-center">
          {country ? (
            <img src={getCountryFlag(country?.iso2)} className="w-[35px] h-[35px]" />
          ) : (
            <BiLoaderAlt className="animate-spin" />
          )}

          <span onClick={() => setOptionsOpen(!optionsOpen)}>
            {optionsOpen ? <BiChevronUp size={20} color="#333" /> : <BiChevronDown size={20} color="#333" />}
          </span>
        </div>

        <div className="flex-1">
          <UnderlinedTextField
            InputProps={{
              placeholder: country ? `+${country?.phone_code}...` : 'select country',
              value: answer,
              onChange(e) {
                setAnswer(e.target.value);
              },
            }}
          />
        </div>
      </div>

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

export default PhoneNumber;
