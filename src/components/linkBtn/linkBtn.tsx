import React from "react";
import { Link } from "react-router-dom";
import { ColorType } from "@/types";
import LBStyles from "@/components/linkBtn/linkBtn.module.scss";

export interface LinkButtonProps {
  btnColor: ColorType;
  btnText: string;
  btnTo: string;
  btnIcon?: React.ReactNode;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  btnColor,
  btnIcon,
  btnText,
  btnTo,
}: LinkButtonProps) => {
  const LinkBgClass: string = `link${btnColor}`;

  return (
    <div className={LBStyles.linkWrapper}>
      <Link
        to={btnTo}
        className={LBStyles[LinkBgClass]}
      >
        <span>{btnText}</span>
        <span>{btnIcon}</span>
      </Link>
    </div>
  );
};

export default LinkButton;
