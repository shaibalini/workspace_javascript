function multiply(a, b, c) {
    return a * b * c;
}

// console.log(multiply(1, 2, 3));

/* function curryingMultiply(a) {
    return function (b) {
        return function (c) {
            return a * b * c;
        }
    }
} */
function curryingMultiply(a) {
    return (b) => {
        return (c) => {
            return multiply(a, b, c);
            // return a * b * c;
        }
    }
}

console.log(curryingMultiply(1)(2)(3));