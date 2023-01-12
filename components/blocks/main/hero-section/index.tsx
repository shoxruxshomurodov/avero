import Image from "next/image";
import React from "react";
import { cabinCareIcon } from "../../../../assets/images/icons";
import { borderBottom, bgRight, bgLeft } from "../../../../assets/images/hero";

const Index: React.FC = () => {
  return (
    <section className="pb-24 pt-28 bg-primary-blue relative">
      <div className="flex justify-center mb-20">
        <div className="font-montserrat  text-center flex flex-col items-center text-white ">
          <h1 className="max-w-4xl font-bold text-[110px] leading-[120px] -tracking-[4%] mb-2.5">
            Qulay{" "}
            <span className="italic">
              <span
                className={
                  "ml-20 text-primary-red relative bottom-image inline"
                }
              >
                <span
                  className={
                    "absolute bg-primary-red w-[70px] h-[70px] rounded-full  bottom-1/3 translate-y-1/3 -left-20"
                  }
                >
                  <span className={"flex justify-center items-center h-full"}>
                    <Image src={cabinCareIcon} alt={"logo"} />
                  </span>
                </span>
                avia
                <span className={"absolute -bottom-1 w-full left-0"}>
                  <Image src={borderBottom} alt={"logo"} />
                </span>
              </span>{" "}
            </span>{" "}
            yordamchingiz
          </h1>
          <p className="max-w-2xl text-2xl -tracking-[2%] font-inter font-normal">
            Joy band qiling, mos ovqat tanlang va boshqalar xizmatlardan
            foydalaning
          </p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-12 gap-[10px]  text-white font-inter font-medium text-[22px]">
          <div className="col-span-10 grid grid-cols-12 gap-1">
            <div className="col-span-2 flex flex-col px-5 py-4 bg-[#ffffff40] rounded-l-2xl">
              <label className="text-sm font-normal mb-1">Turi</label>
              <input
                type="text"
                className="bg-transparent focus:outline-none placeholder:text-white"
                placeholder={"Chipta"}
              />
            </div>
            <div className="col-span-4 flex flex-col px-5 py-4 bg-[#ffffff40]">
              <label className="text-sm font-normal mb-1">Chipta raqami</label>
              <input
                type="text"
                className="bg-transparent focus:outline-none placeholder:text-white"
                placeholder={"250 2103163081"}
              />
            </div>
            <div className="col-span-3 flex flex-col px-5 py-4 bg-[#ffffff40]">
              <label className="text-sm font-normal mb-1">Familya</label>
              <input
                type="text"
                className="bg-transparent focus:outline-none placeholder:text-white"
                placeholder={"Kurbanov"}
              />
            </div>
            <div className="col-span-3 flex flex-col px-5 py-4 bg-[#ffffff40] rounded-r-2xl">
              <label className="text-sm font-normal mb-1">Aeroport</label>
              <input
                type="text"
                className="bg-transparent focus:outline-none placeholder:text-white"
                placeholder={"Uzairways"}
              />
            </div>
          </div>
          <div className="col-span-2 z-20">
            <button
              type="submit"
              className="bg-primary-red rounded-2xl w-full h-full"
            >
              Izlash
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 -z-0">
        <Image src={bgRight} alt="cloud" />
      </div>
      <div className="absolute top-0 left-0 -z-0">
        <Image src={bgLeft} alt="cloud" />
      </div>
    </section>
  );
};

export default Index;
