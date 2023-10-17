import Image from "next/image";
import image from "@/assets/heroImage.png";

export default function Header() {
  return (
    <div className="bg-gradient-to-t w-full from-[#161616] to-black">
      <section className="CONTAINER  flex flex-col  pt-4 text-6xl  md:flex-row-reverse md:justify-between md:px-10 lg:mx-auto lg:w-full lg:max-w-4xl lg:self-center xl:max-w-6xl xl:flex-col xl:items-center ">
        <div className="TEXT flex w-full max-w-sm animate-fade-up flex-wrap self-center px-5 md:self-start md:pl-0 md:text-[4.3rem] xl:max-w-4xl xl:self-center xl:p-0 xl:text-9xl">
          <h1 className="">Sander</h1>
          <h1 className="flex w-full justify-end xl:-ml-20 xl:-mt-5">
            Tonheim
          </h1>
        </div>

        <Image src={image} className="relative z-10 w-80 xl:-mt-20" />
      </section>
    </div>
  );
}
