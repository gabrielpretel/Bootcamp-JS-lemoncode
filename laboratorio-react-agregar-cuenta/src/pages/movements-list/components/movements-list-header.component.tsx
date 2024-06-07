import React from "react";
import classes from "./movements-list-header.component.module.css";
import { AccountVm } from "../movements-list.vm";

interface Props {
  accountItem: AccountVm;
}

export const MovementListHeaderComponent: React.FC<Props> = (props) => {
  const { accountItem } = props;

  return (
    <>
      <div className={classes.headerContainer}>
        <h1>Saldos y últimos movimientos</h1>
        <div className={classes.amountContainer}>
          <span className={classes.amountText}>saldo disponible</span>
          <span className={classes.amountQuantity}>{accountItem.balance} €</span>
        </div>
      </div>
      <div className={classes.account}>
        <span>Alias: Gastos mes</span>
        <span>{accountItem.iban}</span>
      </div>
    </>
  );
};
