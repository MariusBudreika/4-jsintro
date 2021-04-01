// 3. uzduotis
/* 
a) Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos 
iš 3, 5 ir 7 atskirai: 0 - 11.
*/
const b = 3;
let sarasas = 0;
for (let i = 0; i <= 11; i++) {
    if (a = i % b === 0) {
        sarasas += 1;
    }
}

console.log('Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra ' + sarasas + ' vientai' );
console.log('-------------------');

const b1 = 5;
let sarasas1 = 0;
for (let i = 0; i <= 11; i++) {
    if (a = i % b1 === 0) {
        sarasas1 += 1;
    }
}

console.log('Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra ' + sarasas1 + ' vientai' );
console.log('-------------------');

const b2 = 7;
let sarasas2 = 0;
for (let i = 0; i <= 11; i++) {
    if (a = i % b2 === 0) {
        sarasas2 += 1;
    }
}

console.log('Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra ' + sarasas2 + ' vientai' );
console.log('-------------------');