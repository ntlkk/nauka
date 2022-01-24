/**
 * Math
 */
let
    a = 10 * 15,
    b = 10 / 15,
    c = 10 - 15,
    d = 10 + 15;

/**
 * Short math
 */
a += 20;
b -= 20;
c *= 20;
d /= 20;

/**
 * If
 */
if (a === b) {

} else if (a < c || a < b || (a < b || a < d)) {

} else if (a >= d && a >= b && (a >= c && a >= 0)) {

} else {

}

/**
 * Short if
 */
const a_1 = a > 0 ? 1 : 2;
const a_2 = a > 0 ? false:true;

/**
 * Functions
 */

function hello() {
    console.log('Czesc')
}
hello();


const dog = function() {
    return 'Woof!';
}
dog();

const sum = (firstParam, secondParam) => {
    return firstParam + secondParam;
};
sum(2,5);



const squareNum = (num) => {
    return num * num;
};

/**
 * To samo ponizej
 */

const squareNum = num => num * num;


/**
 * Zmiana indeksu w bloku
 */

let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados';
console.log(groceryList);

/**
 *
 * for.Each() Method
 */

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];



fruits.forEach(function(fruit){
    console.log('I want to eat a ' + fruit);
})

// to samo co:

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}



const smallNumbers = bigNumbers.map(bigNumbers => {
    return bigNumbers / 100;
});
const smallNumbers = bigNumbers.map(bigNumbers => bigNumbers / 100);