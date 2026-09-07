const salarioBruto = 3000

var inss;
var ir;

// CÁLCULO DO INSS

if (salarioBruto <= 1518) {

    inss = salarioBruto * 0.075;

} else if (salarioBruto <= 2793.88) {

    inss =
        (1518 * 0.075) +
        ((salarioBruto - 1518) * 0.09);

} else if (salarioBruto <= 4190.83) {

    inss =
        (1518 * 0.075) +
        ((2793.88 - 1518) * 0.09) +
        ((salarioBruto - 2793.88) * 0.12);

} else if (salarioBruto <= 8157.41) {

    inss =
        (1518 * 0.075) +
        ((2793.88 - 1518) * 0.09) +
        ((4190.83 - 2793.88) * 0.12) +
        ((salarioBruto - 4190.83) * 0.14);

} else {

    inss =
        (1518 * 0.075) +
        ((2793.88 - 1518) * 0.09) +
        ((4190.83 - 2793.88) * 0.12) +
        ((8157.41 - 4190.83) * 0.14);
}
// SALÁRIO BASE

var salarioBase = salarioBruto - inss;


// CÁLCULO DO IR

if (salarioBase <= 2259.20) {

    ir = 0;

} else if (salarioBase <= 2826.65) {

    ir = (salarioBase * 0.075) - 169.44;

} else if (salarioBase <= 3751.05) {

    ir = (salarioBase * 0.15) - 381.44;

} else if (salarioBase <= 4664.68) {

    ir = (salarioBase * 0.225) - 662.77;

} else {

    ir = (salarioBase * 0.275) - 896;
}
// SALÁRIO LÍQUIDO

var salarioLiquido = salarioBase - ir;

console.log(`INSS: R$ ${inss.toFixed(2)}`);
console.log(`Salário base: R$ ${salarioBase.toFixed(2)}`);
console.log(`IR: R$ ${ir.toFixed(2)}`);
console.log(`Salário líquido: R$ ${salarioLiquido.toFixed(2)}`);