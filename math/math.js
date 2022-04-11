const add =  (a, b) => {
    return a + b
};

const subtract = (a, b) => {
    return a - b
};

const divide = (a, b) => {
    return a / b
};

const multiply = (a, b) => {
    return a * b
};

const squareroot = (num) => Math.sqrt(num);

const max = (a, b, c, d, e) => Math.max(a, b, c, d, e)

module.exports = {
    add,
    subtract,
    divide,
    multiply,
    squareroot,
    max
}