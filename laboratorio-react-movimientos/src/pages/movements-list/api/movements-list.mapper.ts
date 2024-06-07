import * as apiModel from "./movemets-list.api.model";
import * as viewModel from "../movements-list.vm";

export const mapMovementListFromApiToVm = (
  movementList: apiModel.MovementApiModel[]
): viewModel.MovementVm[] =>
  movementList.map((movement) => ({
    id: movement.id,
    description: movement.description,
    amount: movement.amount.toString(),
    balance: movement.balance.toString(),
    transaction: new Date(movement.transaction),
    realTransaction: new Date(movement.realTransaction),
    accountId: movement.accountId,
  }));

export const mapAccountListFromApiToVm = (
  accountItem: apiModel.AccountItemForMovementApiModel
): viewModel.AccountVm => {
  return {
    id: accountItem.id,
    iban: accountItem.iban,
    type: accountItem.type,
    name: accountItem.name,
    balance: accountItem.balance ? accountItem.balance.toString() : "",
    lastTransaction: new Date(accountItem.lastTransaction),
  };
};
