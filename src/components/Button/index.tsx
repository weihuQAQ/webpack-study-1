import { Button as MaterialButton } from "@mui/material";
import { FC } from "react";
import { PropsWithChildren } from "react";

const Button: FC<PropsWithChildren> = (props) => {
  console.log(process.env.AAA);

  return <MaterialButton variant="outlined">{props.children}</MaterialButton>;
};

export default Button;
