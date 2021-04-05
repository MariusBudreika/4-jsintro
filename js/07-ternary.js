const a = 8;
const b = 5;


// ternary
console.log( a > b ? 'taip' : 'ne' );


// if -else analogas
if (a > b) {
    console.log('taip');
} else {
    console.log('ne');
}

const age = 50;
const agelimit = 18;

const status = age >= agelimit ? 'galiu' : 'dar per jaunas...';
console.log(status);
console.log('---------------------');

const kelias = 330;
const bake = 200;

const arPasieksiuPalanga = kelias > bake ? 'sorry...' : 'yaaay!';
console.log(arPasieksiuPalanga);

// kaip reikia skaidyti ternary opercija. Gali buti panasus klausimas egze.
const koksSkaicius2 = 2 < 3 ? 4 < 5 ? 6 : 7 : 8;
console.log(koksSkaicius2);

const koksSkaicius = 2 < 3 ? 
                        4 < 5 ? 
                            6 : 
                            7 :
                         8;
console.log(koksSkaicius);
