import {multiply,add, pow} from "../src";

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
describe("#pow fnx",() => {
    it("should return an integer value",() => {
        expect(typeof add(1,2,3,4,5,6)).toBe("number");
    });
    it("should return correct value",() => {
        expect(pow(2,10)).toBe(1024);
        expect(pow(2,1)).toBe(2);
        expect(pow(2,0)).toBe(1);
    });
})