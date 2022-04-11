const {
    add, subtract, divide, multiply, squareroot, max
} = require("./math")

describe("Testing the math module", () => {

    test("should add 1 + 2 and get 3", () => {
        expect(add(1, 2)).toBe(3);
    });

    test("should subtract 3 - 5 and get 2", () => {
        expect(subtract(5,3)).toBe(2);
    });

    test("should divide 10 / 2 to get 5", () => {
        expect(divide(10, 2)).toBe(5);
    })

    test("should multiply 4 * 4 to get 16", () => {
        expect(multiply(4, 4)).toBe(16);
    })

});

describe("Testing advance math", () => {

    test("should get the squareroot of 81 which is 9", () => {
        expect(squareroot(81)).toBe(9);
    })

    test("should find the highest value out of 10, 33, 2, 67, 78 which is 78", () => {
        expect(max(10, 33, 2, 67, 78)).toBe(78);
    })

});