describe("Mock Valores de Retorno", () => {
  // =======================================

  it("Injetar valores de teste no código durante um teste", () => {
    const myMock = jest.fn();
    console.log(myMock());

    myMock.mockReturnValueOnce(10).mockReturnValueOnce("x").mockReturnValue(true);

    console.log(myMock(), myMock(), myMock(), myMock());
  });

  // =======================================

  it("Evitar a necessidade de stubs complicados que recriam o comportamento do componente", () => {
    const filterTestFn = jest.fn();

    // Faz o mock returnar 'true' na primeira chamada.
    // e 'false' na segunda chamada.
    filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

    const result = [11, 12].filter((num) => filterTestFn(num));

    console.log(result);
    // > [11]

    console.log(filterTestFn.mock.calls[0][0]); // 11
    console.log(filterTestFn.mock.calls[1][0]); // 12
  });
  // =======================================
});
