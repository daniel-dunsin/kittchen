import { businessBenefits } from '@/lib/data/home';
import React from 'react';

const BusinessBenefits = () => {
  return (
    <section className="px-[1rem] pb-[4rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1100px] mx-auto  gap-[1rem] md:gap-[2rem] md:px-[4rem]">
        <h1 className="my-4 font-bold text-[1.3rem] md:text-[2rem] md:leading-[1.2] max-w-[400px] text-main">
          Business Benefits
        </h1>

        {businessBenefits?.map((benefit, index) => {
          return (
            <article
              key={index}
              className="bg-main-gradient p-6 rounded-[40px] shadow-md text-center text-white md:max-w-[300px] mx-auto"
            >
              <h3 className="mb-2 font-bold text-[.9rem]">{benefit.title}</h3>
              <p className="text-[.8rem]">{benefit.body}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default BusinessBenefits;
