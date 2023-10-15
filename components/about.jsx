"use client";
import Lottie from "lottie-react";
import animation from "@/assets/animations/about.json";
import test from "@/assets/animations/test-animation.json";
import { useRef } from "react";
export default function About() {
  const animationRef = useRef();
  return (
    <section className=" flex items-center justify-center overflow-hidden bg-[#1A1A1A] text-white  ">
      <Lottie
        animationData={test}
        // lottieRef={animationRef}
        // onComplete={() => {
        //   animationRef.current?.goToAndPlay(20, true);
        // }}
        className=" relative flex max-w-md items-center  justify-center blur-sm"
        loop={true}
      />
      <p className=" absolute z-20 max-w-md px-10 md:p-0 ">
        Mitt navn er Sander. Jeg er en front-end utvikler fra Bergen. Målet mitt
        er å bidra til en <strong>bedre og lettere fremtid</strong> med hjelp av
        dagens teknologi.
      </p>
    </section>
  );
}
