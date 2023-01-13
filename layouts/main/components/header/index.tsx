import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { PrimaryLogo, SecondaryLogo } from "../../../../assets/images/logos";

interface Props {
  rest?: {};
  primary?: boolean;
}
const Index: React.FC<Props> = ({ primary }) => {
  return (
    <header
      className={clsx(
        "font-inter text-2xl font-bold flex justify-center ",
        primary ? "bg-[#043785]" : "bg-[#F1F3F6]"
      )}
    >
      <Image
        src={primary ? PrimaryLogo : SecondaryLogo}
        alt="Logo"
        height={32}
        className="pt-8"
      />
    </header>
  );
};

export default Index;
