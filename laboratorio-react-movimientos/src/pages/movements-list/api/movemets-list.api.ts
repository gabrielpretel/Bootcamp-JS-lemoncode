import Axios from "axios";
import {
  MovementApiModel,
  AccountItemForMovementApiModel,
} from "./movemets-list.api.model";

const urlMovements = `${import.meta.env.VITE_BASE_API_URL}/movements`;
const urlAccounts = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const getMovementList = (
  accountId: string
): Promise<MovementApiModel[]> =>
  Axios.get<MovementApiModel[]>(urlMovements, { params: { accountId } }).then(
    ({ data }) => data
  );

export const getAccountItem = (
  id: string
): Promise<AccountItemForMovementApiModel[]> =>
  Axios.get<AccountItemForMovementApiModel[]>(urlAccounts, {
    params: { id },
  }).then(({ data }) => data);
