import { sum } from "./test-utils";

describe("Usando matches", () => {
  // Igualdade exata
  it("Deve retornar um valor com igualdade exata", () => {
    expect(sum(2, 2)).toBe(4);
  });

  /* toEqual recursivamente verifica cada campo de um objeto ou um array
   * Ele iguinora valores null e undefined
   * Para não ignorar utilize a prop toStrictEqual
   */
  it("Deve checar o valor", () => {
    let data: { [key: string]: number | undefined } = { one: 1, t: undefined };
    data["two"] = 2;

    expect(data).toEqual({ one: 1, two: 2 });
  });

  // Não ignorar null e undefined na verificação do valor: toStrictEqual
  it("Deve checar o valor", () => {
    let data: { [key: string]: number | undefined } = { one: 1, t: undefined };
    data["two"] = 2;

    expect(data).toStrictEqual({ one: 1, t: undefined, two: 2 });
  });

  // Negação do valor
  it("Deve resultar no resultado inverso", () => {
    for (let a = 1; a <= 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
  });

  // Verificando valores
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
});
