import React from "react";
import LogoComponent from "@/components/logo/logo";
import LinkButton, { LinkButtonProps } from "@/components/linkBtn/linkBtn";
import HStyles from "@/pages/home/home.module.scss";

const HomePage: React.FC = () => {
  const linkBtnData: Array<LinkButtonProps> = [
    {
      btnColor: "Pink",
      btnText: "Play vs CPU",
      btnTo: "/play",
    },
    {
      btnColor: "Yellow",
      btnText: "Play vs Player",
      btnTo: "/play",
    },
    {
      btnColor: "White",
      btnText: "Game rules",
      btnTo: "/rules",
    },
  ];

  return (
    <section className={HStyles.home}>
      <div className={HStyles.homeWrap}>
        <div className={HStyles.logoWrap}>
          <LogoComponent />
        </div>

        <div>
          {linkBtnData.map((item) => (
            <LinkButton
              btnColor={item.btnColor}
              btnText={item.btnText}
              btnTo={item.btnTo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
