import { forEach, util_callback } from "../test-utils";

const mockCallback = jest.fn(util_callback);

describe("Funções de simulação (mock)", () => {
  // ================================================================

  it("Deve testar as funções mock", () => {
    const number_list = [0, 1];
    forEach(number_list, mockCallback);

    // A função mock foi chamada duas vezes
    expect(mockCallback.mock.calls).toHaveLength(2);

    // Na primeira chamada do callback, o primeiro indice do array é 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);

    // Na segunda chamada do callback, o segundo indice do array é 1
    expect(mockCallback.mock.calls[1][0]).toBe(1);

    // O retorno do valor da primeira chamada é 42
    expect(mockCallback.mock.results[0].value).toBe(42);
  });

  // ================================================================
});
