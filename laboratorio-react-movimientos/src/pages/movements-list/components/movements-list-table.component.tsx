import React from "react";
import { MovementVm } from "../movements-list.vm";
import classes from "./movements-list-table.module.css";
import { MovementsListItemComponent } from "./movements-list-item.component";

interface Props {
  movementList: MovementVm[];
}

export const MovementListTableComponent: React.FC<Props> = (props) => {
  const { movementList } = props;

  return (
    <div className={classes.gridContainer}>
      <div className={classes.gridTable}>
        <div className={classes.headerTable}>
          <span className={classes.headerCell}>Fecha</span>
          <span className={classes.headerCell}>Fecha Valor</span>
          <span className={classes.headerCell}>Descripción</span>
          <span className={classes.headerCell}>Importe</span>
          <span className={classes.headerCell}>Saldo disponible</span>
        </div>
        {movementList.map((movement) => (
          <MovementsListItemComponent
            key={movement.id}
            movementItem={movement}
          />
        ))}
      </div>
    </div>
  );
};
