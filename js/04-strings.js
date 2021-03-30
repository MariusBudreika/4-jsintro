/*
Galimi variantai, kaip inicijuoti teksta (nesvarbu kuri naudoti):
- viengubos kabutes
- dvigubos kabutes
galima naudoti "" ir viduj rasyti '', kad veiktu.
- backtick trecia galimybe inicijuoti tekstus.

Rekomendacija:
- viengubas ir dvigubas naudoti, tik jei inicijuojate tekstini kantamaji, kai jame yra informacija vienoje eiluteje.
- backtick'ai - visi kiti atvejai, t. y. darbas su tekstais, multi-line;

Jei reikia "escapinti" (escape) kabuts, pries jas padedame back slash(\).

spec. simboliai : 
/n - sukuria "enter".
*/

const vardas = 'Petras';
console.log(vardas);

const pavarde = "Petraitis";
console.log(pavarde);

// yra ir ' ir  \ - padaro isimti"

const kabute12 = 'Cia yra vienguba (\') ir dviguba (") kabutes.';
console.log(kabute12);

const marke = 'Tesla';
const modelis = 'S';
const battery = 100;
const batteryUnits = 'kw';

const sakinys = 'I wish i had ' + marke + ' ' + 'model ' + modelis + ' ' + 'with a ' + battery + ' ' +
 batteryUnits + ' ' + 'battery.'
console.log(sakinys);

// i wish i had Tesla model S with a 100 kw battery

const backtick = `I wish i had ${marke} model ${modelis} with a ${battery + batteryUnits} battery`
console.log(backtick);

const head = '<head>\n\
    <meta charset="UTF-8">\n\
    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n\
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n\
    <title>JS intro</title>\n\
    <link rel="stylesheet" href="./css/reset.css">\n\
</head>';
console.log(head);

const headBack = `<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS intro</title>
    <link rel="stylesheet" href="./css/reset.css">
</head>`
console.log(headBack);