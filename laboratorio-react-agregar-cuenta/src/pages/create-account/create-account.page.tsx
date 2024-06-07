import { AppLayout } from "@/layouts";
import React from "react";
import classes from "./create-account.page.module.css";
import { CreateAccountFormComponent } from "./components/create-acount-form.component";
import { AccountVm } from "./create-account.vm";
import { saveAccount } from "./api";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "@/core/router";

export const CreateAccountPage: React.FC = () => {
  const navigate = useNavigate();

  const handleAccount = (accountInfo: AccountVm) => {
    saveAccount(accountInfo).then((result) => {
      if (result) {
        navigate(appRoutes.accountList);
        alert("Cuenta creada con éxito");
      } else {
        alert("No se ha podido crear la cuenta");
      }
    });
  };

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Cuenta Bancaria</h1>
        </div>
        <CreateAccountFormComponent onCreate={handleAccount} />
      </div>
    </AppLayout>
  );
};
