import React from "react";
import LStyles from "./logo.module.scss";

const LogoComponent: React.FC = () => {
  return (
    <div className={LStyles.logo}>
      <div className={LStyles.logoRow}>
        <span className={LStyles.circlePink}></span>
        <span className={LStyles.circleYellow}></span>
      </div>

      <div className={LStyles.logoRow}>
        <span className={LStyles.circleYellow}></span>
        <span className={LStyles.circlePink}></span>
      </div>
    </div>
  );
};

export default LogoComponent;
