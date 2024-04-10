import React from 'react';
import Navbar from './navbar';
import Image from 'next/image';
import { ButtonContainedWhite } from '../ui/buttons';

export default function Banner() {
  return (
    <section className={styles.container}>
      <Navbar className="absolute top-0 left-0" />

      <div className="flex flex-1 h-full relative">
        {/* Left Container */}
        <div className="bg-[#f7f7f7] flex-[.2] hidden md:block" />

        {/* Right Container */}
        <div className="flex-1 md:flex-[.8]">
          <Image src={'/banner.png'} width={900} height={800} alt="banner" className={styles.image} />
        </div>

        {/* Banner Text Container */}
        <div className={styles.textContainer}>
          <p className="text-[.9rem] font-semibold">WELCOME TO KITTCHEN'S</p>
          <h1 className="my-4 font-bold xs:text-[1.3rem] md:text-[2rem] md:leading-[1.2]">
            We make it <br /> easy for you to <br /> run your business <br /> brand seamlessly
          </h1>
          <p className="text-[.75rem] xs:text-[.85rem] md:text-[.9rem]">
            We have identified and implemented a sustainable business model that helps maximize your operational efficiency,
            taking your business to a new level.
          </p>

          <ButtonContainedWhite className="max-w-fit mt-4 text-[.8rem] font-bold !rounded-full">GET STARTED</ButtonContainedWhite>
        </div>
      </div>
    </section>
  );
}

const styles = {
  container: 'min-h-screen h-screen flex flex-col',
  image: 'w-full h-full object-cover object-center',
  textContainer:
    'absolute top-[55%] translate-y-[-50%] left-[-30px] z-[2] py-10 px-16 rounded-[35px] text-white bg-main-gradient w-[90vw] max-w-[550px]',
};
