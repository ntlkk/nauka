function buildOL(abc) {
    let ol = '';

    ol += '<li><p>' + abc.name + '</p></li>'
    ol += '<li>' + '<p>' + abc.description.substr(0, 20) + '</p>' + '</li>';


    ol += '<li><p>' + abc.name + '</p><p>' + abc.description.substr(0, 20) + '</p></li>';


    ol += ''

    return ol;
}


const list = document.querySelector("#stupid-list");

let ulBody = '';

for (let i = 0; i < data.length; i++) {
    ulBody += buildOL(data[i]);
}

list.innerHTML = ulBody

/**
 * ul
 *  li a
 *  li b
 */
// rodzic ->
const div = document.querySelector("#test-elements");

const p1 = document.createElement('p'); // tworze nowy element p (paragraf)
p1.innerText = 'tekst'; // dodaje tekst do nowo stworzonego elementu
div.append(p1); // dodawanie nowego elementu do rodzica

const sp = document.createElement('span');
sp.innerText = 'to jest span';
div.append(sp);
sp.style.backgroundColor = 'red';

div.append(document.createElement('br'));

const bB = document.createElement('b');
bB.innerText = 'to jest b';
div.append(bB);

div.append(document.createElement('br'));

const str = document.createElement('strong');
str.innerText = 'to jest strong';
div.append(str);
str.style.fontSize = '60'

div.append(document.createElement('br'));

const iI = document.createElement('i');
iI.innerText = 'to jest kolejne hujowe zadanie';
div.append(iI);
iI.style.fontFamily = 'monospace'

const list1 = document.createElement("ul");
const li1 = document.createElement("li");
li1.innerText = 'to jest tekst'

const li2 = document.createElement("li");
li2.innerText = 'to jest tekst2'


const li3 = document.createElement("li");
li3.innerText = 'to jest tekst3'


const ul1 = document.createElement("ul");
ul1.innerText = 'to jest tekst4'


const ul2 = document.createElement("ul");
ul2.innerText = 'to jest tekst5'
const ol1 = document.createElement("ol")
ol1.innerText = 'to jest tekst6'

list1.append(li1);
list1.append(li2);
list1.append(li3);
li3.append(ul1);
li3.append(ul2)
ul2.append(ol1);
div.append(list1);


const ul5 = document.createElement("ul");
for (let i = 0; i < 4; i++) {
    let li5 = document.createElement("li");
    li5.innerText = 'jakis tekst';
    li5.style.backgroundColor = 'red';
    ul5.append(li5);
}
div.append(ul5);


const ul7 = document.createElement("ul");
for (let i = 0; i < 10; i++) {
    let li7 = document.createElement("li");
    li7.innerText = 'musze sie tego nauczyc';
    ul7.append(li7);
}
div.append(ul7);

const ul8 = document.createElement("ul");
for (let i = 0; i <= 2; i++) {
    let li8 = document.createElement("li");
    li8.innerText = 'pierwszdsdsdsdsds';
    ul8.append(li8);
}

div.append(ul8);


const ulLastOne = document.createElement("ul");
for (let i = 0; i <= 3; i++) {
    let liLastOne = document.createElement("li");
    liLastOne.innerText = 'pierwszy poziom';

    let ul10 = document.createElement("ul");
    liLastOne.append(ul10);

    for (let j = 0; j < 1; j++) {
        let li10 = document.createElement("li");
        li10.innerText = 'drugi poziom';
        ul10.append(li10);

        let ul11 = document.createElement("ul");
        li10.append(ul11);


        for (let k = 0; k < 1; k++); {
            let li11 = document.createElement("li");
            li11.innerText = 'trzeci poziom';
            ul11.append(li11);

        }
    }

    ulLastOne.append(liLastOne);
}

div.append(ulLastOne);






