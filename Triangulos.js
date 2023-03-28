function classificarTriangulos(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
        return "none";
    }
    if (a + b <= c || b + c <= a || c + a <= b) {
        return "none";
    }
    if (a === b && b ===c) {
        return "equilateral";
    } else if (a === b || b === c || c === a) {
        return "isosceles";
    } else {
        return "scalene";
    }
}

console.log(classificarTriangulos(2, 2, 2));
console.log(classificarTriangulos(10, 10, 10));
console.log(classificarTriangulos(3, 4, 4));
console.log(classificarTriangulos(4, 3, 4));
console.log(classificarTriangulos(4, 4, 3));
console.log(classificarTriangulos(10, 10, 2));
console.log(classificarTriangulos(3, 4, 5));
console.log(classificarTriangulos(10, 11, 12));
console.log(classificarTriangulos(5, 4, 2));
console.log(classificarTriangulos(0, 0, 0));
console.log(classificarTriangulos(3, 4, -5));
console.log(classificarTriangulos(1, 1, 3));
console.log(classificarTriangulos(2, 4, 2));
