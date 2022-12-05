import {multiply,add} from "../src";

describe("#multiply fnx",() => {
    it("should return an integer value", () => {
        expect(typeof multiply(2,3)).toBe("number");
    });
    it("should return correct value",() => {
        expect(multiply(2,3,5)).toBe(30);
    });
});
describe("#add fnx",() => {
    it("should return an integer value", () => {
        expect(typeof add(1,2,3,4,5,6)).toBe("number");
    });
    it("should return correct value",() => {
        expect(add(1,2,3,4,5,6)).toBe(21);
    });
});