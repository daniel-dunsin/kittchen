'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { HTMLAttributes, useCallback, useState } from 'react';
import { ButtonContained, ButtonContainedWhite, ButtonOutlined } from '../ui/buttons';
import { CgMenu } from 'react-icons/cg';
import { MdClose } from 'react-icons/md';
import { useRouter } from 'next/navigation';

interface Props extends HTMLAttributes<HTMLDivElement> {}

export default function Navbar({ ...props }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const router = useRouter();

  const openSidebar = useCallback(() => setSidebarOpen(true), []);
  const closeSidebar = useCallback(() => setSidebarOpen(false), []);

  return (
    <nav {...props} className={`px-[1rem] py-[1rem] shadow-md z-[4] bg-white w-full ${props.className}`}>
      <div className="flex items-center gap-[1rem] justify-between max-w-[1100px] mx-auto">
        <Link href="/" className="">
          <Image
            src={'/logo.png'}
            width={100}
            height={50}
            alt="Kittchen's logo"
            className="w-[120px] h-[50px] object-fit object-center"
          />
        </Link>

        <div
          className={`md:sticky md:h-fit md:w-fit fixed top-0 left-0 w-screen h-screen max-md:bg-main-gradient max-md:text-white md:p-0 p-[1rem] z-[12] ${
            sidebarOpen ? 'max-md:translate-y-0 max-md:opacity-1' : 'max-md:translate-y-[-100%] max-md:opacity-0'
          } transition-all duration-300`}
        >
          <header className="md:hidden mb-[2rem] flex items-center justify-between">
            <Link href={'/'} onClick={closeSidebar}>
              <Image
                src={'/logo-white.png'}
                width={100}
                height={50}
                alt="Kittchen's logo"
                className="w-[120px] h-[50px] object-fit object-center"
              />
            </Link>

            <MdClose size={25} className="md:hidden" onClick={closeSidebar} />
          </header>

          <ul className="flex-1 flex md:items-center gap-x-6 text-[.9rem] font-bold md:font-normal md:flex-row flex-col md:m-0 mt-[3rem] gap-y-10 justify-start">
            <li onClick={closeSidebar}>
              <Link href={'/about'}>ABOUT US</Link>
            </li>

            <li onClick={closeSidebar}>
              <a href="/./#map">{"OUR KITTCHEN'S"}</a>
            </li>

            <li onClick={closeSidebar}>
              <a href="/./#map">LOCATIONS</a>
            </li>
<li onClick={closeSidebar}>
              <Link href={'/./#faq'}>FAQs</Link>
            </li>

            <ButtonContainedWhite className="!rounded-full md:hidden text-[.9rem]">GET STARTED</ButtonContainedWhite>
          </ul>
        </div>

        <div className="max-w-fit flex-1 hidden md:block">
          <ButtonContained className="!rounded-full" onClick={() => router.push('/./#map')}>
            GET STARTED
          </ButtonContained>
        </div>

        <CgMenu size={25} className="md:hidden" onClick={openSidebar} />
      </div>
    </nav>
  );
}
