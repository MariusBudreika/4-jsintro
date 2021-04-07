function differenceInAges(ages){
let youngest = 100;
let oldest = 0;
let skirtumas = 0;
for (let i = 0; i < ages.length; i++) {
    
    const number = ages[i];

    if (number < youngest) {
        youngest = number;
        } if (number > oldest) {
            oldest = number;
        } 
        skirtumas = oldest - youngest;
}
let arr = [youngest, oldest, skirtumas]
return arr
    
}


console.log(differenceInAges([82, 15, 6, 38, 35]));
console.log(differenceInAges([57, 99, 14, 32]));