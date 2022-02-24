// input all needed data

const nineSymbolsArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
const symbolsArray = nineSymbolsArray.concat(nineSymbolsArray.concat(nineSymbolsArray.concat(nineSymbolsArray.concat(nineSymbolsArray.concat(nineSymbolsArray.concat(nineSymbolsArray.concat(nineSymbolsArray.concat(nineSymbolsArray.concat(nineSymbolsArray)))))))));
const headerTextArr = [ "I can read your mind...", "Pick a number from 01 - 99", "Add both digits together to get a new number", "Subtract your new number from the original number", symbolsArray, symbolsArray[0]];
const circleTextArr = [ "GO", "Restart"]
const rectTextArr = [ "NEXT", "REVEAL"]
const helperTextArr = [ "when you have your number click next", "Ex: 14 is 1 + 4 = 5 click next to proceed", "Ex: 14 - 5 = 9 click next to proceed", "Find your new number. Note the symbol beside the number.", "Your symbol is: TODOOO"];


// create parent class 

class Page {
    constructor(headerState, cirButtonState, helperText, recButtonState) {
        this.headerState = headerState;
        this.cirButtonState = cirButtonState;
        this.helperText = helperText;
        this.recButtonState = recButtonState;
        this.exists = false;
    }
    create() {
        this.exists = true; //needed to differentiate pages
    }
    
    turnOff() {
        this.exists = false;
    }
}


// create first instance 

const page1 = new Page (
    headerState = document.getElementById("header").innerHTML = headerTextArr[0],
    cirButtonState = document.getElementById("circle").hidden = false,
    document.getElementById("circle").innerHTML = circleTextArr[0],
    helperText = document.getElementById("help").hidden = true,
    recButtonState = document.getElementById("rectangle").hidden = true,
   
)

page1.create();

// // page 2 instance 


// const page2 = new Page (
//     headerState = document.getElementById("header").innerHTML = headerTextArr[1],
//     cirButtonState = document.getElementById("circle").hidden = false,
//     document.getElementById("circle").innerHTML = circleTextArr[1],
//     recButtonState = document.getElementById("rectangle").hidden = false,
//     document.getElementById("rectangle").innerHTML = rectTextArr[0],
//     helperText = document.getElementById("help").hidden = false,
//     document.getElementById("help").innerHTML = helperTextArr[0],
// )

// // change to page 2 on click of go

// document.getElementById("circle").addEventListener('click', function () {
//         page2.create();
//         page1.turnOff();
// })

// // page 3 instance 


// const page3 = new Page (
//     headerState = document.getElementById("header").innerHTML = headerTextArr[2],
//     cirButtonState = document.getElementById("circle").hidden = false,
//     document.getElementById("circle").innerHTML = circleTextArr[1],
//     recButtonState = document.getElementById("rectangle").hidden = false,
//     document.getElementById("rectangle").innerHTML = rectTextArr[0],
//     helperText = document.getElementById("help").hidden = false,
//     document.getElementById("help").innerHTML = helperTextArr[1],
// )

// // change to page 3 on click of next

// document.getElementById("rectangle").addEventListener('click', function () {

//         page3.create();
//         page2.turnOff();
// })


// // page 4 instance

// const page4 = new Page (
//     headerState = document.getElementById("header").innerHTML = headerTextArr[3],
//     cirButtonState = document.getElementById("circle").hidden = false,
//     document.getElementById("circle").innerHTML = circleTextArr[1],
//     recButtonState = document.getElementById("rectangle").hidden = false,
//     document.getElementById("rectangle").innerHTML = rectTextArr[0],
//     helperText = document.getElementById("help").hidden = false,
//     document.getElementById("help").innerHTML = helperTextArr[2],
// )

// // change to page 4 on click of next

// document.getElementById("rectangle").addEventListener('click', function () {

//         page4.create();
//         page3.turnOff();
// })


// // page 5 instance

// const page5 = new Page (
//     headerState = document.getElementById("header").innerHTML = headerTextArr[4],
//     cirButtonState = document.getElementById("circle").hidden = false,
//     document.getElementById("circle").innerHTML = circleTextArr[1],
//     recButtonState = document.getElementById("rectangle").hidden = false,
//     document.getElementById("rectangle").innerHTML = rectTextArr[1],
//     helperText = document.getElementById("help").hidden = false,
//     document.getElementById("help").innerHTML = helperTextArr[3],
// )

// // change to page 5 on click of next

// document.getElementById("rectangle").addEventListener('click', function () {

//         page5.create();
//         page4.turnOff();
// })


// // page 6 instance

// const page6 = new Page (
//     headerState = document.getElementById("header").innerHTML = headerTextArr[5],
//     cirButtonState = document.getElementById("circle").hidden = false,
//     document.getElementById("circle").innerHTML = circleTextArr[1],
//     recButtonState = document.getElementById("rectangle").hidden = true,
//     helperText = document.getElementById("help").hidden = false,
//     document.getElementById("help").innerHTML = helperTextArr[4],
// )

// // change to page 6 on click of next and rotates the symbols array for the next game

// document.getElementById("rectangle").addEventListener('click', function () {

//         page6.create();
//         page5.turnOff();
//         let storedSymbol = symbolsArray.shift() // this stores what is shifted off the front
//         symbolsArray.push(storedSymbol); // this puts the stored value at the end of the array
// })


// add restart ability to circle button for all pages except the first page

// if (Page != page1) {
//     document.getElementById("circle").addEventListener('click', function () {
//         page1.create();
//         page2.turnoff();
//         page3.turnOff();
//         page4.turnOff();
//         page5.turnOff();
//         page6.turnOff();
//     })
// }


