import { fetchData } from "../test-utils";

describe("Testando Código Assíncrono", () => {
  // ====================================
  it("Deve testar as Promises", () => {
    return fetchData().then((data) => {
      expect(data).toBe("peanut butter");
    });
  });
});
