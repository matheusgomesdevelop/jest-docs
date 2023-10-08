const axios = require("axios");

import { users } from "../../src/test-utils";

jest.mock("axios");

describe("Simulando modulos", () => {
  it("Deve mockar a resposta do axios", async () => {
    const users_data = [{ name: "Bob" }];
    const resp = { data: users_data };

    axios.get.mockResolvedValue(resp);

    return users().then((data) => expect(data).toEqual(users_data));
  });
});
