import React, { Fragment } from "react";
import clsx from "clsx";

interface Props {
  title: string;
  subTitle: string;
  className?: string;
  titleClass?: string;
  subTitleClass?: string;
}

const Index: React.FC<Props> = ({
  title = "",
  subTitle = "",
  className = "max-w-md mb-10  tracking-[-2%]",
  titleClass = "text-[45px]  leading-[45px] mb-2.5",
  subTitleClass = "text-base",
}) => {
  return (
    <div className={clsx(className)}>
      <h3 className={clsx("font-semibold font-montserrat", titleClass)}>
        {title}
      </h3>
      <p className={clsx("text-[#7C7C7C] font-inter", subTitleClass)}>
        {subTitle}
      </p>
    </div>
  );
};

export default Index;
