import { sum } from "./test-utils";

describe("Usando matches", () => {
  // Igualdade exata
  it("Deve retornar um valor com igualdade exata", () => {
    expect(sum(2, 2)).toBe(4);
  });

  /* toEqual recursivamente verifica cada campo de um objeto ou um array
   * Ele iguinora valores nulll e undefined
   * Para não ignorar utilize a prop toStrictEqual
   */
  it("Deve checar o valor", () => {
    let data: { [key: string]: number | undefined } = { one: 1, t: undefined };
    data["two"] = 2;

    expect(data).toEqual({ one: 1, two: 2 });
  });

  // Não ignora null e undefined na verificação do valor
  it("Deve checar o valor", () => {
    let data: { [key: string]: number | undefined } = { one: 1, t: undefined };
    data["two"] = 2;

    expect(data).toStrictEqual({ one: 1, t: undefined, two: 2 });
  });
});
