/*
CAMPO MINATO consegna:
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/


function playCampoMinato() {
    //al click del bottone vengono create 100 caselle numerate
    let optionSelector = document.querySelector("select").value
    //console.log(optionSelector);
    const gameContainerSelection = document.querySelector(".game_container")
    if (optionSelector === "dif_1") {
        for (let i = 1; i <= 49; i++) {
            const squareHtml = `<div class="square_7">${i}</div>`
            //console.log(squareHtml);
            gameContainerSelection.insertAdjacentHTML("beforeend", squareHtml)
        }
    } else if (optionSelector === "dif_2") {
        for (let i = 1; i <= 81; i++) {
            const squareHtml = `<div class="square_9">${i}</div>`
            //console.log(squareHtml);
            gameContainerSelection.insertAdjacentHTML("beforeend", squareHtml)
        }
    } else if (optionSelector === "dif_3") {
        for (let i = 1; i <= 100; i++) {
            const squareHtml = `<div class="square">${i}</div>`
            //console.log(squareHtml);
            gameContainerSelection.insertAdjacentHTML("beforeend", squareHtml)
        }
    }

    const squares = document.querySelectorAll(".square, .square_9, .square_7")
    //console.log(squares);
    const squaresArray = squares;

    for (const squares of squaresArray) {
        //console.log(squares);
        squares.addEventListener("click", blueAndNumber)

        function blueAndNumber() {
            //console.log("click");
            squares.classList.add("blue")
            console.log(squares.textContent);
        }
    }
}

