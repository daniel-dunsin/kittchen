import { faq } from '@/lib/data/home';
import React from 'react';
import FaqAccordion from './faqAccordion';

const FAQ = () => {
  return (
    <section className="px-[1rem] py-[4rem]">
      <div className="max-w-[1100px] mx-auto md:px-[4rem]">
        {/* title */}
        <h1 className="mb-10 font-bold text-[1.3rem] md:text-[2rem] md:leading-[1.2] text-main">
          Frequently Asked Questions <br /> {'(FAQ)'}
        </h1>

        <section className="flex flex-col gap-y-2">
          {faq?.map((faq, index) => {
            return <FaqAccordion key={index} {...faq} />;
          })}
        </section>
      </div>
    </section>
  );
};

export default FAQ;
