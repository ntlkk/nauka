/**
 * Noob lvl
 */

function myCustomConsoleLog(value) {
    console.log(value);
}

myCustomConsoleLog('prosta funkcja 1 argument');


function returnSomeNumber() {
    return Math.random(0, 100);
}

console.log(returnSomeNumber());


/**
 * Noob lvl 2
 */
function fn1(
    glupiaNazwaZmiennej,
    val2,
    numberVal,
    kolejnaDebilnaNazwaZmiennej,
    valBool,
    jestemNawzwaTylkoIWylacznie
) {
    console.log(
        glupiaNazwaZmiennej,
        val2,
        numberVal,
        kolejnaDebilnaNazwaZmiennej,
        valBool,
        jestemNawzwaTylkoIWylacznie
    );
}

let mogeTutajWpisacWszystko = 100;
let noKurwaWszystko = 'musisz to skumac ;)';

fn1(
    mogeTutajWpisacWszystko, // to co tutaj przekazuje nie musi sie z zgadzac z argumentem funckji
    Math.random(0, 10), // wazne aby typ byl takie same jak sugeruje zmienna
    666, // numberVal -> zmienna typu number!
    noKurwaWszystko, // nie wiem co ten argument oznacza
    false, // valBool -> boolean
    returnSomeNumber() // <----- czytaj funkcje <------
);


/**
 * Arrow function
 */
// jeden argument nie trzeba nawiasow przy `= oneArgument =>`
const fn2 = oneArgument => {
    return oneArgument * 100;
};

// dwa argumenty plus `= (a, b) =>` nawasy obowiazkowe
const sum = (a, b) => a * b;

// pamietaj ze ten zapis zawsze automatycznie zwraca wartosc, to znaczy "=> a * b * c * d" jest rowne "{ return a * b * c * d; }"
const multiply4 = (a, b, c, d) => a * b * c * d;

