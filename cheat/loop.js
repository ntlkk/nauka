for (let i = 0; i <= 100; i++) {
    console.log(i);
}
// Result: 1,2,3,4,....,95,96,97,98,99


for (let i = 100; i <= -100; i--) {
    console.log(i);
}
// Result: 100,99,98,96,.....,-96,-97,-98,-99,-100


let a = 10;
let b = 300;
for (let i = a; i <= b; i++) {
    console.log(i);
}
// Result: 10,11,12,13,.....,297,298,299,300

/**
 * Zwroc uwage na `table1.length` funckja `length` zwraca dlugosc tablicy czyli w tym przypadku 6
 * UWAGA: length zwraca zawsze wielkosc wieksza o 1 niz `ilosc indeksow`
 *      tzn: funkcja zwroci dlugosc 6
 *          maksymalny indeks to 5 (pamietaj indeksy liczymy od 0 !!)
 *          dla tego druga czesci for `i < table1.length` ma znak `<` a nie `<=`
 *          poniewaz nie ma indeksu z wartoscia 6 !!
 */
let table1 = [1, 22, 'string', false, -49, 32132521];
for (let i = 0; i < table1.length; i++) {
    console.log(i, table1[i])
    // 1, 1
}
/**
 * Result: uwaga console.log ma dwa argumenty ("index z tablicy", "wartoscz tablicy")
 *  0, 1
 *  1, 22
 *  2, 'string'
 *  3, false
 *  4, -49
 *  5, 32132521
 */



let table2 = ['wodka', 'piwo', 453, true, [1, 2], {a: 'a', number1: 3, boolean1: true}];

table2.forEach(function (param) {
    console.log(param);
});

table2.forEach(param => {
    console.log(param);
});

table2.forEach(param => console.log(param));

// result: 'wodka', 'piwo', 453, true, [1, 2], {a: 'a', number1: 3, boolean1: true}
