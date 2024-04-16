'use client';
import { questions } from '@/lib/data/questionnaire';
import React, { useCallback, useMemo, useState } from 'react';
import ObjQuestion from '../questionnaire/objQuestion';
import TheoryQuestion from '../questionnaire/theoryQuestion';

interface Props {
  close(): void;
}

const Questionnaire = (props: Props) => {
  const [step, setStep] = useState<number>(0);
  const [answers, setAnswers] = useState<{ [question: string]: string }>({});
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const question = useMemo(() => questions[step], [step]);

  const onSubmit = useCallback(
    (question: string, answer: string) => {
      setAnswers((prev) => {
        prev[question] = answer;
        return prev;
      });
      if (step === questions.length - 1) {
        props.close();
      } else {
        setStep((step) => step + 1);
      }
    },
    [step]
  );

  return (
    <section className="fixed top-0 left-0 z-[10] bg-black/80 w-screen h-screen flex items-center justify-center">
      {question?.isObj ? (
        <ObjQuestion onSubmit={onSubmit} question={question?.question} answers={question.answers as string[]} />
      ) : (
        <TheoryQuestion onSubmit={onSubmit} question={question?.question} placeholder={question?.theoryPlaceholder} />
      )}
    </section>
  );
};

export default Questionnaire;