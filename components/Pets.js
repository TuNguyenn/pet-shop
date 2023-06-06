import Image from "next/image";
import React, { useState } from "react";

const dataPets = [
  {
    id: 1,
    category: "cat",
    name: "kyba",
    image: "/img/pets/1.png",
  },
  {
    id: 2,
    category: "bird",
    name: "rotty",
    image: "/img/pets/2.png",
  },
  {
    id: 3,
    category: "fox",
    name: "kirra",
    image: "/img/pets/3.png",
  },
  {
    id: 4,
    category: "cat",
    name: "kirra",
    image: "/img/pets/4.png",
  },
  {
    id: 5,
    category: "hamster",
    name: "dinno",
    image: "/img/pets/5.png",
  },
  {
    id: 6,
    category: "parrot",
    name: "paco",
    image: "/img/pets/6.png",
  },
  {
    id: 7,
    category: "parrot",
    name: "pavo",
    image: "/img/pets/7.png",
  },
  {
    id: 8,
    category: "cat",
    name: "ynna",
    image: "/img/pets/8.png",
  },
  {
    id: 9,
    category: "lion",
    name: "hera",
    image: "/img/pets/9.png",
  },
  {
    id: 10,
    category: "bird",
    name: "dimmmy",
    image: "/img/pets/10.png",
  },
  {
    id: 11,
    category: "dog",
    name: "jasper",
    image: "/img/pets/11.png",
  },
  {
    id: 12,
    category: "hamster",
    name: "syu",
    image: "/img/pets/12.png",
  },
];

const Pets = () => {
  const [petDetails, setPetDetails] = useState(dataPets[10]);
  const [petIndex, setPetIndex] = useState(10);
  const getPetDetails = (id) => {
    const pet = dataPets.find((pet) => {
      return pet.id === id;
    });
    setPetDetails(pet);
  };
  return (
    <section className="py-6 overflow-hidden bg-center bg-pets ">
      <div className="flex flex-col lg:flex-row ">
        <div className="xl:flex xl:w-[30%] xl:pl-[160px] hidden">
          <Image
            src="/img/pets/badge.svg"
            width={230}
            height={227}
            alt="badge"
          />
        </div>
        <div className="flex flex-col flex-1 lg:flex-row">
          <div className="lg:w-[30%] flex flex-col justify-center items-end pb-6 lg:py-2 mx-auto lg:mx-0">
            <div className="text-center text-white ">
              <div className="text-[32px] capitalize ">
                {petDetails.category}
              </div>
              <div className="uppercase text-[17px] mb-1 ">
                ({petDetails.name})
              </div>
              <div className="w-[150px] h-[150px] mx-auto border-4 border-white rounded-full  lg:mx-0">
                <Image
                  src={petDetails.image}
                  alt="petDetails"
                  width={150}
                  height={150}
                />
              </div>
            </div>
          </div>
          <div className="relative lg:w-[60%] flex-1 flex items-center ">
            <div className="flex flex-wrap justify-center gap-4 lg:justify-end lg:-mr-6">
              {dataPets.map((pet, index) => {
                return (
                  <div
                    onClick={() => {
                      getPetDetails(pet.id);
                      setPetIndex(index);
                    }}
                    className="relative cursor-pointer "
                    key={index}
                  >
                    <div
                      className={`absolute w-full h-full rounded-full  ${
                        petIndex === index
                          ? "border-white border-2"
                          : "bg-black/40"
                      }`}
                    ></div>
                    <Image
                      src={pet.image}
                      width={95}
                      height={95}
                      alt="list-pets"
                      draggable="false"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pets;
