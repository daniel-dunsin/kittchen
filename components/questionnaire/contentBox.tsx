import Image from 'next/image';
import React, { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {}

const ContentBox = (props: Props) => {
  return (
    <section
      {...props}
      style={{ boxShadow: '-20px 20px 0px rgba(248, 42, 42, 1)', ...props?.style }}
      className={`rounded-[30px] shadow-main bg-white border w-[95vw] max-w-[700px] py-6 px-3 md:p-6 ${props?.className}`}
    >
      <Image src={'/logo.png'} alt="logo" width={120} height={30} />

      <div className="mt-6 px-4 md:px-10">{props?.children}</div>
    </section>
  );
};

export default ContentBox;
