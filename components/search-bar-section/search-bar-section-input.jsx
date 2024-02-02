import { HeartIcon, MapPinIcon, ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Button from "../reusables/SearchButton";

export default function SearchBarInput() {
  return (
    <section className="pt-20 md:pt-32 grid md:grid-cols-2 gap-2 md:gap-4 lg:grid-cols-3">
      <div className="rounded-md shadow-sm relative flex item-center justify-center">
        <input
          type="text"
          name="breed"
          id="breed"
          className="absolute rounded-md left-0 lg:w-full w-full border-0 py-2 pl-8 pr-8 placeholder:text-salmon placeholder:font-medium md:text-lg sm:text-sm sm:leading-6"
          placeholder="Race du chien"
        />
        <div className="absolute top-2 left-0 pl-2 md:top-3 text-salmon">
          <HeartIcon className="h-5 w-5 " aria-hidden="true" />
        </div>
      </div>
      <div className="rounded-md w-full flex shadow-sm relative item-center justify-center">
        <input
          type="text"
          name="area"
          id="area"
          className="rounded-md absolute lg:w-full left-0 mt-12 sm:mt-0 w-full border-0 py-2 pl-8 placeholder:text-salmon placeholder:font-medium md:text-lg sm:text-sm sm:leading-6"
          placeholder="Région"
        />
        <div className="absolute top-14 left-0 pl-2 md:pl-2 sm:pl-6 md:top-3 text-salmon">
          <MapPinIcon className="h-5 w-5 " aria-hidden="true" />
        </div>
      </div>
      <div className="mt-24 md:mt-12 md:col-span-2 lg:col-span-1 lg:mt-0 lg:w-full">
        <Button>Trouver mon chiot</Button>
      </div>
    </section>
  );
}
