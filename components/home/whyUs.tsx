import { whyus } from '@/lib/data/home';
import Image from 'next/image';
import React from 'react';
import { ButtonContainedWhite } from '../ui/buttons';

const WhyUs = () => {
  return (
    <section className="w-full px-[1rem] py-[4rem] bg-main-gradient">
      <div className="max-w-[1100px] mx-auto text-white">
        <div className="md:pl-[4rem]">
          <p className="text-[.9rem] font-semibold">WHY VIRTUAL KITTCHEN'S?</p>
          <h1 className="my-4 font-bold text-[1.3rem] md:text-[2rem] md:leading-[1.2] max-w-[400px]">
            The recipe for your brand success
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[2rem] gap-y-[2rem] justify-between">
          {whyus?.map((data, index) => {
            return (
              <article key={index} className="flex items-start gap-3">
                <Image
                  src={data?.img}
                  alt={data?.title}
                  width={50}
                  height={50}
                  className="w-[50px] h-[50px] object-center object-contain"
                />

                <div>
                  <h3 className="text-[.9rem] font-bold mb-2">{data.title}</h3>
                  <p className="text-[.85rem] lg:max-w-[400px]">{data.body}</p>
                </div>
              </article>
            );
          })}

          <div>
            <ButtonContainedWhite className="!rounded-full max-w-fit font-semibold md:ml-[4rem]">
              SPEAK WITH A CONSULTANT
            </ButtonContainedWhite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
