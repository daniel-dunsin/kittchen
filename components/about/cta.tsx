'use client';
import Image from 'next/image';
import React from 'react';
import { ButtonContainedWhite } from '../ui/buttons';
import { useRouter } from 'next/navigation';

const AboutCTA = () => {
  const router = useRouter();
  return (
    <section className="xl:min-h-[500px] xl:h-[500px] flex flex-col relative min-h-[400px] h-[400px] overflow-x-hidden">
      <Image src={'/cta.png'} width={1200} height={1000} alt="cta" className="w-full h-full object-cover object-center" />

      <div
        className={
          'absolute top-[55%] translate-y-[-50%] right-[-30px] z-[2] py-20 px-16 rounded-[35px] text-white bg-main-gradient w-[90vw] max-w-[500px]'
        }
      >
        <h1 className="my-4 font-bold xs:text-[1.3rem] md:text-[2rem] md:leading-[1.2]">{"Let's"} cook up success together!</h1>
        <p className="text-[.75rem] xs:text-[.85rem] md:text-[.9rem]">
          Join us at {"Kittchen's "} and embark on a culinary journey filled with endless possibilities.
        </p>

        <ButtonContainedWhite
          onClick={() => router.push('/questionnaire')}
          className="max-w-fit mt-4 text-[.8rem] font-bold !rounded-full"
        >
          GET STARTED
        </ButtonContainedWhite>
      </div>
    </section>
  );
};

export default AboutCTA;
