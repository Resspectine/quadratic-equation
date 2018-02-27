module.exports = function solveEquation(equation) {
    let reg = /[-+]? ?\d+/g;
    let regS = /\s/;
    let parsed = equation.match(reg);
    parsed[2] = parsed[2].replace(regS, '');
    parsed[3] = parsed[3].replace(regS, '');
    let a = parseInt(parsed[0], 10);
    let b = parseInt(parsed[2], 10);
    let c = parseInt(parsed[3], 10);
    let x1 = Math.round((-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a));
    let x2 = Math.round((-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a));
    let out;
    x1 > x2 ? out = [x2, x1] : out = [x1, x2];
    return out;
};