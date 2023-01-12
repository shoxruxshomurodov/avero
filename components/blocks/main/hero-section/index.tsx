import Image from "next/image";
import React from "react";
import { cabinCareIcon } from "../../../../assets/images/icons";
import { borderBottom } from "../../../../assets/images/header";

const Index: React.FC = () => {
  return (
    <section className="pb-24 pt-28 bg-primary-blue">
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
      <div className="max-w-6xl mx-auto">
        <form className="flex gap-4">
          <div className="flex gap-[3px] text-white font-inter font-medium text-[22px] w-[85%]">
            <div className="flex flex-col px-5 py-4 bg-blue-400 rounded-l-md w-1/5">
              <label>Turi</label>
              <input type="text" className="bg-transparent " value={"Chipta"} />
            </div>
            <div className="flex flex-col bg-blue-400 px-6 py-4 w-[30%]">
              <label>Turi</label>
              <input type="text" />
            </div>
            <div className="flex flex-col bg-blue-400 px-6 py-4  w-[30%]">
              <label>Turi</label>
              <input type="text" />
            </div>
            <div className="flex flex-col bg-blue-400 px-6 py-4  rounded-r-md w-1/5">
              <label>Turi</label>
              <input type="text" />
            </div>
          </div>
          <div className="w-[15%]">
            <button className="bg-primary-red rounded-md w-full h-full">
              Izlash
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Index;
