// 6. uzduotis

function dalyba(a, b) {
    if (typeof a !== 'number') {
    return `Pirmasis kintamasis yra netinkamo tipo`
}       
if (typeof b !== 'number') {
    return `Antrasis kintamasis yra netinkamo tipo`
}
if (!isFinite(a)) {
    return `ERROR: pirmasis skaicius negali buti ${a}`;
}
if (!isFinite(b)) {
    return `ERROR: antrasis skaicius negali buti ${b}`;
}

const rezultatas = a / b;

return rezultatas
}

console.log(dalyba(3, 5));
console.log(dalyba(Infinity, 5));
console.log(dalyba(5, NaN));
console.log(dalyba(5, 'labas'));
console.log(dalyba(-8, [4, 2]));