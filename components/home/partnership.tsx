'use client';
import React from 'react';
import { ButtonContainedWhite } from '../ui/buttons';
import { useRouter } from 'next/navigation';

const Partnership = () => {
  const router = useRouter();
  return (
    <section className="w-full px-[1rem] py-[4rem] bg-main-gradient">
      <div className="max-w-[1100px] mx-auto text-white md:px-[4rem]">
        <div className="]">
          <p className="text-[.85rem] font-semibold max-w-[250px]">
            How we empower your <br /> business with technology
          </p>
        </div>

        <div className="max-w-[1100px] justify-between text-white">
          <div className="flex items-center flex-col gap-[1rem] md:flex-row justify-between">
            <h1 className="my-4 font-bold text-[1.3rem] md:text-[2rem] md:leading-[1.2] max-w-[400px]">
              Central point for your business operations.
            </h1>

            <p className="text-white text-[.85rem] md:max-w-[400px]">
              Now you can run your entire restaurant from one tablet. leverage data analytics to gain insights into customer
              behaviour, preferences, and market trends with insights and metrics on your business. Seamlessly sync all your
              orders in one place.
            </p>
          </div>

          <ButtonContainedWhite
            onClick={() => router.push('/questionnaire')}
            className="!rounded-full max-w-fit md:mt-16 mt-4 text-[.85rem] font-semibold"
          >
            SPEAK WITH A CONSULTANT
          </ButtonContainedWhite>

          <div className="mt-8">
            <h1 className="my-4 font-bold text-[1.3rem] md:text-[2rem] md:leading-[1.2] max-w-[400px]">Our Patnership:</h1>

            <ul className="!list-disc pl-[1rem] text-[.85rem]">
              <li>Resturant chains</li>
              <li>Local resturants</li>
              <li>Food enterpreneurs</li>
              <li>Financial institutions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
