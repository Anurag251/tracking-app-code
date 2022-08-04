import React from "react";
import { ThinArrowIcon } from "./icons.component";

const CustomButton = ({ noArrow, children, ...otherProps }) => {
  return (
    <button className="custom-button" {...otherProps}>
      {children} {noArrow ? null : <ThinArrowIcon />}
    </button>
  );
};

export default CustomButton;
