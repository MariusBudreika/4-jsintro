// 4 uzduotis

function didziausiasSkaiciusSarase(a) {
    let kiekis = a.length;
    let didziausias = -Infinity;
    if (!Array.isArray(a)) {
        return 'Pateikta netinakama tipo reikšmė'
    } if (a.length === 0) {
        return 'Pateiktas sąrašas negali būti tuščias.'
    } for (let i = 0; i <= kiekis; i++) {

        if (didziausias <= a[i]) {
            didziausias = a[i];
        }


    }
    console.log(didziausias);
    
}

console.log( didziausiasSkaiciusSarase( [ 1 ] ));
console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] )  + '2' );
console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] )  + '3' );
console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] )  + '4' );
console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] )  + '5' );
console.log( didziausiasSkaiciusSarase( 'pomidoras' ));
console.log( didziausiasSkaiciusSarase( [] ));

