const a = 2, b = 1, c = -3

const delta = (Math.pow(b, 2) - 4 * a * c)
const x1 = -b + Math.sqrt(delta)
const x2 = -b - Math.sqrt(delta)

console.log(`O delta é: ${delta}`);
console.log(`A x1 é: ${x1 / (2 * a)}`);
console.log(`A x2 é: ${x2 / (2 * a)}`);
console.log(`ax² + bx + c = 0 x1 é: ${a * Math.pow(x1, 2) + b * x1 + c}`);
console.log(`ax² + bx + c = 0 x2 é: ${a * Math.pow(x2, 2) + b * x2 + c}`);