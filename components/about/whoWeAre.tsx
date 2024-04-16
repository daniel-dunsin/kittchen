import Image from 'next/image';
import React from 'react';

const WhoWeAre = () => {
  return (
    <section className="px-[1rem] py-[4rem]">
      <div className="max-w-[1100px] mx-auto md:px-[4rem]">
        <SingleContainer
          image="/whoWeAre1.png"
          subtitle="WHO WE ARE?"
          header="Overcoming Challenges with Kittchen's Innovative Solutions"
          body="At Kittchen's, we are passionate about creating opportunities for chefs and restaurant owners to succeed in the competitive food industry. We understand the challenges faced by culinary entrepreneurs, and we're here to provide innovative solutions to help them overcome these obstacles."
          order={1}
        />

        <SingleContainer
          image="/whoWeAre2.png"
          subtitle="WHAT WE DO?"
          header="Fully-Equipped Virtual Kitchens for Effortless Delivery and Takeout"
          body="We offer fully-equipped cloud kitchens designed specifically for delivery and takeout operations. Our facilities provide chefs with everything they need to prepare delicious meals efficiently, without the hassle of managing a traditional dine-in setup. From state-of-the-art kitchen appliances to comprehensive support services, we ensure a seamless cooking experience for our partners."
          order={2}
        />

        <div className="flex md:flex-row flex-col gap-x-[2rem] gap-y-[1.5rem]">
          <div className="flex-1">
            <p className="text-[.85rem] md:text-[.9rem] font-bold uppercase">The Problem We Solve</p>
            <h1 className="font-bold text-[1.3rem] md:text-[2rem] md:leading-[1.1] text-main max-w-[400px] my-3">
              Kittchen's Response to Industry Challenges
            </h1>
          </div>

          <div className="flex-1">
            <p className="text-[.9rem] text-[#333]">
              In today's fast-paced world, chefs and restaurant owners face numerous challenges, including high overhead costs,
              limited kitchen space, and the need for efficient delivery operations. At Kittchen's, we address these issues by
              providing cost-effective, flexible kitchen solutions tailored to the needs of modern culinary entrepreneurs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

interface SingleContainerProps {
  order?: 1 | 2;
  header: string;
  subtitle: string;
  body: string;
  image: string;
}

const SingleContainer = (props: SingleContainerProps) => {
  return (
    <article
      className={`flex items-start gap-[3rem] flex-col my-[3rem]  ${props?.order == 1 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      <div className="flex-[1]">
        <p className="text-[.85rem] md:text-[.9rem] font-bold">{props.subtitle}</p>
        <h1 className="font-bold text-[1.3rem] md:text-[2rem] md:leading-[1.1] text-main max-w-[400px] my-3">{props.header}</h1>
        <p className="text-[.9rem] text-[#333]">{props.body}</p>
      </div>

      <div className="flex-[1] w-full">
        <Image
          src={props?.image}
          alt="Who we are"
          width={500}
          height={500}
          className="w-full h-full rounded-xl object-center object-cover"
        />
      </div>
    </article>
  );
};
