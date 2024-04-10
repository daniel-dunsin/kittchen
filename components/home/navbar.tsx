"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import { ButtonContained, ButtonOutlined } from "../ui/buttons";
import { CgMenu } from "react-icons/cg";
import { MdClose } from "react-icons/md";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const openSidebar = useCallback(() => setSidebarOpen(true), []);
  const closeSidebar = useCallback(() => setSidebarOpen(false), []);

  return (
    <nav className="px-[1rem] py-[1rem] shadow-md">
      <div className="flex items-center gap-[1rem] justify-between">
        <div className="">
          <Image
            src={"/logo.png"}
            width={100}
            height={50}
            alt="Kittchen's logo"
            className="w-[120px] h-[50px] object-fit object-center"
          />
        </div>

        <div
          className={`md:sticky md:h-fit md:w-fit fixed top-0 left-0 w-screen h-screen max-md:bg-main-gradient max-md:text-white md:p-0 p-[1rem] ${
            sidebarOpen
              ? "max-md:translate-y-0 max-md:opacity-1"
              : "max-md:translate-y-[-100%] max-md:opacity-0"
          } transition-all duration-300`}
        >
          <header className="md:hidden mb-[2rem] flex items-center justify-between">
            <Image
              src={"/logo.png"}
              width={100}
              height={50}
              alt="Kittchen's logo"
              className="w-[120px] h-[50px] object-fit object-center"
            />

            <MdClose size={25} className="md:hidden" onClick={closeSidebar} />
          </header>

          <ul className="flex-1 flex md:items-center gap-x-6 text-[.9rem] font-bold md:font-normal md:flex-row flex-col md:m-0 mt-[3rem] gap-y-10 justify-start">
            <li>
              <Link href={"/about"}>ABOUT US</Link>
            </li>

            <li>
              <Link href={"/about"}>OUR KITCHEN</Link>
            </li>

            <li>
              <Link href={"/about"}>LOCATIONS</Link>
            </li>

            <ButtonContained
              className="!rounded-full md:hidden text-[.9rem] !text-main border-white"
              style={{ background: "white" }}
            >
              GET STARTED
            </ButtonContained>
          </ul>
        </div>

        <div className="max-w-fit flex-1 hidden md:block">
          <ButtonContained className="!rounded-full">
            GET STARTED
          </ButtonContained>
        </div>

        <CgMenu size={25} className="md:hidden" onClick={openSidebar} />
      </div>
    </nav>
  );
}