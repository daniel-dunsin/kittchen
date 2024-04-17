'use client';
import React from 'react';
import { ButtonContained, ButtonContainedWhite } from '../ui/buttons';
import Navbar from '../home/navbar';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function AboutBanner() {
  const router = useRouter();
  return (
    <section className={styles.container}>
      <Navbar className="top-0 left-0" />

      <div className="flex-1 h-full relative overflow-x-hidden ">
        {/* Left Container */}
        <div className="max-w-[1100px] mx-auto px-[1rem] pt-[3rem]">
          <p className="text-[.9rem] font-semibold">ABOUT US</p>
          <h1 className="my-4 font-bold xs:text-[1.3rem] md:text-[2rem] md:leading-[1.2] text-main">
            Transforming {"Africa's"} <br /> Food Industry
          </h1>
          <p className="text-[.75rem] xs:text-[.85rem] md:text-[.9rem] max-w-[400px]">
            We revolutionize the culinary industry in Africa by providing fully-equipped cooking facilities for chefs and
            restaurant owners. Our mission is to empower culinary entrepreneurs to thrive in the digital age of food delivery and
            takeout.
          </p>

          <ButtonContained
            onClick={() => router.push('/questionnaire')}
            className="max-w-fit mt-4 text-[.8rem] font-bold !rounded-full"
          >
            GET STARTED
          </ButtonContained>
        </div>

        {/* CTA BANNER */}

        <section className="xl:min-h-[500px] xl:h-[500px] flex flex-col relative min-h-[400px] h-[400px] overflow-x-hidden mt-7">
          <Image src={'/cta.png'} width={1200} height={1000} alt="cta" className="w-full h-full object-cover object-center" />
        </section>

        {/* Banner Text Container */}
        <div className={styles.textContainer}>
          <p className="text-[.75rem] xs:text-[.85rem] md:text-[.9rem]">
            {`Step into the world of culinary innovation with Kittchen's. As a leading virtual kitchen revolutionizing Africa's food
            industry, Kittchen's offers fully-equipped cloud kitchens designed specifically for delivery and takeout operations.
            Chefs and restaurant owners can bid farewell to high overhead costs and limited kitchen space, thanks to Kittchen's
            flexible rental options and comprehensive support services. Joining Kittchen's means becoming part of a vibrant
            culinary community, where collaboration and creativity thrive. Experience the perfect blend of efficiency,
            convenience, and culinary expertise with Kittchen's. Let's embark on a culinary journey together and cook up success
            in the digital age of food delivery and takeout.`}
          </p>
        </div>
      </div>
    </section>
  );
}

const styles = {
  container: 'flex flex-col',
  image: 'w-full h-full object-cover object-center',
  textContainer:
    'absolute top-[40%] translate-y-[-60%] right-[-30px] z-[2] py-10 px-16 rounded-[35px] text-white bg-main-gradient w-[90vw] max-w-[550px] max-lg:hidden',
};
