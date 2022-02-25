// input all needed data

const nineSymbolsArray = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "~"];

const randomizeArray = (symbols) => {
    let storedSymbol = symbols.shift(); // this stores what is shifted off the front
    symbols.push(storedSymbol); 
    console.log("symbols", symbols);
    return symbols; // this puts the stored value at the end of the array
} 

let symbolsArray = nineSymbolsArray.concat(nineSymbolsArray.concat(nineSymbolsArray.concat(nineSymbolsArray.concat(nineSymbolsArray.concat(nineSymbolsArray.concat(nineSymbolsArray.concat(nineSymbolsArray.concat(nineSymbolsArray.concat(nineSymbolsArray)))))))));
const headerTextArr = [ "I can read your mind...", "Pick a number from 01 - 99", "Add both digits together to get a new number", "Subtract your new number from the original number", symbolsArray[0]];
const circleTextArr = [ "GO", "<--"]
const rectTextArr = [ "NEXT", "REVEAL"]
const helperTextArr = [ "when you have your number click next", "Ex: 14 is 1 + 4 = 5 click next to proceed", "Ex: 14 - 5 = 9 click next to proceed", "Find your new number. Note the symbol beside the number.", "Your symbol is: " + symbolsArray[0]];


// create parent class 

class Page {

    constructor(
        pageNumber,
        headerState,
        cirButtonState,
        helperText, 
        recButtonState, 
        helperTextDisplay = false, 
        circleButtonDisplay = false, 
        recButtonDisplay = false,
          ) 
          {
        this.pageNumber = pageNumber;
        this.headerState = headerState;
        this.cirButtonState = cirButtonState;
        this.helperText = helperText;
        this.recButtonState = recButtonState;

        this.helperTextDisplay = helperTextDisplay;
        this.circleButtonDisplay = circleButtonDisplay;
        this.recButtonDisplay = recButtonDisplay;
       
        this.exists = false;
    }

    switchCircle() { 
        console.log(this);  // this console.log showed us that the 'this' in this function was referencing the button (logging its html) and not the this of the class that we want
        var destination = this.circleDestination;
        console.log(this.circleDestination);
        destination.create();
        this.turnOff();

       
    }

    switchRectangle() { // these two switches are defined outside of the create function to apply to the addEventListeners
        var destination = this.rectangleDestination;  
        console.log(this.rectangleDestination);        
        destination.create();
                this.turnOff();

            // if (this = page5) {
            //     let storedSymbol = symbolsArray.shift() // this stores what is shifted off the front
            //     symbolsArray.push(storedSymbol); // this puts the stored value at the end of the array
            // }
               
    }

    create() {
        console.log(this);
        document.getElementById("header").innerHTML = this.headerState;
        document.getElementById("circle").innerHTML = this.cirButtonState;
        document.getElementById("help").innerHTML = this.helperText;
        document.getElementById("rectangle").innerHTML = this.recButtonState;
        document.getElementById("help").style.display = this.helperTextDisplay ? "initial" : "none";
        document.getElementById("circle").style.display = this.circleButtonDisplay ? "initial" : "none"; //truthy, falsey
        document.getElementById("rectangle").style.display = this.recButtonDisplay ? "initial" : "none";
        
        this.exists = true;  // needed to differentiate pages
        
       
        circle.addEventListener('click', this.switchCircle.bind(this)); // keeps this value of this (the class) is concrete
        
        rectangle.addEventListener('click', this.switchRectangle.bind(this));
    }
    
    turnOff() {
        this.exists = false;

        var destination = this.circleDestination
        circle.removeEventListener('click', this);

        var destination = this.rectangleDestination
        rectangle.removeEventListener('click', this);

    }

    setButtons(circleDestination,
        rectangleDestination) { // used to set destination variables to be able to access 
            console.log(circleDestination);
            console.log(rectangleDestination);
            this.circleDestination = circleDestination;
            this.rectangleDestination = rectangleDestination;
            console.log(this.circleDestination);
            console.log(this.rectangleDestination);

            if (circleDestination.pageNumber === 5) {
                symbolsArray = randomizeArray(symbolsArray);
                return symbolsArray;
        }
    }
}

//have to have all of the instances before creating any of the pages for reference 

// create first instance 

const page1 = new Page (
    1,
    headerTextArr[0],
    circleTextArr[0],
    "",
    "", 
    false, 
    true, 
    false,
)

// page 2 instance 

const page2 = new Page (
    2,
    headerTextArr[1],
    circleTextArr[1],
    helperTextArr[0],
    rectTextArr[0],
    true,
    true,
    true)


// page 3 instance 

const page3 = new Page (
    3,
    headerTextArr[2],
    circleTextArr[1],
    helperTextArr[1],
    rectTextArr[0],
    true,
    true,
    true)

// page 4 instance

const page4 = new Page (
    4,
    headerTextArr[3],
    circleTextArr[1],
    helperTextArr[2],
    rectTextArr[0],
    true,
    true,
    true)

// page 5 instance

const page5 = new Page (
    5,
    // `${symbolsArray.i} + ":" + ${symbolsArray[i]}`,
    symbolsArray,
    circleTextArr[1],
    helperTextArr[3],
    rectTextArr[1],
    true,
    true,
    true    
    )


// page 6 instance

const page6 = new Page (
    6,
    headerTextArr[4],
    circleTextArr[1],
    helperTextArr[4],
    "",
    true,
    true, 
    false)



page1.setButtons(page2, null);
page1.create();
page2.setButtons(page1, page3);
page3.setButtons(page1, page4);
page4.setButtons(page1, page5);
page5.setButtons(page1, page6);




// // change to page 2 on click of go on page 1

// circle.addEventListener('click', function () {
//     page1.turnOff();
//     page2.create(); 
// })

// circle.removeEventListener('click', page1); // removes event listener to clear it for the next one




// // change to page 3 on click of next on page 2

// rectangle.addEventListener('click', function () {
//     page2.turnOff();
//     page3.create();

// })

// rectangle.removeEventListener('click', page2); // removes event listener to clear it for the next one

// page 3 instance 

// const page3 = new Page (
//     headerTextArr[2],
//     circleTextArr[1],
//     helperTextArr[1],
//     rectTextArr[0],
//     true,
//     true,
//     true
//     )


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

// change to page 5 on click of next

// rectangle.addEventListener('click', function () {

//          page4.turnOff();
//         page5.create();
// })

// document.getElementById("rectangle").removeEventListener('click', page4); // removes event listener to clear it for the next one

// const symbolString = 
//         `${symbolsArray.i} + ":" + ${symbolsArray[i]}`; TODOOOOO

// page 5 instance

// const page5 = new Page (
//     // `${symbolsArray.i} + ":" + ${symbolsArray[i]}`,
//     symbolsArray,
//     circleTextArr[1],
//     helperTextArr[3],
//     rectTextArr[1],
//     true,
//     true,
//     true,
    
//     // document.getElementsByClassName("scroll").style.display = "block"
//     )

    // const scrollerDisplay = document.getElementsByClassName("scroll");
    // if (Page = page5) {
    //     scrollerDisplay.textContent = symbolsArray
    // } else {
    //     scrollerDisplay.visibility = "hidden"
    // }

// change to page 6 on click of next and rotates the symbols array for the next game

// document.getElementById("rectangle").addEventListener('click', function () {

//         page6.create();
//         page5.turnOff();
//         let storedSymbol = symbolsArray.shift() // this stores what is shifted off the front
//         symbolsArray.push(storedSymbol); // this puts the stored value at the end of the array
// })

// document.getElementById("rectangle").removeEventListener('click', page5); // removes event listener to clear it for the next one


// // page 6 instance

// const page6 = new Page (
//     headerTextArr[4],
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


