import { fetchData } from "../test-utils";

describe("Testando Código Assíncrono", () => {
  // ====================================

  // Testando promisses

  // ====================================

  it("Deve testar as Promises", () => {
    return fetchData().then((data) => {
      expect(data).toBe("peanut butter");
    });
  });

  // ====================================

  // Async/Await

  // ====================================

  describe("Deve testar as Promises com assincronas", () => {
    // ====================================

    it("Deve testar as Promises com async/await", async () => {
      const data = await fetchData();
      expect(data).toBe("peanut butter");
    });

    // ====================================

    it("Deve testar as [exceptions] do async", async () => {
      try {
        await fetchData();
      } catch (e) {
        expect(e).toMatch("error");
      }
    });

    // ====================================

    it("Deve testar a resolução do async com [resolves]", async () => {
      await expect(fetchData()).resolves.toBe("peanut butter");
    });

    // ====================================

    it("Deve testar a resolução do async com [reject]", async () => {
      // await expect(fetchData()).rejects.toBe("error");
    });

    // ====================================

    it("Deve testar a resolução do async com [catch]", async () => {
      // expect.assertions(1);
      // return fetchData().catch((e) => expect(e).toMatch("error"));
    });
  });

  // ====================================
});
