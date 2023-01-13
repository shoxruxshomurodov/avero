import Image from "next/image";
import React from "react";
import {
  bgCar,
  bgCase,
  bgMeal,
  bgServices,
  bgSofa,
  carImage,
  caseImage,
  mealImage1,
  mealImage2,
  mealImage3,
  sofaImage,
} from "../../../../assets/images/services";
import Card from "../../../card";
import Heading from "../../../heading";

const ArrowButton = () => {
  return (
    <button className="py-2 px-5 border-2 border-black rounded-2xl">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_429_107)">
          <path
            d="M16.172 10.9997L10.808 5.63568L12.222 4.22168L20 11.9997L12.222 19.7777L10.808 18.3637L16.172 12.9997H4V10.9997H16.172Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_429_107">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
};

const Index = () => {
  return (
    <section className="py-28 px-[60px] ">
      <Heading
        title="Bizning xizmatlar"
        subTitle="Engage active clients at the right time and save time chasing unqualified leads"
      />
      <div className="grid grid-cols-12 gap-6">
        <Card className="col-span-5 h-[600px] p-9 relative">
          <Heading
            title="O‘rindiqni tanlash"
            subTitle="Engage active clients at the right time and save time chasing"
            titleClass="text-[32px]"
          />
          <ArrowButton />
          <div>
            <Image src={sofaImage} alt="sofa image" className="absolute z-10" />
            <Image
              src={bgSofa}
              alt="sofa image"
              className="absolute right-1/2 translate-x-1/2"
            />
          </div>
        </Card>
        <Card className="col-span-7 relative h-[600px] p-9">
          <Heading
            title="Mazzali taomnoma"
            subTitle="Engage active clients at the right time and save time chasing unqualified leads"
            titleClass="text-[32px]"
          />
          <ArrowButton />
          <div>
            <Image
              src={mealImage1}
              alt="sofa image"
              className="absolute z-10 bottom-0 left-0"
            />
            <Image
              src={mealImage2}
              alt="sofa image"
              className="absolute z-10 left-1/2"
            />
            <Image
              src={mealImage3}
              alt="sofa image"
              className="absolute z-10 right-0 bottom-0"
            />
            <Image
              src={bgMeal}
              alt="sofa image"
              className="absolute z-20 right-1/2 translate-x-1/2"
            />
          </div>
        </Card>
        <Card className="col-span-7 h-[600px] p-9 relative">
          <Heading
            title="Yuklaringiz xavfsizligi"
            subTitle="Engage active clients at the right time and save time chasing unqualified leads"
            titleClass="text-[32px]"
          />
          <ArrowButton />
          <div>
            <Image
              src={caseImage}
              alt="sofa image"
              className="absolute z-10 bottom-0"
            />
            <Image
              src={bgCase}
              alt="sofa image"
              className="absolute right-1/2 translate-x-1/2"
            />
          </div>
        </Card>
        <Card className="col-span-5 h-[600px] relative left-0 p-9">
          <Heading
            title="Fast treck, CIP, VIP"
            subTitle="Engage active clients at the right time and save time chasing unqualified leads"
            titleClass="text-[32px]"
          />
          <ArrowButton />
          <div>
            <Image
              src={carImage}
              alt="sofa image"
              className="absolute z-10 bottom-0"
            />
            <Image
              src={bgCar}
              alt="sofa image"
              className="absolute right-1/2 translate-x-1/2"
            />
          </div>
        </Card>
      </div>
      <div className="relative px-[60px] pb-[86px] h-[622px]">
        <Image
          src={bgServices}
          layout="fill"
          objectFit="cover"
          quality={100}
          alt={"Arrow right"}
          className={"-z-10"}
        />
        <div className="flex items-end h-full">
          <div className="max-w-[620px] ">
            <h2 className=" font-montserrat text-[45px] text-white font-bold leading-[60px] mb-2">
              Aviachipta sotib olgandan keyingi xizmatlar
            </h2>
            <p className="mb-12 text-white text-base font-inter  font-normal">
              Effortless time tracking and reporting. Save time and money with
              the time tracker trusted by more than 10,000 organizations.
            </p>
            <button className="bg-primary-red px-16 py-4 rounded-[10px] text-[22px] font-medium text-white font-inter">
              Izlash
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
