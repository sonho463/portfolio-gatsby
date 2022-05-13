import * as React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
      <div className="container">
        <Header />
        <div className="content">{children}</div>
        <Footer />
      </div>
  );
};
