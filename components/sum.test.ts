import { sum } from "./test-utils"

it("A soma de 1 + 2 deverá resultar em 3", () => {
    expect(sum(1, 2)).toBe(3)
})