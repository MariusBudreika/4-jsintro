// 3. uzduotis
/* 
b) Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos 
iš 3, 5 ir 7 atskirai: 8 - 31.
*/

let a = 0;
const c = 3;

for (let i = 8; i <= 31; i++) {
    if (b = i % c === 0) {
        a += 1;
    }
}

console.log('Skaiciu intervale tarp 8 - 31, besidalijanciu be liekanos is ' + c + ' yra ' + a + ' vienetai.');
console.log('-----------------');

let a1 = 0;
const c1 = 5;

for (let i = 8; i <= 31; i++) {
    if (b1 = i % c1 === 0) {
        a1 += 1;
    }
}

console.log('Skaiciu intervale tarp 8 - 31, besidalijanciu be liekanos is ' + c1 + ' yra ' + a1 + ' vienetai.');
console.log('-----------------');

let a2 = 0;
const c2 = 7;

for (let i = 8; i <= 31; i++) {
    if (b2 = i % c1 === 0) {
        a2 += 1;
    }
}

console.log('Skaiciu intervale tarp 8 - 31, besidalijanciu be liekanos is ' + c2 + ' yra ' + a2 + ' vienetai.');
console.log('-----------------');
