import React from "react";
import Image from "next/image";
import { PrimaryLogo } from "../../../../assets/images/logos";
import { get, map } from "lodash";
import { footer, footerLinks } from "../../../../mock/footer";
import dayjs from "dayjs";

const Index: React.FC = () => {
  const currentYear = dayjs().year();
  return (
    <footer className="grid grid-cols-12 gap-5 pb-8 px-[60px]">
      <div className="col-span-12 md:col-span-5 xl:col-span-4 bg-primary-gray xl:px-14 pt-5 lg:pt-14 pb-7 text-white rounded-2xl flex flex-col items-center">
        <Image src={PrimaryLogo} alt={"logo"} />
        <p className="mb-3 mt-6 md:mt-14 text-center">
          Mijozlarga xizmat ko‘rsatish bo‘limi
        </p>
        <a
          className="px-6 py-3 bg-[#31393E] rounded-[10px] font-semibold text-base md:text-lg lg:text-2xl mb-4 md:mb-10 cursor-pointer"
          href="tel:+998997275098"
        >
          (+998 78) 100-00-00
        </a>
        <ul className="inline-flex gap-7 mb-5 md:mb-14">
          {map(footerLinks, (link) => (
            <li key={get(link, "id")} className="cursor-pointer">
              <Image src={get(link, "image")} alt="social icon" />
            </li>
          ))}
        </ul>
        <a href="/" className="text-[#979797] text-sm">
          &copy; aviahelp.uz, {currentYear}
        </a>
      </div>
      <div className="col-span-12 md:col-span-7 xl:col-span-8 bg-[#F9F9F9] rounded-2xl px-14 pt-8 md:pt-14 pb-7 text-[#202020] flex flex-col h-full justify-between">
        <div className="flex flex-col md:flex-row md:justify-between flex-wrap  gap-4">
          {map(footer, (item) => (
            <div key={get(item, "title")}>
              <h3 className="text-2xl font-bold mb-5 md:mb-7">
                {get(item, "title")}
              </h3>
              <ul className="flex flex-col">
                {map(get(item, "children"), (child) => (
                  <li
                    className="mb-2 max-w-[250px] text-[#202020] text-lg cursor-pointer"
                    key={get(child, "title")}
                  >
                    {get(child, "title")}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <ul className="inline-flex gap-8 text-primary-gray text-sm ">
          <li>
            <a href="#">Maxfiylik siyosati</a>
          </li>
          <li>
            <a href="#">Shartnoma taklifi </a>
          </li>
          <li>
            <a href="#">To'lov</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Index;
