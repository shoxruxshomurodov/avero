import Image from "next/image";
import React from "react";
import { newsOne, newsThree, newsTwo } from "../../../../assets/images/news";
import Card from "../../../card";
import Heading from "../../../heading";

const Index: React.FC = () => {
  return (
    <section className="pb-28 px-[60px]">
      <Heading
        title="Yangiliklar"
        subTitle="Engage active clients at the right time and save time chasing unqualified leads"
      />
      <div className="grid grid-cols-12 gap-6">
        <Card className="col-span-4 !bg-transparent">
          <Image
            src={newsOne}
            alt={"new Image"}
            layout={"responsive"}
            className="mb-6"
          />
          <Heading
            title="Yangi havo sayohati - yangi imkoniyatlar"
            titleClass="text-[25px] !font-bold leading-snug mb-6"
            subTitle="12 Sen, 2022"
            subTitleClass="text-sm text-black"
          />
        </Card>
        <Card className="col-span-4 !bg-transparent">
          <Image
            src={newsTwo}
            alt={"new Image"}
            layout={"responsive"}
            className="mb-6"
          />
          <Heading
            title="Visit Dubai kompaniyasi bilan hamkorlikda tanlovi"
            titleClass="text-[25px] !font-bold leading-snug mb-6"
            subTitle="12 Sen, 2022"
            subTitleClass="text-sm text-black"
          />
        </Card>
        <Card className="col-span-4 !bg-transparent">
          <Image
            src={newsThree}
            alt={"new Image"}
            layout={"responsive"}
            className="mb-6"
          />
          <Heading
            title="Yangi xizmatlarimizdan foydalanib ko’ring"
            titleClass="text-[25px] !font-bold leading-snug mb-6"
            subTitle="12 Sen, 2022"
            subTitleClass="text-sm text-black"
          />
        </Card>
      </div>
    </section>
  );
};

export default Index;
