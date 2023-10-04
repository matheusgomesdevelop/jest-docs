import { dispatchError, errorMessage, sum } from "../test-utils";

describe("Usando matches", () => {
  // =================================================================

  // Igualdade exata

  // =================================================================

  it("Deve retornar um valor com igualdade exata", () => {
    expect(sum(2, 2)).toBe(4);
  });
  // =================================================================

  /* toEqual recursivamente verifica cada campo de um objeto ou um array
   * Ele iguinora valores null e undefined
   * Para não ignorar utilize a prop toStrictEqual
   */

  // =================================================================

  it("Deve checar o valor", () => {
    let data: { [key: string]: number | undefined } = { one: 1, t: undefined };
    data["two"] = 2;

    expect(data).toEqual({ one: 1, two: 2 });
  });

  // =================================================================

  // Não ignorar null e undefined na verificação do valor: toStrictEqual

  // =================================================================

  it("Deve checar o valor", () => {
    let data: { [key: string]: number | undefined } = { one: 1, t: undefined };
    data["two"] = 2;

    expect(data).toStrictEqual({ one: 1, t: undefined, two: 2 });
  });

  // =================================================================

  // Negação do valor

  // =================================================================

  it("Deve resultar no resultado inverso", () => {
    for (let a = 1; a <= 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
  });

  // =================================================================

  // Verificando valores

  // =================================================================

  it("Deve verificar os valores corretamente", () => {
    const n = null;
    const m = true;

    // toBeNull: corresponde a apenas null.
    expect(n).toBeNull();

    // toBeUndefined: corresponde a apenas undefined.
    expect(n).toBeDefined();

    // toBeDefined: o oposto de toBeUndefined.
    expect(n).toBeDefined();

    // toBeTruthy: combina com qualquer coisa que uma instrução if retorne TRUE.
    expect(m).toBeTruthy();

    // toBeFalse: o oposto de toBeTruthy
    expect(n).toBeFalsy();

    // Negando com not
    expect(n).not.toBeTruthy();
  });

  // =================================================================

  // Matchers de comparação de números

  // =================================================================

  it("Deve comparar os numeros", () => {
    const value = sum(5, 2);
    const f = 0.7;

    // Maior que
    expect(value).toBeGreaterThan(2);

    // Maior ou igual
    expect(value).toBeGreaterThanOrEqual(4);

    // Menor que
    expect(value).toBeLessThan(8);

    // Menor ou igual
    expect(value).toBeLessThanOrEqual(7);

    // toBe e toEqual são equivalentes para números
    expect(value).toBe(7);
    expect(value).toEqual(7);

    // Para testar float utilize o toBeCloseTo ao invez do toEqual
    expect(f).toBeCloseTo(0.7);
  });

  // =================================================================

  // Matchers de comparação de strings.

  // =================================================================

  it("Deve comparar as string", () => {
    const nome = "matheus";

    // Verifica se possui uma letra
    expect(nome).toMatch(/matheus/);

    // Verifica se não possui uma letra
    expect(nome).not.toMatch(/gomes/);
  });

  // =================================================================

  // Matchers de arrays

  // =================================================================

  it("Deve comparando arrays", () => {
    const carros = ["bmw", "fiesta"];

    // Verifica se um item existe no array
    expect(carros).toContain("bmw");
  });

  // =================================================================

  // Matchers de exceções

  // =================================================================

  it("Deve testar as exceções", () => {
    // Ocorreu uma exceção
    expect(() => dispatchError()).toThrow();

    // Ocorreu uma exceção do tiro Error
    expect(() => dispatchError()).toThrow(Error);

    // Ocorreu uma exceção com a mensagem exata
    expect(() => dispatchError()).toThrow(errorMessage);

    // Verifica se existe a string na mensagem do erro
    expect(() => dispatchError()).toThrow(/erro/);

    // Verifica a mensagem exata do throw
    expect(() => dispatchError()).toThrow(/Deu um erro de exceção/);
  });
});
