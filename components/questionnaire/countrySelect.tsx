import useCountry from '@/lib/hooks/useCountry';
import { Country, State } from '@/lib/schema/interfaces/country.interface';
import { ObjAnswer, SelectAnswerDTO } from '@/lib/schema/interfaces/questionnaire.interface';
import React, { useEffect, useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { UnderlinedTextField } from '../ui/textField';
import { MdClose } from 'react-icons/md';
import { ButtonContained, ButtonOutlined } from '../ui/buttons';
import Loader from '../ui/loader';

interface Props {
  selectAnswer(data: SelectAnswerDTO): void;
  question: string;
  prev?(): void;
  nextIndex?: ObjAnswer['nextIndex'];
}

const CountrySelect = (props: Props) => {
  const [answer, setAnswer] = useState<string>('');
  const [countryOptionsOpen, setCountryOptionsOpen] = useState<boolean>(false);
  const [stateOptionsOpen, setStateOptionsOpen] = useState<boolean>(false);
  const [country, setCountry] = useState<Country | undefined>(undefined);
  const [state, setState] = useState<State | undefined>(undefined);

  const { countries, getCountryFlag, getCountryStates, states } = useCountry();

  const submit = () => {
    props.selectAnswer({
      question: props.question,
      answer,
      nextIdx: props.nextIndex,
    });

    setCountry(undefined);
    setState(undefined);
    setCountryOptionsOpen(false);
    setStateOptionsOpen(false);
    setAnswer('');
  };

  return (
    <>
      {' '}
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
          <CountrySelectFilter
            close={() => setCountryOptionsOpen(false)}
            onSelect={(country: Country) => {
              setCountry(country);
              setCountryOptionsOpen(false);
              getCountryStates(country?.id);
            }}
          />
        )}
      </div>
      {/* State */}
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
            <StateSelectFilter
              onSelect={(state) => {
                setState(state);
                setStateOptionsOpen(false);
                setAnswer(`${state?.name}, ${(country as any)?.name}`);
              }}
              close={() => setStateOptionsOpen(false)}
              states={states}
            />
          )}
        </div>
      )}
      <div className="flex items-center gap-3 flex-wrap mt-5">
        {props.prev && (
          <ButtonOutlined onClick={props.prev} className="max-w-[120px] !rounded-full">
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

export default CountrySelect;

interface CountrySelectProps {
  onSelect(country: Country): void;
  close(): void;
}

export const CountrySelectFilter = (props: CountrySelectProps) => {
  const [search, setSearch] = useState<string>('');

  const { getCountryFlag, filteredCountries, searchCountry } = useCountry();

  useEffect(() => {
    searchCountry(search);
  }, [search]);

  return (
    <div className="fixed md:absolute md:bottom-3 left-0 max-md:top-0 bg-[#f1f1f1] z-[10] rounded-md w-full max-md:w-screen max-md:h-screen border-2">
      <header className="flex justify-between gap-2 border-b-2 items-center p-2">
        <UnderlinedTextField
          InputProps={{
            className: '!border-b-0 !pb-2 !bg-transparent',
            placeholder: 'Search Country....',
            value: search,
            onChange(e) {
              setSearch(e.target.value);
            },
          }}
        />
        <MdClose onClick={props.close} size={23} color="#333" cursor={'pointer'} />
      </header>

      <div className="max-h-[90vh] md:max-h-[300px] overflow-y-scroll flex items-center justify-center flex-col">
        {filteredCountries?.map((country: Country, idx) => {
          return (
            <article
              onClick={() => props.onSelect(country)}
              key={idx}
              className="flex items-center p-2 gap-4 cursor-pointer hover:bg-white w-full"
            >
              <img src={getCountryFlag(country?.iso2)} className="w-[35px] h-[35px]" />
              <p className="inline-block ml-3">{country?.name}</p>
            </article>
          );
        })}

        {search && filteredCountries.length === 0 && (
          <div className="h-[280px] flex items-center jusitfy-center">
            {' '}
            <p className="p-2 text-center font-semibold text-[#666]">Countries unavailable</p>
          </div>
        )}

        {!search && filteredCountries.length === 0 && (
          <div className="h-[280px] flex items-center justify-center">
            <Loader loading={true} loadingText="Fetching Countries" />
          </div>
        )}
      </div>
    </div>
  );
};

interface StateSelectProps {
  onSelect(state: State): void;
  close(): void;
  states: State[];
}

const StateSelectFilter = (props: StateSelectProps) => {
  const [search, setSearch] = useState<string>('');
  const [filteredStates, setFilteredStates] = useState<State[]>(props.states);

  const searchStates = async (search: string) => {
    search = search.trim();

    if (search === '') {
      setFilteredStates(props.states);
    } else {
      setFilteredStates((states) => states?.filter((state) => state.name.toLowerCase().includes(search.toLowerCase())));
    }
  };

  useEffect(() => {
    searchStates(search);
  }, [search]);

  useEffect(() => {
    setSearch('');
    setFilteredStates(props.states);
  }, [props.states]);

  return (
    <div className="fixed md:absolute md:bottom-3 left-0 max-md:top-0 bg-[#f1f1f1] z-[10] rounded-md w-full max-md:w-screen max-md:h-screen border-2">
      <header className="flex justify-between gap-2 border-b-2 items-center p-2">
        <UnderlinedTextField
          InputProps={{
            className: '!border-b-0 !pb-2 !bg-transparent',
            placeholder: 'Search States....',
            value: search,
            onChange(e) {
              setSearch(e.target.value);
            },
          }}
        />
        <MdClose onClick={props.close} size={23} color="#333" cursor={'pointer'} />
      </header>

      <div className="max-h-[90vh] md:max-h-[300px] overflow-y-scroll  flex-col">
        {filteredStates?.map((state: State, idx) => {
          return (
            <article
              onClick={() => props.onSelect(state)}
              key={idx}
              className="flex items-center p-2 gap-4 cursor-pointer hover:bg-white w-full"
            >
              <p className="inline-block ml-3">{state?.name}</p>
            </article>
          );
        })}

        {filteredStates.length === 0 && (
          <div className="h-[280px] flex items-center justify-center">
            <p className="p-2 text-center font-semibold text-[#666]">States unavailable</p>
          </div>
        )}
      </div>
    </div>
  );
};
