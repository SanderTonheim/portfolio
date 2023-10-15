"use client";
import Lottie from "lottie-react";
import animation from "@/assets/animations/about.json";
import { useRef } from "react";
export default function About() {
  const animationRef = useRef();
  return (
    <section className="bg-[#1A1A1A] px-4 py-8 text-white  ">
      <p className="md:mx-auto md:max-w-lg">
        Mitt navn er Sander. Jeg er en front-end utvikler fra Bergen. Målet mitt
        er å bidra til en <strong>bedre og lettere fremtid</strong> med hjelp av
        dagens teknologi.
      </p>
      <Lottie
        animationData={animation}
        lottieRef={animationRef}
        // onComplete={() => {
        //   animationRef.current?.goToAndPlay(20, true);
        // }}
        className="w-full md:hidden"
        loop={false}
      />
    </section>
  );
}
