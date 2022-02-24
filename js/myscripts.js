// input all needed data

const nineSymbolsArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
const symbolsArray = nineSymbolsArray.concat(nineSymbolsArray.concat(nineSymbolsArray.concat(nineSymbolsArray.concat(nineSymbolsArray.concat(nineSymbolsArray.concat(nineSymbolsArray.concat(nineSymbolsArray.concat(nineSymbolsArray.concat(nineSymbolsArray)))))))));
const headerTextArr = [ "I can read your mind...", "Pick a number from 01 - 99", "Add both digits together to get a new number", "Subtract your new number from the original number", symbolsArray];
const circleTextArr = [ "GO", "Restart"]
const rectTextArr = [ "NEXT", "REVEAL"]
const helperTextArr = [ "when you have your number click next", "Ex: 14 is 1 + 4 = 5 click next to proceed", "Ex: 14 - 5 = 9 click next to proceed", "Find your new number. Note the symbol beside the number.", "Your symbol is TODOOO"];

// create parent class 

class Page {
    constructor(headerState, cirButtonState) {
        this.headerState = headerState;
        this.cirButtonState = cirButtonState;
        this.helperText = helperText;
        this.recButtonState = recButtonState;
        this.ready = false;
    }
    create() {
        this.ready = true;
    }
    
    turnOff() {
        this.ready = false;
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


document.getElementById("circle").addEventListener('click', function () {
    const page2 = new Page (
        document.getElementById("header").innerHTML = headerTextArr[1],
        document.getElementById("circle").hidden = false,
        document.getElementById("circle").innerHTML = circleTextArr[1],
        document.getElementById("rectangle").hidden = false,
        document.getElementById("rectangle").innerHTML = rectTextArr[0],
        document.getElementById("help").hidden = false,
        document.getElementById("help").innerHTML = helperTextArr[0],
    )
        create(page2);
        turnOff(page1);
})


