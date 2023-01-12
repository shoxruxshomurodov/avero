import React, { ReactElement, ReactNode } from "react";
import clsx from "clsx";

interface CartProps {
  className?: string;
  children: ReactNode | ReactElement;
}

const Index = ({ children, className }: CartProps) => {
  return (
    <div className={clsx(className, "rounded-[25px] bg-[#F9EFF1]")}>
      {children}
    </div>
  );
};

export default Index;
