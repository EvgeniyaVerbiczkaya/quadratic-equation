module.exports = function solveEquation(equation) {
    equation = equation.replace(/\s+/g, '');
    equation = equation.split('*x');
    let a = +equation[0];
    let c = +equation[2];
    equation = equation[1];
    equation = equation.split('^2');
    let b = +equation[1];
    let solutions = [];
    let d = b * b - 4 * a * c;
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    if (x1 < x2 && x2 > 0) {
        solutions = [Math.round(x1), Math.round(x2)];
    } else if (x1 < x2) {
        solutions = [Math.round(x1), Math.round(x2)];
    } else {
        solutions = [Math.round(x2), Math.round(x1)];
    }
    return solutions;
}