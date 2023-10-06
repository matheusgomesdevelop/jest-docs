import { forEach, util_callback } from "../test-utils";

describe("Funções de simulação (mock)", () => {
  // ================================================================

  const mockCallback = jest.fn(util_callback);

  // ================================================================

  beforeAll(() => {
    const number_list = [0, 1];
    forEach(number_list, mockCallback);
  });

  // ================================================================

  describe("Deve testar as funções mock", () => {
    // ================================================================

    it("A função mock foi chamada duas vezes", () => {
      expect(mockCallback.mock.calls).toHaveLength(2);
    });

    // ================================================================

    it("Na primeira chamada do callback, o primeiro parametro da função é 0", () => {
      expect(mockCallback.mock.calls[0][0]).toBe(0);
    });

    // ================================================================

    it("Na segunda chamada do callback, o segundo parametro da função é 1", () => {
      expect(mockCallback.mock.calls[1][0]).toBe(1);
    });

    // ================================================================

    it("O retorno do valor da primeira chamada é 42", () => {
      expect(mockCallback.mock.results[0].value).toBe(42);
    });

    // ================================================================
  });

  // ================================================================

  describe("Funções uteis para verificação de chamadas, instancias e retorno", () => {
    // ================================================================

    it("A função foi chamada exatamente 1 vez", () => {
      expect(mockCallback.mock.calls).toHaveLength(2);
    });

    // ================================================================

    it("O primeiro valor da primeira chamada é 0", () => {
      expect(mockCallback.mock.results[0].value).toBe(42);
    });

    // ================================================================

    it("A função foi chamada exatamente 2 vezes", () => {
      expect(mockCallback.mock.instances.length).toBe(2);
    });

    // ================================================================

    it("O primeiro argumento da ultima chamada do callback é 2", () => {
      if (mockCallback.mock.lastCall) {
        expect(mockCallback.mock.lastCall[0]).toBe(1);
      }
    });
    // ================================================================
  });

  // ================================================================
});
