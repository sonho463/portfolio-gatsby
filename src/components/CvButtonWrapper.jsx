import * as React from "react";
import { CvButton } from "./CvButton";

export const CvButtonWrapper = ({ children, inView }) => {
  return (
    <>
      <CvButton inView={inView} />
      {children}
    </>
  );
};
