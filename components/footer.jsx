import github from "@/assets/footer/github.svg";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <section className=" flex h-28 bg-black px-5 lg:justify-center">
      <div className=" flex w-full items-center justify-between text-white lg:max-w-7xl ">
				<div className="flex flex-col">

        <p>Sander Tonheim</p>
        <p>Email: tonheims98@gmail.com</p>
				</div>
        <Link href={"https://github.com/SanderTonheim"} target="_blank">
          <Image src={github} height={40} width={40} />
        </Link>
      </div>
    </section>
  );
}
