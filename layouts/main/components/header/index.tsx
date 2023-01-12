import Image from "next/image";
import React from "react";
import { PrimaryLogo } from "../../../../assets/images/logos";

const Index: React.FC = () => {
  return (
    <header className="font-inter text-2xl font-bold flex justify-center bg-[#043785]">
      <Image src={PrimaryLogo} alt="Logo" height={32} className="pt-8" />
    </header>
  );
};

export default Index;
