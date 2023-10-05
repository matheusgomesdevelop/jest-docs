import { initializeCityDatabase, isCity } from "../test-utils";

describe("Deve executar repetidamente antes ou depois dos testes", () => {
  let FAKE_CITY_DATABASE: Array<string> = [];

  // ==============================================

  //    beforeEach: Executa antes de cada teste.

  // ==============================================

  beforeEach(() => {
    FAKE_CITY_DATABASE = initializeCityDatabase();
  });

  // ==============================================

  it("Deve retornar uma cidade que existe no banco de dados", () => {
    expect(isCity(FAKE_CITY_DATABASE, "São vicente")).toBeTruthy();
  });
  // ==============================================
});
