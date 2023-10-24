"use client";
import Lottie from "lottie-react";
import animation from "@/assets/animations/animation.json";
export default function About() {
  return (
    <section className="  bg-[#181818] px-6 py-8 text-white ">
      <div className="CONTENT flex w-full max-w-5xl flex-col items-center justify-center md:mx-auto md:flex-row md:justify-between">
        <p className="md:basis-1/3">
          Mitt navn er Sander. Jeg er en front-end utvikler fra Bergen. Målet
          mitt er å bidra til en <strong>bedre og lettere fremtid</strong> med
          hjelp av dagens teknologi.
        </p>
        <Lottie className="max-w-sm" animationData={animation} loop={true} />
      </div>
    </section>
  );
}
