import Image from "next/image";
import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Newsletter = () => {
  return (
    <section className="">
      <div className="h-[800px] flex flex-1 flex-col lg:h-[324px] lg:flex-row">
        <div className="flex flex-col items-center justify-center flex-1 h-full px-8 bg-center bg-no-repeat bg-cover bg-newsletterOrange lg:px-0 ">
          <div>
            <h2 className="mb-12 h2">
              Subcribe & Get pet <br /> Updatenews
            </h2>
            <div className="relative flex">
              <input
                className="absolute w-full pr-12 text-white bg-transparent border-b-2 outline-none placeholder:text-white"
                placeholder="mail"
                type="text"
              />
              <HiOutlineArrowNarrowRight className="absolute top-0 right-0 text-3xl text-white cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="flex items-end justify-center flex-1 h-full bg-center bg-no-repeat bg-cover bg-newsletterYellow">
          <Image
            src="/img/newsletter/dog.png"
            alt="dog"
            width={270}
            height={381}
          />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
