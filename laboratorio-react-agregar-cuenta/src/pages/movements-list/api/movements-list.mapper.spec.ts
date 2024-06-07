import * as apiModel from "./movemets-list.api.model";
import {
  mapMovementListFromApiToVm,
  mapAccountListFromApiToVm,
} from "./movements-list.mapper";

describe("pages/movements-list/api/movement-list.mapper tests", () => {
  describe("mapMovementListFromApitoVm", () => {
    it("should return empty array when it feeds empty array", () => {
      // Arrange
      const movementList: apiModel.MovementApiModel[] = [];

      // Act
      const result = mapMovementListFromApiToVm(movementList);

      //Assert
      expect(result).toEqual([]);
    });

    it("should return same array but using view model structure", () => {
      // Arrange
      const movementList: apiModel.MovementApiModel[] = [
        {
          id: "1",
          description: "Nómina noviembre",
          amount: 900,
          balance: 1490,
          transaction: "2019-12-09T21:30:00",
          realTransaction: "2019-12-09T21:30:00",
          accountId: "1",
        },
        {
          id: "2",
          description: "Alquiler noviembre",
          amount: -400,
          balance: 590,
          transaction: "2019-12-07T11:30:00",
          realTransaction: "2019-12-08T20:00:10",
          accountId: "1",
        },
      ];

      // Act
      const result = mapMovementListFromApiToVm(movementList);

      // Assert
      expect(result).toEqual([
        {
          id: "1",
          description: "Nómina noviembre",
          amount: "900",
          balance: "1490",
          transaction: new Date("2019-12-09T21:30:00"),
          realTransaction: new Date("2019-12-09T21:30:00"),
          accountId: "1",
        },
        {
          id: "2",
          description: "Alquiler noviembre",
          amount: "-400",
          balance: "590",
          transaction: new Date("2019-12-07T11:30:00"),
          realTransaction: new Date("2019-12-08T20:00:10"),
          accountId: "1",
        },
      ]);
    });
  });

  describe("mapAccountListFromApiToVm", () => {
    it("should return empty obejct when it feeds empty object", () => {
      // Arrange
      const accountItem: apiModel.AccountItemForMovementApiModel = {
        id: "",
        iban: "",
        type: "",
        name: "",
        balance: 0,
        lastTransaction: "",
      };

      // Act
      const result = mapAccountListFromApiToVm(accountItem);

      //Assert
      expect(result).toEqual({
        id: "",
        iban: "",
        type: "",
        name: "",
        balance: "",
        lastTransaction: new Date(""),
      });
    });

    it("should return same object but using view model structure", () => {
      // Arrange
      const accountItem: apiModel.AccountItemForMovementApiModel = {
        id: "1",
        iban: "ES91 2100 0418 4502 0005 1332",
        type: "1",
        name: "Gastos mes",
        balance: 1490,
        lastTransaction: "2019-12-09T21:30:00",
      };
      // Act
      const result = mapAccountListFromApiToVm(accountItem);

      // Assert
      expect(result).toEqual({
        id: "1",
        iban: "ES91 2100 0418 4502 0005 1332",
        type: "1",
        name: "Gastos mes",
        balance: "1490",
        lastTransaction: new Date("2019-12-09T21:30:00"),
      });
    });
  });
});
