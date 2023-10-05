import { initializeCityDatabase, isCity } from "../test-utils";

describe("Deve executar repetidamente antes ou depois dos testes", () => {
  // ==============================================

  /*
   * beforeEach e afterEach são geralmente utilizados em testes sincronos, para cada unidade de teste.
   * beforeAll e afterAll são geralmente utilizados em testes assincronos ou em configuração global unica para todos os testes.
   *
   * Obs:
   * Os ganchos declarados dentro de um bloco describe, aplicam-se apenas aos testes dentro desse describe.
   * Você pode criar varias logicas de before e after para cada describe exclusivamente com a sua respectiva lógica.
   * Ele respeita o escopo (hoisting) do javascript.
   */

  // ==============================================

  let FAKE_CITY_DATABASE: Array<string> = [];

  // ==============================================

  // beforeEach: Executa antes de cada teste.

  // beforeEach(() => FAKE_CITY_DATABASE = initializeCityDatabase());

  // ==============================================

  // afterEach: Executa depois de cada teste.

  // afterEach(() => (FAKE_CITY_DATABASE = initializeCityDatabase()));

  // ==============================================

  // beforeAll: Executa antes de todos os testes.

  beforeAll(() => (FAKE_CITY_DATABASE = initializeCityDatabase()));

  // ==============================================

  // afterAll: Executa depois de todos os testes.

  // afterAll(() => (FAKE_CITY_DATABASE = initializeCityDatabase()));

  // ==============================================

  it("Deve retornar uma cidade que existe no banco de dados", () => {
    expect(isCity(FAKE_CITY_DATABASE, "São vicente")).toBeTruthy();
  });
  // ==============================================

  /*
   *
   * Ordem de execução
   *
   * Primeiro o jest executa todos os describes.
   * Depois ele executa todos os testes dentro de cada describe sequencialmente.
   * Por isso é importante prestar atenção nos before e afters de desmontagem.
   *
   */

  // ==============================================

  describe("Deve demonstrar a ordem de execução dos describes", () => {
    console.log("Aqui ficaria os before e afters da vida.");

    // ==============================================

    describe("Describe 1", () => {
      test("Teste dentro do describe 1", () =>
        console.log("Teste dentro do describe 1"));
    });
    // ==============================================

    describe("Describe 2", () => {
      test("Teste dentro do describe 2", () =>
        console.log("Teste dentro do describe 2"));
    });
    // ==============================================

    describe("Describe 3", () => {
      test("Teste dentro do describe 3", () =>
        console.log("Teste dentro do describe 3"));
    });

    /*
     * Ordem de execução: saída
     *
     * Deve demonstrar a ordem de execução dos describes
     * Aqui ficaria os before e afters da vida.
     * Describe 1
     * Describe 2
     * Describe 3
     * Teste dentro do describe 1
     * Teste dentro do describe 2
     * Teste dentro do describe 3
     */
  });

  // ==============================================

  /*
   *
   * Conselho geral:
   *
   * Se um teste está falhando, uma das primeiras coisas a verificar deveria ser se o teste está falhando quando é o unico teste que é executado.
   *
   * Para executar apenas um unico teste, altere temporariamente o comando test ou it para: (test.only ou it.only)
   *
   * Se você tiver uma teste que muitas vezes falha quando ele é executado como parte de um conjunto maior,
   * mas não falha quando você executá-lo sozinho, é uma boa aposta que algo de um teste diferente está interferindo com ele.
   * Muitas vezes, você pode consertar isso, limpando algum estado compartilhado com beforeEach.
   * Se você não tem certeza se algum estado compartilhado está sendo modificado,
   * você também pode tentar um beforeEach para emitir um log dos dados.
   *
   */
  // ==============================================
});
