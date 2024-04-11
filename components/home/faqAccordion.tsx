'use client';
import { faq } from '@/lib/data/home';
import React, { LegacyRef, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { BiChevronDown, BiChevronRight, BiChevronUp } from 'react-icons/bi';

type Props = (typeof faq)[0];

const FaqAccordion = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [bodyHeight, setBodyHeight] = useState<number>(0);

  const toggle = useCallback(() => setOpen((prev) => !prev), []);
  const bodyRef = useRef<HTMLParagraphElement>();

  useEffect(() => {
    const height = bodyRef?.current?.getBoundingClientRect()?.height || 0;
    setBodyHeight(height);
  }, []);

  return (
    <article className="pt-2 pb-3 border-b-[1.5px]">
      <header className="flex items-center justify-between  cursor-pointer gap-[1.5rem] flex-nowrap" onClick={toggle}>
        <h5 className="font-semibold text-[.9rem] truncate text-[#222]">{props?.question}</h5>

        <span className="text-[1.5rem]">
          <BiChevronRight className={`${open ? 'rotate-90' : ''} transition-all duration-300`} />
        </span>
      </header>

      <div className="transition-all duration-300 overflow-hidden" style={{ height: open ? bodyHeight : 0 }}>
        <p ref={bodyRef as LegacyRef<HTMLParagraphElement>} className="px-2 py-3 text-[.8rem] text-[#222]">
          {props?.answer}
        </p>
      </div>
    </article>
  );
};

export default FaqAccordion;
