"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useIsVisible } from "@/hooks/useIsVisible";

export const Card = ({ image, link, projectName, projectFor }) => {
  const ref = useRef();
  const isVisible = useIsVisible(ref);

  return (
    <Link
      ref={ref}
      href={link}
      className={` flex h-80 w-full flex-col items-center justify-center bg-neutral-900/10  ${
        isVisible ? "animate-fade-down backdrop-blur-[10px]" : ""
      } 
        `}
    >
      <div className="flex h-60 w-full min-w-[250px] items-center justify-center bg-[#222222]/40 p-7 ">
        <Image src={image} className=" m-auto  " alt="logo" />
      </div>
      <div className="flex h-20 w-full flex-col  justify-center  bg-[#111111] px-3 ">
        <p className="text-white">{projectName}</p>
        <p className="text-white opacity-50">{projectFor}</p>
      </div>
    </Link>
  );
};
