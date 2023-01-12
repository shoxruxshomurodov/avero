import React, { Fragment, ReactFragment, ReactNode } from "react";
import { Footer, Header } from "./components";
import { JsxElement } from "typescript";

interface Props {
  children: ReactNode;
}

const Index: React.FC<Props> = ({ children }) => {
  return (
    <div className="container mx-auto">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Index;
