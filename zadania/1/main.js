function myConsoleLog(paramInt, paramString) {
    console.log(paramInt, paramString);
}

document.getElementById('submit-1').addEventListener('click', function () {
    const text = document.getElementById('input-text-1').value;
    const number = document.getElementById('input-number-1').value;


    for (let i = 0; i <= number; i++) {
        myConsoleLog(i, text)
    }

});


/// komentarz


function secondFunction(firstParam, secondParam) {
    console.log(firstParam, secondParam);
}

document.getElementById('submit-2').addEventListener('click',
    function () {
        const text = document.getElementById('input-text-2').value;
        const number = document.getElementById('input-number-2').value;


        for (let i = -10; i <= number; i--) {
            secondFunction(i, text)
        }

    });

/// komentarz


function anotherFunction(param1, param2) {
    console.log(param1, param2);
}

document.getElementById('submit-3').addEventListener('click',
    function () {
        const text = document.getElementById('input-text-3').value;
        const number = document.getElementById('input-number-3').value;
        const number1 = document.getElementById('input-number-31').value;

        for (let i = number; i <= number1; i++) {
            anotherFunction(i, text);
        }
    });


// komentarz

function thirdFunction(paramOne, paramTwo, paramThree, paramFour) {
    console.log(paramOne, paramTwo, paramThree, paramFour);
}

document.getElementById('submit-4').addEventListener('click',
    function () {
        const text = document.getElementById('input-text-4').value;
        const number = document.getElementById('input-number-4').value;
        const number1 = document.getElementById('input-number-41').value;
        const select4 = document.getElementById('input-select-4').selectedOptions[0].value;


        if (select4 === '<') {
            for (let i = number; i <= number1; i--) {
                thirdFunction(i, text);
            }
        } else {
            for (let i = number; i >= number1; i--) {
                thirdFunction(i, text);
            }
        }



        thirdFunction(text, number, number1, select4);
    }
);


