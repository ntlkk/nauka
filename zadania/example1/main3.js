/**
 * Niech wszyskie te elementy znajda sie w div#test-elements
 *
 * Zadania
 *  1. stworz table z header i body
 *      1.1 kolumny 10 jakichs nazw
 *      1.2. 10 wierszy z jakimis wartoscami
 *
 *  2. zrob ul z 10 li
 *      2.1. co drugie li ma miec class="some-class"
 *
 *  3. zrob 10 div i kazdy kolejny ma byc w srodku cos jak -> [[[[[[[[[[]]]]]]]]]]
 *      dodaj im class="div-N" (N to aktualny index)
 */

const div = document.querySelector("#test-elements");

// table
const table = document.createElement('table');
table.setAttribute('border', '1');
table.setAttribute('class', 'super-class');
table.setAttribute('id', 'super-id');


// header
const header = document.createElement('thead');
table.append(header);

// header tr
const headerTr = document.createElement('tr');
header.append(headerTr);

// 10 x th
for (let i = 0; i < 10; i++) {
    let th = document.createElement('th');
    th.innerText = 'text ' + i;
    headerTr.append(th);
}


/////////////// body ///////////////////

const tbody = document.createElement("tbody");
table.append(tbody);

// 10 x tr
for (let i = 0; i < 10; i++) {
    let bodyTr = document.createElement('tr');
    bodyTr.append(bodyTr);
}


console.log(table);
// dodaje nowy obiekt table do naszego div#test-elements
div.append(table);


