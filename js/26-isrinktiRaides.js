// 5 uzduotis


function isrinktiRaides(a, b) {
    let ntosiosraides = '';
    if (typeof a!== 'string') {
    return `Pirmasis kintamasis yra netinkamo tipo`
    }   if (a === '' || a.length > 100) {
            return `Pirmojo kintamojo reikšmė yra netinkamo dydžio.`
    }   if (typeof b!== 'number') {
            return 'Antrasis kintamasis yra netinkamo tipo.'
    }   if (b <= 0) {
            return  `Antrasis kintamasis turi būti didesnis už nulį.`
    }   if ( b >= a.length) {
            return `Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.`
    }  for (let i = b - 1; i < a.length; i = i + b) {
        ntosiosraides = ntosiosraides + a[i];

    }
    console.log(ntosiosraides);

} 


console.log( isrinktiRaides( 'abcdefg', 2 ) );
console.log( isrinktiRaides( 'abcdefghijkl', 3 ) );
console.log( isrinktiRaides( 'abc', 0 ) );
console.log( isrinktiRaides( '', 4 ) );
console.log( isrinktiRaides( 1561, 2 ) );
