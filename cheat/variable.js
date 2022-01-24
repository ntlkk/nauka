/**
 * @type {number}
 */
let number1 = 100;
let number2 = -100;
let number3 = 30.2;
let number = -30.2;

/**
 * @type {string}
 */
let string1 = 'no kurde po prostu tekst, bez szalenstw';
let string2 = 'a';

/**
 * @type {boolean}
 */
let bool1 = false;
let bool2 = true;

/**
 * @type {number[]}
 */
let tableNumbers = [1, 3, 44, 55, 66, 77, 8, 8];

/**
 * @type {string[]}
 */
let tableStrings = ['a', 'bb', 'ccc', 'ddddd', 'eeeee', 'ffffff'];
/**
 * @type {boolean[]}
 */
let tableBoolean = [false, true, false, true, false, true]

/**
 * @type {(boolean|number|string|boolean[]|number[])[]}
 */
let tableRandom = [false, 1, 'string', true, 40.3, false, true, 'string 2', 'string 3', tableBoolean, tableNumbers];

/**
 * @type {{thisIndexIsBeautiful: number, product: {mainImage: string, price: number, name: string, currency: string, id: number, sku: string}, thisIsNumber: number, thisIsTable: string[], thisIsString: string, "tak sie kurwa nie nazywa nie pisze": string, thisIsObject: {someValue2: number, someValue1: number, someValue3: number}}}
 */
let object1 = {
    'tak sie kurwa nie nazywa nie pisze': 'ta wartosc jest pienka bo to string',
    thisIndexIsBeautiful: 3,
    thisIsNumber: 40.123456789,
    thisIsString: 'im string',
    thisIsTable: ['i', 'm', ' ', 'a', ' ', 't', 'a', 'b', 'l', 'e'],
    thisIsObject: {
        someValue1: 1,
        someValue2: 2,
        someValue3: 1,
    },
    product: {
        id: 10,
        name: 'Bike',
        price: 4000,
        currency: 'EUR',
        sku: '43623452351235',
        mainImage: 'https://sklep.autofus-group.pl/userdata/public/gfx/2437.jpg'
    }

};