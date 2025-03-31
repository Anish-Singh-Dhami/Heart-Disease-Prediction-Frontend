import { Footer, Header } from "@/components";
import React from "react";
type Prop = {
  children: React.ReactNode;
};

const Layout = ({ children }: Prop) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {children}
    </div>
  );
};

export { Layout };
