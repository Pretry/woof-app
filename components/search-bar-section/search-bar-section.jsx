import Link from "next/link";
import Image from "next/image";
import ImageBackground from "@/public/backgroundImageTest.webp";
import SearchBarInput from "./search-bar-section-input";


export default function SectionSearchBar() {
  return (
    <div className="relative isolate overflow-hidden bg-darkblue py-10 md:px-16 px-8 md:pb-12 sm:py-19 lg:py-16 lg:px-72">
      <Image
        src={ImageBackground}
        alt="L'image d'un chien sur un lit"
        className="absolute opacity-50 inset-0 -z-10 h-full w-full object-cover object-right"
      />
      <div className=" mx-auto container absolute md:w-4/5 top-6 md:top-10">
        <h2 className="text-3xl font-bold tracking-wide text-salmon sm:text-5xl  lg:mt-7">
          Envie d'un toutou ?
        </h2>
        <h3 className="text-lg md:text-2xl md:pt-1 text-white">
          Trouver l'élevage qui vous rendra heureux !
        </h3>
      </div>
      <SearchBarInput />
    </div>
  );
}
