// 1. Masyvo Elementų Filtravimas: Sukurkite funkciją, kuri naudojant for ciklą iš masyvo išrenka ir grąžina naują masyvą su elementais, kurie tenkina tam tikrą sąlygą.

const marks = [10, 2, 8, 4, 6, 5, 8, 9, 4, 2];

function updateMarks() {
    const newMarks = [];

    for (let i = 0; i < marks.length; i++) {
        if (marks[i] > 5) {
            newMarks.push(marks[i]);
        }
    }
    return newMarks;
};
console.log(updateMarks(marks));

console.log('---------------------------');

// 2. Unikalių Reikšmių Radimas: Turite masyvą su pasikartojančiomis reikšmėmis.Naudodami for ciklą, sukurkite naują masyvą, kuriame būtų tik unikalios reikšmės.

function uniqueMarks(array) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (result.indexOf(array[i]) === -1) {
            result.push(array[i]);
        }
    }
    return result;
}

console.log(uniqueMarks(marks));


// const indexOfAll = (marks, val) => marks.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

// console.log(indexOfAll(marks, 2));

console.log('---------------------------');

// 3. Objekto Gylis: Parašykite funkciją, kuri naudodama for in ciklą ir rekursiją, grąžintų objekto gylį(kiek giliausiai objektas turi įdėtinius objektus).

const tree = {
    name: 'John',
    children1: {
        name: 'Jim',
        children: []
    },
    children2:
    {
        name: 'Zoe',
        children3: {
            name: 'Kyle', children4: [],
            name: 'Sophia', children5: []
        }
    }
}

// function depthOf(object) {
//     let level = 0;
//     let key;
//     for (key in object) {
//         if (!object.hasOwnProperty(key)) continue;

//         if (typeof object[key] == 'object') {
//             let depth = depthOf(object[key]) + 1;
//             level = Math.max(depth, level);
//         }
//     }
//     return level;
// }

// console.log(depthOf(tree));

function findMaxDepth(obj) {
    let maxDepth = 0;

    function intoDeep(obj, depth) {
        for (let key in obj) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                intoDeep(obj[key], depth + 1);
            }
        }
        if (depth > maxDepth) {
            maxDepth = depth;
        }
    }

    intoDeep(obj, 1);
    return maxDepth;
}

console.log(`Giliausias masyvas ${findMaxDepth(tree)} lygyje.`);

// function printChildrenRecursive(t) {
//     if (t.children.length === 0) {
//         return
//     }
//     t.children.forEach(child => {
//         console.log(child.name);
//         printChildrenRecursive(child)
//     })
// }
// console.log(printChildrenRecursive(tree));

// function iterateObject(obj) {
//     for (const key in obj) {
//         if (typeof obj[key] === "object" && obj[key] !== null) {
//             iterateObject(obj[key]);
//         } else {
//             console.log(key + ":", obj[key]);
//         }
//     }

// }

// console.log(iterateObject(tree));
// name: John
// name: Jim
// name: Zoe
// name: Kyle
// name: Sophia

console.log('-------------------------');

// 4. Masyvo Atvirkštinis: Turite skaičių masyvą.Naudodami for ciklą, sukurkite naują masyvą, kurio elementai būtų pradinio masyvo, bet eilės atvirkščiai.
const marks1 = [10, 2, 8, 4, 6, 5, 8, 9, 4, 2];
let total = [];
for (let i = marks1.length - 1; i >= 0; i--) {
    total.push(marks1[i]);
}
console.log(total);

console.log('-------------------------');

// 5. Raktų Filtravimas Objekte: Turite objektą su daugybe savybių.Sukurkite funkciją, kuri naudojant for in ciklą, grąžina naują objektą, kuriame yra tik tas savybės, kurios tenkina tam tikrą sąlygą.


const user = {
    firstName: "John",
    lastName: "Doe",
    userName: "johndoe12",
    email: "johndoe@stackabuse.com",
    age: 37,
    hobby: "Singing"
};

function filterObj(obj) {
    const newObj = {};
    for (let key in obj) {
        if (key.includes('Name')) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}
console.log(filterObj(user));

console.log('-------------------------');

// 6. Suminė Vertė Objekte: Turite objektą, kurio savybės yra skaičiai.Naudodami for in ciklą, apskaičiuokite visų objekto savybių sumą.

const prekesEur = {
    item1: 30,
    item2: 10,
    item3: 15,
    item4: 22,
    item5: 16
};

function sumValues(obj) {
    let result = 0;
    for (let value in obj)
        result += obj[value];
    return result;
}
console.log(sumValues(prekesEur));

console.log('-------------------------');

// 7. Masyvo Elementų Kiekis: Turite masyvą su skirtingų tipų elementais.Naudodami for ciklą, suskaičiuokite, kiek yra kiekvieno tipo elementų.

const a = [10, 'labas', 8, true, 6, '5', false, -8, 9, null, 2, Infinity, function () { }, [3, 2, 1], NaN, { item1: 2 }];


let result = {};
function check_types(arr) {
    for (i = 0; i < a.length; i++) {
        if (result[typeof a[i]]) {
            result[typeof a[i]]++;
        } else {
            result[typeof a[i]] = 1;
        }
    }
    return result;
}
console.log(check_types(a))

console.log('-------------------------');

// 8. Objekto Konversija Į Masyvą: Sukurkite funkciją, kuri objektą(raktai ir reikšmės) konvertuotų į masyvą, kur kiekvienas elementas būtų[raktas, reikšmė] pora.


const newArray = Object.keys(prekesEur).map((key) => [key, prekesEur[key]]);

console.log(newArray);

// const newArray = Object.entries(prekesEur);
// console.log(newArray);

// 9. Dinaminis Objekto Sudarymas: Naudodami for ciklą, sukurti objektą, kurio raktai yra skaičiai nuo 1 iki n, o reikšmės - tie skaičiai pakelti kvadratu.

const n = 10;
let resultObj = {};
for (let i = 1; i <= n; i++) {
    resultObj[i] = i ** 2;
}
console.log(resultObj);


// 10. Sąlyginės Reikšmės Objekte: Turite objektą, kuriame saugomos įvairios vartotojų savybės(pvz., vardas, amžius, miestas).Sukurkite funkciją, kuri naudojant for in ciklą, pakeistų tam tikrų savybių reikšmes, jeigu jos tenkina nurodytą sąlygą(pvz., jeigu vartotojo amžius yra mažesnis nei 18, pridėkite savybę pilnametis: false).

const persons = {
    person1: {
        vardas: 'John',
        amzius: 20,
        miestas: 'Klaipeda'
    },
    person2: {
        vardas: 'Sophia',
        amzius: 15,
        miestas: 'Kaunas'
    },
    person3: {
        vardas: 'Maria',
        amzius: 17,
        miestas: 'Vilnius'
    }
}

function ageLimit(obj) {
    for (let key in obj) {
        if (obj[key].amzius < 18) {
            obj[key].pilnametis = false;
        }
    }
    return obj;
}

console.log(ageLimit(persons));
