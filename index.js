/**
 * Generates an array of numbers from start to end.
 * @param {number} start first number of sequence
 * @param {number} end last number of sequence
 * @param {number | null | undefined} step step between two numbers. If not specified is 1 or -1
 * @returns {number[]} the sequence of numbers
 */
export function nrange(start, end, step) {
    if (step === 0) throw "step must be !== 0";
    if (!step) {
        if (end >= start) step = 1;
        if (end < start) step = -1;
    }
    if (end > start && step < 0) throw "step must be positive";
    if (end < start && step > 0) throw "step must be negative";
    const size = Math.ceil((Math.abs(end - start) + 1) / Math.abs(step));
    return Array(size).fill().map((element, index) => index * step + start);
}

/*
console.log(nrange(0, 5)); // [0, 1, 2, 3, 4, 5]
console.log(nrange(5, 0)); // [5, 4, 3, 2, 1, 0]
console.log(nrange(0, 5, 1)); // [0, 1, 2, 3, 4, 5]
try {
    console.log(nrange(0, 5, -1)); // error "step must be positive"
} catch (error) {
    console.log(error);
}

try {
    console.log(nrange(5, 3, 1)); // error "step must be negative"
} catch (error) {
    console.log(error);
}

try {
    console.log(nrange(5, 3, 0)); // error "step must be !== 0"
} catch (error) {
    console.log(error);
}

try {
    console.log(nrange(3, 5, 0)); // error "step must be !== 0"
} catch (error) {
    console.log(error);
}

console.log(nrange(1, 5, 2)); // [1, 3, 5]
console.log(nrange(5, 1, -2)); // [5, 3, 1]
console.log(nrange(1, 4, 2)); // [1, 3]
console.log(nrange(4, 1, -2)); // [4, 2]
console.log(nrange(1, 7, 3)); // [1, 4, 7]
console.log(nrange(7, 1, -3)); // [7, 4, 1]
console.log(nrange(1, 6, 3)); // [1, 4]
console.log(nrange(6, 1, -3)); // [6, 3]
*/