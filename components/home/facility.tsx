import { faclities } from '@/lib/data/home';
import Image from 'next/image';
import React from 'react';

const Facility = () => {
  return (
    <section className="px-[1rem] py-[4rem]">
      <div className="max-w-[1100px] mx-auto md:px-[4rem]">
        {/* title */}
        <div className=" flex items-start flex-col lg:flex-row justify-between">
          <h1 className=" font-bold text-[1.3rem] md:text-[2rem] md:leading-[1.2] max-w-[400px] text-main">
            Our facility for your <br /> business growth
          </h1>
          <p className="max-w-[400px] text-[.85rem]">
            We have identified and implemented a sustainable business model that helps maximize your operational efficiency,
            taking your business to a new level.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[2rem] mt-14">
          {faclities.map((facility, index) => {
            return (
              <p key={index} className="text-[.85rem]">
                <span className="inline-block mr-2 align-middle">
                  <Image
                    src={'/checkbox.png'}
                    alt="checkbox"
                    width={15}
                    height={15}
                    className="w-[15px] h-[15px] object-center object-contain"
                  />
                </span>
                {facility}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Facility;
