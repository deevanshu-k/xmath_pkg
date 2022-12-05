import {multiply,add} from "../src";

describe("#multiply fnx",() => {
    it("should return an integer value", () => {
        expect(typeof multiply(2,3)).toBe("number");
    });
    it("should return correct value",() => {
        expect(multiply(2,3)).toBe(6);
    })
});
describe("#add fnx",() => {
    it("should return an integer value", () => {
        expect(typeof add(2,3)).toBe("number");
    });
    it("should return correct value",() => {
        expect(add(2,3)).toBe(5);
    })
});