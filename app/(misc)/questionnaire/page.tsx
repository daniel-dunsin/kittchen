'use client';
import { questions } from '@/lib/data/questionnaire';
import React, { useCallback, useMemo, useState } from 'react';
import ObjQuestion from '@/components/questionnaire/objQuestion';
import TheoryQuestion from '@/components/questionnaire/theoryQuestion';
import { useRouter } from 'next/navigation';

const Questionnaire = () => {
  const [step, setStep] = useState<number>(0);
  const [answers, setAnswers] = useState<{ [question: string]: string }>({});
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const router = useRouter();

  const question = useMemo(() => questions[step], [step]);

  const onSubmit = useCallback(
    (question: string, answer: string, nextIndex?: number | 'submit') => {
      setAnswers((prev) => {
        prev[question] = answer;
        return prev;
      });
      if (step === questions.length - 1) {
        router.push('/');
      } else {
        if (nextIndex === 'submit') {
          router.push('/');
        } else {
          setStep((step) => nextIndex ?? step + 1);
        }
      }
    },
    [step]
  );

  return (
    <section className="z-[10] bg-main-gradient w-screen h-screen flex items-center justify-center">
      {question?.isObj ? (
        <ObjQuestion onSubmit={onSubmit} question={question?.question} answers={question.answers} />
      ) : (
        <TheoryQuestion
          onSubmit={onSubmit}
          question={question?.question}
          placeholder={question?.theoryPlaceholder}
          selectCountry={question?.selectCountry}
          isPhoneNumber={question.isPhoneNumber}
        />
      )}
    </section>
  );
};

export default Questionnaire;
