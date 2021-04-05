// 3. uzduotis

function skaitmenuKiekisSkaiciuje(a) {
    if (typeof a !== 'number') {
        return 'Pateikta netinkamo tipo reikšmė'
    } if (!isFinite(a)) {
        return 'Pateikta netinkamo tipo reikšmė'
    } else {
        const kiekis = a.toString().length;
        return kiekis
    }
}

console.log( skaitmenuKiekisSkaiciuje( 5)  );
console.log( skaitmenuKiekisSkaiciuje( 781 ) );
console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
console.log( skaitmenuKiekisSkaiciuje( true ) );
console.log( skaitmenuKiekisSkaiciuje( 'asd' ) );
console.log( skaitmenuKiekisSkaiciuje( NaN ) );
console.log( skaitmenuKiekisSkaiciuje( Math.PI ) );