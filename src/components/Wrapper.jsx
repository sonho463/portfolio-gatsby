import * as React from "react";
import { CvButton } from "./CvButton";

export const Wrapper = ({ children, inView }) => {
  return (
    <>
      <CvButton inView={inView} />
      {children}
    </>
  );
};
