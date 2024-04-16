import Image from 'next/image';
import React from 'react';

const WhatSetsUsApart = () => {
  return (
    <section className="px-[1rem] py-[4rem]">
      <div className="max-w-[1100px] mx-auto md:px-[4rem] ">
        <h3 className="text-[.85rem] md:text-[.9rem] font-bold">WHAT SETS US APART?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[3.5rem] mt-5">
          <SingleContainer
            title="Delivery-First Focus"
            body="Unlike traditional restaurants, we focus solely on supporting delivery and takeout operations, allowing chefs to concentrate on creating exceptional dishes for their customers."
            image="/whatSetsUsApart1.png"
          />
          <SingleContainer
            title="Fully-Equipped Facilities"
            body="Our virtual kitchens are equipped with cutting-edge appliances and tools, ensuring chefs have everything they need to succeed."
            image="/whatSetsUsApart2.png"
          />
          <SingleContainer
            title="Flexibility and Convenience"
            body="With flexible rental options and convenient locations, we make it easy for chefs to access premium kitchen facilities without the commitment of a long-term lease."
            image="/whatSetsUsApart3.png"
          />
          <SingleContainer
            title="Comprehensive Support"
            body="In addition to kitchen space, we provide ongoing support services, including conference rooms for corporate meetings, resting lounge,  order management systems, marketing assistance, and inventory tracking, to help our partners grow their businesses."
            image="/whatSetsUsApart4.png"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;

interface SingleContainerProps {
  title: string;
  body: string;
  image: string;
}

const SingleContainer = (props: SingleContainerProps) => {
  return (
    <article className="flex gap-6 flex-col md:flex-row">
      <div className="flex-[.3]">
        <Image
          src={props?.image}
          alt="What Sets Us Apart"
          className="max-md:h-[300px] w-full h-full object-center object-cover rounded-3xl"
          width={200}
          height={350}
        />
      </div>

      <div className="flex-[.7]">
        <h1 className="font-bold text-[1.3rem] md:leading-[1.1] text-main">{props.title}</h1>
        <p className="mt-2 text-[.9rem] text-[#333]">{props.body}</p>
      </div>
    </article>
  );
};
