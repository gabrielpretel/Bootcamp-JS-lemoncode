import React from "react";
import LogoHeader from "/assets/logo_header_white.svg";
import classes from "./header.component.module.css";
import { useProfileContext } from "@/core/profile";

export const HeaderComponent: React.FC = () => {
  const { userName } = useProfileContext();

  return (
    <header className={classes.header}>
      <div>
        <img src={LogoHeader} className={classes.headerLogo} />
        <div className={classes.usuario}>
          <p>{userName}</p>
        </div>
      </div>
    </header>
  );
};
