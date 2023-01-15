import React, { ReactNode } from "react";
import { Footer, Header } from "./components";

interface Props {
  children: ReactNode;
  rest?: {};
  primary?: boolean;
}

const Index: React.FC<Props> = ({ children, primary }) => {
  return (
    <div className="container mx-auto">
      <Header primary={primary} />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  );
};

export default Index;
