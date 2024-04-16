import React from 'react';
import { ButtonContainedWhite } from '../ui/buttons';
import Image from 'next/image';

const Patnering = () => {
  return (
    <section className="w-full px-[1rem] py-[4rem] bg-main-gradient">
      <div className="max-w-[1100px] mx-auto text-white md:px-[4rem]">
        <div className="">
          <p className="text-[.85rem] font-semibold max-w-[250px]">Benefits of Partnering With Us</p>
          <h1 className="my-4 font-bold text-[1.3rem] md:text-[2rem] md:leading-[1.2] max-w-[400px]">Partnering for Success</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white mt-10 gap-[3rem]">
          <article>
            <Image
              src={'/patnering1.svg'}
              alt="patenering svg"
              width={30}
              height={30}
              className="w-[30px] h-[30px] object-center object-cover"
            />

            <h2 className="font-bold my-3">Cost Savings</h2>

            <p className="text-[.85rem]">
              By eliminating the need for a traditional restaurant setup, chefs can significantly reduce overhead costs and
              allocate resources more efficiently.
            </p>
          </article>

          <article>
            <Image
              src={'/patnering2.svg'}
              alt="patenering svg"
              width={30}
              height={30}
              className="w-[30px] h-[30px] object-center object-cover"
            />

            <h2 className="font-bold my-3">Efficiency</h2>

            <p className="text-[.85rem]">
              Our streamlined operations and state-of-the-art facilities enable chefs to maximise productivity and focus on their
              culinary creations.
            </p>
          </article>

          <article>
            <Image
              src={'/patnering3.svg'}
              alt="patenering svg"
              width={30}
              height={30}
              className="w-[30px] h-[30px] object-center object-cover"
            />

            <h2 className="font-bold my-3">Access to a Thriving Community</h2>

            <p className="text-[.85rem]">
              By eliminating the need for a traditional restaurant setup, chefs can significantly reduce overhead costs and
              allocate resources more efficiently.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Patnering;
