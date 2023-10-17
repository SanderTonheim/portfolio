import bfnr from "@/assets/bfnr.png";
import foks from "@/assets/foks.svg";
import hawii from "@/assets/Hawii.svg";
import jobbjakt from "@/assets/jobbjakt.svg";
import { Card } from "./card";

export default function Projects() {
  return (
    <section className='CONTAINER bg-[url("../assets/bg.jpg")] '>
      <div className="CONTENT flex flex-col gap-6 px-4 py-10 md:items-center ">
        <h2 className="text-[#8a8a8a] md:w-full md:max-w-2xl xl:max-w-7xl">
          Prosjekter
        </h2>
        <div className="CARDS flex animate-fade-up flex-wrap justify-center gap-8 xl:max-w-7xl xl:justify-start">
          <Card
            image={bfnr}
            link={"https://medlemsliste.bfnr.no/"}
            projectName={"Bedriftregister"}
            projectFor={"Bjørnafjorden Næringsråd"}
          />
          <Card
            image={foks}
            link={"https://www.obligatorisk.no/"}
            projectName={"Oppmøteprosent kalkulator"}
            projectFor={"Foks AS"}
          />
          <Card
            image={hawii}
            link={"https://www.hawii.no/bedrift"}
            projectName={"Hawii Analyse"}
            projectFor={"Kodeverket"}
          />
          <Card
            image={jobbjakt}
            link={"https://www.jobbjakt.no/"}
            projectName={"Jobbjakt hjemmeside"}
            projectFor={"Kodeverket"}
          />
        </div>
      </div>
    </section>
  );
}
