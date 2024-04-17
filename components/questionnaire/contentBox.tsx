import Image from 'next/image';
import React, { HTMLAttributes } from 'react';
import { MdClose } from 'react-icons/md';

interface Props extends HTMLAttributes<HTMLDivElement> {
  close(): void;
}

const ContentBox = (props: Props) => {
  return (
    <section
      {...props}
      style={{ boxShadow: '-20px 20px 0px rgba(248, 42, 42, 1)', ...props?.style }}
      className={`rounded-[30px] shadow-main bg-white border w-[95vw] max-w-[700px] py-6 px-3 md:p-6 ${props?.className}`}
    >
      <header className="flex items-center gap-6 justify-between">
        <Image src={'/logo.png'} alt="logo" width={120} height={30} />
        <MdClose size={22} onClick={props.close} cursor={'pointer'} />
      </header>

      <div className="mt-6 px-4 md:px-10">{props?.children}</div>
    </section>
  );
};

export default ContentBox;
