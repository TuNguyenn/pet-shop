import Image from "next/image";
import React from "react";

const Adoption = () => {
  return (
    <section className="bg-adoption bg-cover bg-center bg-no-repeat min-h-[760px] py-8 flex">
      <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row gap-x-16 ">
        <div className="flex-1 mb-6 lg:mb-0">
          <Image
            src="/img/adoption/img1.png"
            alt="adoption-img"
            width={542}
            height={560}
          />
        </div>
        <div className="flex-1 max-w-md text-center text-cream lg:text-left lg:max-w-none">
          <h2 className="mb-6 h2">Making pet parenting easy for everyone</h2>
          <p className="mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            molestiae sint eos ipsum quisquam ut saepe, nisi, illum maiores cum
            distinctio dignissimos sequi laborum suscipit pariatur consequatur
            id error porro!
          </p>
          <ul className="mb-[38px] flex flex-col gap-y-4 lg:list-disc lg:pl-4">
            <li>Adoption</li>
            <li>Frozen Raw</li>
            <li>Next Day Delivery</li>
          </ul>
          <button className="mx-auto btn btn-primary lg:mx-0">Explore</button>
        </div>
      </div>
    </section>
  );
};

export default Adoption;
