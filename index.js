/**
 * Generates an array of numbers from start to end.
 * @param {number} start first number of sequence
 * @param {number} end last number of sequence
 * @param {number} [step] step between two numbers. If not specified is 1 or -1
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
    const size = Math.trunc((Math.abs(end - start) / Math.abs(step))) + 1;
    return Array(size).fill().map((element, index) => index * step + start);
}