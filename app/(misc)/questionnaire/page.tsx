'use client';
import CountrySelect from '@/components/questionnaire/countrySelect';
import MultipleChoice from '@/components/questionnaire/multipleChoice';
import PhoneNumber from '@/components/questionnaire/phoneNumber';
import Theory from '@/components/questionnaire/theory';
import { questions } from '@/lib/data/questionnaire';
import { QuestionType, SelectAnswerDTO } from '@/lib/schema/interfaces/questionnaire.interface';
import { useSubmitResponse } from '@/services/questionnaire';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useMemo, useState } from 'react';
import { FiLoader } from 'react-icons/fi';
import { LuLoader2 } from 'react-icons/lu';
import { MdClose } from 'react-icons/md';
import { TbLoader } from 'react-icons/tb';
import { toast } from 'react-toastify';

const Page = () => {
  const [questionIdx, setIdx] = useState<number>(0);
  const router = useRouter();
  const [answers, setAnswers] = useState<{ [question: string]: string }>({});
  const [email, setEmail] = useState<string>('');
  //   to track questions answered
  const [indexStack, setIndexStack] = useState<number[]>([0]);

  const question = useMemo(() => questions[questionIdx], [questionIdx]);
  const prevExists = useMemo(() => questionIdx !== 0, [questionIdx]);

  const mutation = useSubmitResponse();

  const submit = async () => {
    await mutation.mutateAsync({ submissions: answers, email });
    // definitely won't exist
    setIdx(questions.length);
    setTimeout(() => {
      router.push('/');
    }, 500);
  };

  const selectAnswer = (data: SelectAnswerDTO) => {
    setAnswers((prev) => {
      prev[data.question] = data.answer;
      return prev;
    });

    if (data.nextIdx === 'submit') {
      submit();
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

  const updateEmail = (email: string) => setEmail(email);

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
          {mutation?.isPending ? (
            <>
              <div className="flex items-center flex-col gap-2">
                <LuLoader2 className="text-main animate-spin" size={64} />
                <h1 className="font-bold text-[2.5rem]">Submitting</h1>
                <p>Please wait, we are submitting your response</p>
              </div>
            </>
          ) : questionIdx === questions.length ? (
            <>
              <div className="flex items-center flex-col gap-3">
                <h1 className="font-bold text-[2.5rem]">Thank you!</h1>
                <p>Your response has been received successfully</p>
                <i className="text-[.8rem] text-[#333] self-end">redirecting to home page...</i>
              </div>
            </>
          ) : (
            <>
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
                  updateEmail={updateEmail}
                  isEmail={question?.isEmail}
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
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Page;
