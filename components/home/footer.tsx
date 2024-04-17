import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CgInstagram, CgTwitter } from 'react-icons/cg';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="text-white bg-main px-[1rem] pt-[4rem] pb-[2rem]">
      <div className="max-w-[1100px] mx-auto lg:px-[4rem]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[2rem] gap-y-[1.5rem]">
          <div>
            <h3 className="font-semibold">Company</h3>
            <ul className="mt-2">
              <li className="text-[.8rem]">
                <Link href={'/'}>Careers</Link>
              </li>
              <li className="text-[.8rem]">
                <Link href={'/'}>FAQ</Link>
              </li>
              <li className="text-[.8rem]">
                <Link href={'/'}>Support</Link>
              </li>
              <li className="text-[.8rem]">
                <Link href={'/'}>Privacy Policy</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Location</h3>
            <ul className="mt-2">
              <li className="text-[.8rem]">
                <a href="/./#map">Yaba</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Resturant</h3>
            <ul className="mt-2">
              <li className="text-[.8rem]">Brick Tea</li>
              <li className="text-[.8rem]">Herd</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Partners</h3>
            <ul className="mt-2">
              <li className="text-[.8rem]">Aidi Africa </li>
              <li className="text-[.8rem]">TAJBANK </li>
              <li className="text-[.8rem]">Semicolon </li>
              <li className="text-[.8rem]">Megadel Africa</li>
            </ul>
          </div>
        </div>

        <div className="flex lg:items-center justify-between flex-col lg:flex-row gap-[1rem] mt-10">
          <div className="flex-1 max-w-fit">
            <Image
              src={'/logo-white.png'}
              width={100}
              height={50}
              alt="Kittchen's logo"
              className="w-[120px] h-[50px] object-fit object-center"
            />
          </div>

          <div className="max-w-fit flex-1">
            <div className="flex items-center gap-3 mb-2">
              <CgInstagram size={23} color="white" cursor={'pointer'} />
              <FaXTwitter size={23} color="white" cursor={'pointer'} />
            </div>
            <p className="text-[.85rem]">
              Contact:{' '}
              <a href="tel:+2348139188935" className="underline">
                +2348139188935
              </a>
            </p>
            <p className="text-[.85rem]">
              Email address:{' '}
              <a href="mailto:info@kittchen’s.com" className="underline">
                info@kittchen’s.com
              </a>
            </p>
          </div>
        </div>
        <p className="text-[.8rem] mt-4">©{new Date().getFullYear()} Kittchen’s. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
