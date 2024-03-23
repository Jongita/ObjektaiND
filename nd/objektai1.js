console.clear();
console.log('-----------------1-------------------');
// 1. Duomenų Objektas: Sukurkite objektą, kuris saugotų jūsų mėgstamiausios knygos pavadinimą, autorių ir leidimo metus.Išveskite kiekvieną objekto savybę naudojant for in ciklą.

const books = {
    descrption: 'Alchemikas',
    author: 'Paulo Coelho',
    year: 1988,
}

for (const key in books) {
    console.log(`${key}: ${books[key]}`);
}

console.log('----------------2--------------------');
//2. Vartotojų Masyvas: Sukurkite masyvą, kuriame būtų kelios objektų reikšmės, kiekviena reikšmė turėtų vartotojo vardą ir amžių.Naudodami for of ciklą, išveskite kiekvieno vartotojo vardą ir amžių.

const users = [
    { name: 'Jonas', age: 18 },
    { name: 'Rasa', age: 21 },
    { name: 'Laima', age: 19 },
];

for (const user of users) {
    console.log(`${user.name}: ${user.age}`);
}

console.log('-----------------3-------------------');

// 3.Sąrašo Filtravimas: Turite objektų masyvą, kuriame saugoma informacija apie įvairius produktus(pavadinimas, kaina, kategorija).Parašykite funkciją, kuri naudojant for of ciklą grąžintų tik tuos produktus, kurie priklauso tam tikrai kategorijai.

const products = [
    { description: 'Pomidorai', price: 3, category: 'vegetable' },
    { description: 'Avietes', price: 6, category: 'fruits' },
    { description: 'Agurkai', price: 2, category: 'vegetable' },
    { description: 'Braskes', price: 5, category: 'fruits' },
];

for (const product of products) {
    if (product.category === 'fruits') {
        console.log(product);
    }
}
console.log('------------------4------------------');
// 4. Objekto Kopijavimas: Parašykite funkciją, kuri naudojant for in ciklą sukurtų objekto kopiją.

function clone(obj) {
    let result = [];
    for (const user in obj) {
        result.push(obj[user]);
    }
    return result;
}
console.log(clone(users));

// function makeCopy(obj) {
//     const copyOfObj = {};
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             copyOfObj[key] = obj[key];
//         }
//     }
//     return copyOfObj;
// }

console.log('------------------5------------------');
// 5.Raktų ir Reikšmių Atrinkimas: Turite vartotojo objektą su įvairiomis savybėmis.Naudodami for in ciklą, sukurti du masyvus: viename saugokite objekto raktus, o kitame - reikšmes.

function separate(obj) {
    let result1 = [];
    let result2 = [];
    for (const key in obj) {
        result1.push(key);
        result2.push(obj[key]);
    }
    return { result1, result2 };
}
console.log(separate(books));

console.log('-------------------6-----------------');

// 6.Masyvo Suma: Turite masyvą, kuriame yra skaičiai.Naudodami for ciklą, apskaičiuokite masyvo skaičių sumą.

const numbers = [15, 22, 88, 14, 1, 55]
let total = 0;
for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
}
console.log(total);

console.log('-----------------7-------------------');

// 7. Didžiausias Skaičius: Turite skaičių masyvą.Naudodami for ciklą, raskite didžiausią skaičių masyve.

let maxNumber = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
    }
}
console.log(maxNumber);

console.log('-----------------8-------------------');
// 8. Objekto Savybių Skaičius: Sukurkite funkciją, kuri naudojant for in ciklą, grąžina objekto savybių skaičių.

let result = 0;
for (const key in books) {
    result++;
}
console.log(result);


console.log('-------------------9-----------------');
// 9.     Sąlyginis Objektų Atrinkimas: Turite vartotojų masyvą su objektais, kuriuose yra vardas ir amžius.Naudodami for of ciklą, išveskite tik tuos vartotojus, kurių amžius yra didesnis nei 18.

function ageLimit(obj) {
    let result = [];
    for (const user of obj) {
        if (user.age > 18) {
            result.push(user);
        }
    }
    return result;
}
console.log(ageLimit(users));

console.log('-------------------10-----------------');
// 10.  Objekto Savybių Keitimas: Turite objektą, kuriame saugomi įvairių žmonių amžiai.Naudodami for in ciklą, padidinkite kiekvieno asmens amžių 1 metais.

const students = { a: 18, b: 22, c: 31 };

for (const i in students) {
    students[i]++;
}
console.log(students);


// for (const i in students) {
//     console.log(`${i}: ${students[i] + 1}`);
// }