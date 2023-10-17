"use client";
import Lottie from "lottie-react";
import test from "@/assets/animations/test-animation.json";
export default function About() {
  return (
    <section className=" flex h-64 items-center justify-center  bg-[#1A1A1A] text-white ">
      <Lottie
        animationData={test}
        className=" relative flex  max-w-sm items-center justify-center blur-sm"
        loop={true}
      />
      <p className=" absolute z-10 max-w-md px-10 text-center md:p-0">
        Mitt navn er Sander. Jeg er en front-end utvikler fra Bergen. Målet mitt
        er å bidra til en <strong>bedre og lettere fremtid</strong> med hjelp av
        dagens teknologi.
      </p>
    </section>
  );
}
