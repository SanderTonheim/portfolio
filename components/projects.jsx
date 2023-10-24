import bfnr from "@/assets/bfnr.png";
import foks from "@/assets/foks.svg";
import hawii from "@/assets/Hawii.svg";
import jobbjakt from "@/assets/jobbjakt.svg";
import { Card } from "./card";

export default function Projects() {
  return (
    <section className='CONTAINER bg-[url("../assets/bg.jpg")] '>
      <div className="CONTENT flex max-w-7xl flex-col gap-6 px-6 py-8  md:mx-auto md:items-center ">
        <div className="HEADER lg: flex w-full justify-start ">
          <h2 className="text-[#8a8a8a] ">Prosjekter</h2>
        </div>
        <div className="CARDS grid w-full justify-center gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
