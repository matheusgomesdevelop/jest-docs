const axios = require("axios");

import { users } from "../../src/test-utils";

import defaultExport, { bar, foo } from "../foo-bar-baz";

jest.mock("axios");
jest.mock("../foo");
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

  // ==============================================

  it("Deve mudar o comportamento da implementação da função com mock", () => {
    const fooMock = require("../foo");

    // Muda o comportamento da função para retornar de uma nova maneira como você preferir
    fooMock.mockImplementation(() => 42);
    expect(fooMock()).toBe(42);

    // Para mudar o comportamento de funcoes mais complexas
    fooMock.mockImplementation(() => 42).mockImplementationOnce(() => 43);
    expect(fooMock()).toBe(43);
  });

  // ==============================================

  describe("Deve criar nomes personalizados para os mocks", () => {
    // ==============================================

    it("Mock names", () => {
      const myMockFn = jest
        .fn()
        .mockReturnValue("default")
        .mockImplementation((scalar) => 42 + scalar)
        .mockName("add42");
    });

    // ==============================================

    describe("Matches personalizados", () => {
      // ==============================================

      const myMockFn = jest
        .fn()
        .mockReturnValue("default")
        .mockImplementation((scalar) => 42 + scalar)
        .mockName("add42");

      // ==============================================
      myMockFn(7);
      myMockFn(3);

      it("A função foi chamada pelo menos uma vez.", () => {
        expect(myMockFn).toHaveBeenCalled();
      });

      it("A função foi chamada com o argumento: 7", () => {
        expect(myMockFn).toHaveBeenCalledWith(3);
      });

      it("A ultima chamada da função foi executada com o parameto: 3", () => {
        expect(myMockFn).toHaveBeenLastCalledWith(3);
      });

      it("A chamada e o nome foi escrita de acordo com o teste de snapshot", () => {
        expect(myMockFn).toMatchSnapshot();
      });

      it("O numero de chamadas do mock foi maior que o parametro passado", () => {
        expect(myMockFn.mock.calls.length).toBeGreaterThan(0);
      });

      it("A função mock foi chamada pelo menos uma vez com o parametro especifico", () => {
        expect(myMockFn.mock.calls).toContainEqual([3]);
      });

      it("A ultima chamada da funcao recebeu os parametros especificos", () => {
        expect(myMockFn.mock.calls[myMockFn.mock.calls.length - 1]).toEqual([3]);
      });

      it("Deve identificar o primeiro argumento da ultima chamada.", () => {
        expect(myMockFn.mock.calls[myMockFn.mock.calls.length - 1][0]).toBe(3);
      });

      it("Deve verificar o nome da funcao mock executada", () => {
        expect(myMockFn.getMockName()).toBe("add42");

        myMockFn.mockName("novoNome");

        expect(myMockFn.getMockName()).toBe("novoNome");
      });
    });
  });
});
