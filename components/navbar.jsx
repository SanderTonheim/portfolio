"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import menuIcon from "@/assets/menu.svg";
import logo from "@/assets/logo.svg";
import close from "@/assets/close.png";
import Link from "next/link";

export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <nav className="sticky left-0 top-0 z-20  h-20 w-full  bg-[#010101] px-6 py-4 xl:px-0">
        <div className="mx-auto flex w-full max-w-7xl justify-between">
          {/* logo */}
          <Image src={logo} className="w-9" alt="menu icon" />
          <Image
            src={menuIcon}
            onClick={() => setShowSidebar(!showSidebar)}
            alt="menu icon"
          />
        </div>
        <section
          className={`SLIDE-IN-CONTAINER absolute right-0 top-0 z-40 flex min-h-screen w-full flex-col overflow-hidden bg-black  text-white duration-500 ease-in-out ${
            showSidebar ? "translate-x-0 overflow-visible" : "translate-x-full"
          }`}
        >
          <div className="MENU-CLOSE mx-auto flex h-20 w-full items-center justify-between px-6 py-4 ">
            <h1 className="text-lg">Menu</h1>
            <Image
              src={close}
              onClick={() => setShowSidebar(!showSidebar)}
              alt="menu icon"
              className="w-6 cursor-pointer"
            />
          </div>
          <ul
            className={`LIST flex flex-col items-center justify-center gap-10 self-center text-xl font-bold ${
              showSidebar ? "animate-fade-down animate-delay-300" : ""
            }`}
          >
            <Link onClick={() => setShowSidebar(!showSidebar)} href="#projects">
              Prosjekter
            </Link>
            <Link
              onClick={() => setShowSidebar(!showSidebar)}
              href={"https://github.com/SanderTonheim"}
              target="_blank"
            >
              Github
            </Link>
          </ul>
        </section>
      </nav>
    </>
  );
}
