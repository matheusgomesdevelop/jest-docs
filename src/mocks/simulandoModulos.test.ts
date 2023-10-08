const axios = require("axios");

import { users } from "../../src/test-utils";

import defaultExport, { bar, foo } from "../foo-bar-baz";

jest.mock("axios");

jest.mock("../foo-bar-baz", () => {
  const originalModule = jest.requireActual("../foo-bar-baz");

  // Mock da exportação default e renomeando export 'foo'
  return {
    __esModule: true,
    ...originalModule,
    default: jest.fn(() => "mocked baz"),
    foo: "mocked foo",
  };
});

describe("Simulando modulos", () => {
  // ==============================================
  it("Deve mockar a resposta do axios", async () => {
    const users_data = [{ name: "Bob" }];
    const resp = { data: users_data };

    /*
     * Retorna os dados que queremos que nosso teste afirme contra.
     * Assim dizemos para o axios.get retornar uma resposta falsa.
     */

    axios.get.mockResolvedValue(resp);

    return users().then((data) => expect(data).toEqual(users_data));
  });

  // ==============================================

  it("Deve sobrescrever uma parte do modulo e manter o resto como original", () => {
    const defaultExportResult = defaultExport();

    expect(defaultExportResult).toBe("mocked baz");
    expect(defaultExport).toHaveBeenCalled();

    expect(foo).toBe("mocked foo");
    expect(bar()).toBe("bar");
  });
});
