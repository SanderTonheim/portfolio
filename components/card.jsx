"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useIsVisible } from "@/hooks/useIsVisible";

export const Card = ({ image, link, projectName, projectFor }) => {
  const ref = useRef();
  const isVisible = useIsVisible(ref);

  return (
    <div
      ref={ref}
      className={
        isVisible ? "min-w-[250px] max-w-[288px] animate-fade-down" : ""
      }
    >
      <Link href={link}>
        <div className="flex h-60 items-center justify-center bg-[#292929]/5 p-7 backdrop-blur-[6px]">
          <Image src={image} className=" m-auto" alt="logo" />
        </div>
        <div className="flex h-20 flex-col  justify-center bg-[#1a1a1a] px-3 ">
          <p className="text-white">{projectName}</p>
          <p className="text-white opacity-50">{projectFor}</p>
        </div>
      </Link>
    </div>
  );
};
