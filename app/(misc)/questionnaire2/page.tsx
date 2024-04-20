'use client';
import CountrySelect from '@/components/questionnaire/countrySelect';
import MultipleChoice from '@/components/questionnaire/multipleChoice';
import PhoneNumber from '@/components/questionnaire/phoneNumber';
import Theory from '@/components/questionnaire/theory';
import { questions } from '@/lib/data/questionnaire';
import { QuestionType, SelectAnswerDTO } from '@/lib/schema/interfaces/questionnaire.interface';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useMemo, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { toast } from 'react-toastify';

const Page = () => {
  const [questionIdx, setIdx] = useState<number>(0);
  const router = useRouter();
  const [answers, setAnswers] = useState<{ [question: string]: string }>({});
  //   to track questions answered
  const [indexStack, setIndexStack] = useState<number[]>([0]);

  const question = useMemo(() => questions[questionIdx], [questionIdx]);
  const prevExists = useMemo(() => questionIdx !== 0, [questionIdx]);

  const selectAnswer = (data: SelectAnswerDTO) => {
    setAnswers((prev) => {
      prev[data.question] = data.answer;
      return prev;
    });

    if (data.nextIdx === 'submit') {
      toast.success('Your information has been received successfully!');
      router.push('/');
    } else {
      setIdx(data.nextIdx || questionIdx + 1);
      setIndexStack([...indexStack, data.nextIdx || questionIdx + 1]);
    }
  };

  const prev = () => {
    const array = indexStack;

    array.pop();

    setIndexStack(array);
    setIdx(array[array.length - 1]);
  };

  console.log(indexStack);

  return (
    <section className="z-[10] bg-main-gradient w-screen h-screen flex items-center justify-center">
      <div
        className={`md:rounded-[10px] shadow-main bg-white border w-screen max-md:h-screen md:w-[95vw] md:max-w-[1200px] py-6 px-3 md:p-6`}
      >
        <header className="flex items-center gap-6 justify-between">
          <Image src={'/logo.png'} alt="logo" width={120} height={30} />
          <MdClose size={22} onClick={router.back} cursor={'pointer'} title="close" />
        </header>

        <div className="mt-6 px-4 md:px-10 py-6">
          <h1 className="text-main text-[1.1rem] md:text-[1.7rem] max-w-[400px] mb-5">{question?.question}</h1>

          {question?.type === QuestionType.MULTIPLE_CHOICE && (
            <MultipleChoice
              prev={prevExists ? prev : undefined}
              question={question?.question}
              answers={question?.answers}
              selectAnswer={selectAnswer}
            />
          )}

          {question?.type === QuestionType.THEORY && (
            <Theory
              prev={prevExists ? prev : undefined}
              question={question?.question}
              selectAnswer={selectAnswer}
              nextIndex={question?.theoryNextIndex}
            />
          )}

          {question?.type === QuestionType.COUNTRY_SELECT && (
            <CountrySelect
              question={question?.question}
              prev={prevExists ? prev : undefined}
              selectAnswer={selectAnswer}
              nextIndex={question?.theoryNextIndex}
            />
          )}

          {question?.type === QuestionType.PHONE_NUMBER && (
            <PhoneNumber
              question={question?.question}
              prev={prevExists ? prev : undefined}
              selectAnswer={selectAnswer}
              nextIndex={question?.theoryNextIndex}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Page;
