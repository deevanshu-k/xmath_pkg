import {multiply} from "../src";

describe("#multiply fnx",() => {
    it("should return an integer value", () => {
        expect(typeof multiply(2,3)).toBe("number");
    });
    it("should return correct value",() => {
        expect(multiply(2,3)).toBe(6);
    })
});