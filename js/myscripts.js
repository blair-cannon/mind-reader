// input all needed data

const nineSymbolsArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
const symbolsArray = nineSymbolsArray.concat(nineSymbolsArray.concat(nineSymbolsArray.concat(nineSymbolsArray.concat(nineSymbolsArray.concat(nineSymbolsArray.concat(nineSymbolsArray.concat(nineSymbolsArray.concat(nineSymbolsArray.concat(nineSymbolsArray)))))))));
const headerTextArr = [ "I can read your mind...", "Pick a number from 01 - 99", "Add both digits together to get a new number", "Subtract your new number from the original number", symbolsArray, symbolsArray[0]];
const circleTextArr = [ "GO", "<--"]
const rectTextArr = [ "NEXT", "REVEAL"]
const helperTextArr = [ "when you have your number click next", "Ex: 14 is 1 + 4 = 5 click next to proceed", "Ex: 14 - 5 = 9 click next to proceed", "Find your new number. Note the symbol beside the number.", "Your symbol is: " + symbolsArray[0]];


// create parent class 

class Page {

    constructor(
        headerState,
        cirButtonState,
        helperText, 
        recButtonState, 
        helperTextDisplay = false, 
        circleButtonDisplay = false, 
        recButtonDisplay = false
          ) 
          {
        this.headerState = headerState;
        this.cirButtonState = cirButtonState;
        this.helperText = helperText;
        this.recButtonState = recButtonState;

        this.helperTextDisplay = helperTextDisplay;
        this.circleButtonDisplay = circleButtonDisplay;
        this.recButtonDisplay = recButtonDisplay;
        this.exists = false;
    }
    create() {
        document.getElementById("header").innerHTML = this.headerState;
        document.getElementById("circle").innerHTML = this.cirButtonState;
        document.getElementById("help").innerHTML = this.helperText;
        document.getElementById("rectangle").innerHTML = this.recButtonState;
        document.getElementById("help").style.display = this.helperTextDisplay ? "initial" : "none";
        document.getElementById("circle").style.display = this.circleButtonDisplay ? "initial" : "none";
        document.getElementById("rectangle").style.display = this.recButtonDisplay ? "initial" : "none";
        
        this.exists = true;  // needed to differentiate pages
        
    }
    
    turnOff() {
        this.exists = false;
    }
}


// create first instance 

const page1 = new Page (
    headerTextArr[0],
    circleTextArr[0],
    "",
    "", 
    false, 
    true, 
    false
)

page1.create();

// change to page 2 on click of go on page 1

circle.addEventListener('click', function () {
    page1.turnOff();
    page2.create(); 
})

circle.removeEventListener('click', page1); // removes event listener to clear it for the next one

// page 2 instance 

const page2 = new Page (
    headerTextArr[1],
    circleTextArr[1],
    helperTextArr[0],
    rectTextArr[0],
    true,
    true,
    true)


// change to page 3 on click of next on page 2

rectangle.addEventListener('click', function () {
    page2.turnOff();
    page3.create();

    page1.turnOff();
    page4.turnOff();
    page5.turnOff();
    page6.turnOff();
})

rectangle.removeEventListener('click', page2); // removes event listener to clear it for the next one

// page 3 instance 

const page3 = new Page (
    headerTextArr[2],
    circleTextArr[1],
    helperTextArr[1],
    rectTextArr[0],
    true,
    true,
    true)


// change to page 4 on click of next on page 3

// rectangle.addEventListener('click', function () {
//     page3.turnOff();
//     page4.create();
// })

// rectangle.removeEventListener('click', page3); // removes event listener to clear it for the next one

// // page 4 instance

// const page4 = new Page (
//     headerTextArr[3],
//     circleTextArr[1],
//     helperTextArr[2],
//     rectTextArr[0],
//     true,
//     true,
//     true)

// // change to page 5 on click of next

// rectangle.addEventListener('click', function () {

//          page4.turnOff();
//         page5.create();
// })

// document.getElementById("rectangle").removeEventListener('click', page4); // removes event listener to clear it for the next one

// // page 5 instance

// const page5 = new Page (
//     headerTextArr[4],
//     circleTextArr[1],
//     helperTextArr[3],
//     rectTextArr[1],
//     true,
//     true,
//     true)


// // change to page 6 on click of next and rotates the symbols array for the next game

// document.getElementById("rectangle").addEventListener('click', function () {

//         page6.create();
//         page5.turnOff();
//         let storedSymbol = symbolsArray.shift() // this stores what is shifted off the front
//         symbolsArray.push(storedSymbol); // this puts the stored value at the end of the array
// })

// document.getElementById("rectangle").removeEventListener('click', page5); // removes event listener to clear it for the next one


// // page 6 instance

// const page6 = new Page (
//     headerTextArr[5],
//     circleTextArr[1],
//     helperTextArr[4],
//     "",
//     true,
//     true, 
//     false)


// // add restart ability to circle button for all pages except the first page

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


