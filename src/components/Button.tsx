import React from "react";

type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  title: string;
};

export const Button = (props: ButtonProps) => {
  return <button onClick={e => props.handleClick(e, 1)}>{props.title}</button>;
};
