import { AppLayout } from "@/layouts";
import React from "react";
import { MovementVm, AccountVm, defaultAccountItem } from "./movements-list.vm";
import classes from "./movements-list.page.module.css";
import { MovementListTableComponent } from "./components/movements-list-table.component";
import { MovementListHeaderComponent } from "./components/movements-list-header.component";
import { getAccountItem, getMovementList } from "./api";
import { useParams } from "react-router-dom";
import {
  mapAccountListFromApiToVm,
  mapMovementListFromApiToVm,
} from "./api/movements-list.mapper";

export const MovementListPage: React.FC = () => {
  const [movementList, setMovementList] = React.useState<MovementVm[]>([]);
  const [accountItem, setAccountItem] =
    React.useState<AccountVm>(defaultAccountItem);
  const { id } = useParams<{ id: string }>();

  React.useEffect(() => {
    if (id) {
      getMovementList(id).then((result) =>
        setMovementList(mapMovementListFromApiToVm(result))
      );

      getAccountItem(id).then((result) => {
        const accountItem = result[0];
        setAccountItem(mapAccountListFromApiToVm(accountItem));
      });
    } else {
      throw new Error("Missing parameter id");
    }
  }, []);

  return (
    <AppLayout>
      <div className={classes.root}>
        <MovementListHeaderComponent accountItem={accountItem} />
        <MovementListTableComponent movementList={movementList} />
      </div>
    </AppLayout>
  );
};
