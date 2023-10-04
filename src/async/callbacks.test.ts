describe("Deve testar os Callbacks", () => {
  // ==============================
  it("Deve executar o teste dentro de um callback", (done) => {
    const fetchData = (callback: (error: string, data: string) => void) => {
      return callback("", "peanut butter");
    };

    function callback(error: string, data: string) {
      if (error) {
        done(error);
        return;
      }
      try {
        expect(data).toBe("peanut butter");
        done();
      } catch (error) {
        done(error);
      }
    }

    fetchData(callback);
  });
});
