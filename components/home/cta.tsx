import Image from 'next/image';
import React from 'react';

const CTA = () => {
  return (
    <section className="xl:min-h-[500px] xl:h-[500px] flex flex-col relative min-h-[400px] h-[400px] overflow-x-hidden">
      <Image src={'/cta.png'} width={1200} height={1000} alt="cta" className="w-full h-full object-cover object-center" />

      <div
        className={
          'absolute top-[55%] translate-y-[-50%] right-[-30px] z-[2] py-20 px-16 rounded-[35px] text-white bg-main-gradient w-[90vw] max-w-[500px]'
        }
      >
        <h1 className="my-4 font-bold xs:text-[1.3rem] xl:text-[1.8rem] xl:leading-[1.4]">
          Get started in a <br /> Kittchen’s space <br />
          today
        </h1>

        <p className="text-[.9rem]">Go ahead and cook while we handle your operations.</p>
      </div>
    </section>
  );
};

export default CTA;
