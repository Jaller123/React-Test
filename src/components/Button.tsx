import React from "react";

interface Props {
  children: string;
  color: string;
  OnClick: () => void;
}

const Button = ({ children, OnClick, color }: Props) => {
  return (
    <button className={"btn btn" + color} onClick={OnClick}>
      {children}
    </button>
  );
};

export default Button;
