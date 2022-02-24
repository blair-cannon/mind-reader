const headerText = document.querySelector('header');
const rectangularText = document.querySelector('rectangle');
const helperText = document.querySelector('help');
const circularButton = document.querySelector('circle');


// const requestURL = 'main.json';
// const request = new Request(requestURL);

// const response = await fetch(request);
// const superHeroes = await response.json();

// const headerText = [ "I can read your mind...", "Pick a number from 01 - 99", "Add both digits together to get a new number", "Subtract your new number from the original number", symbolsArray];

class Page {
    constructor(headerState, cirButtonState) {
        this.headerState = headerState;
        this.cirButtonState = cirButtonState;
    }
    create() {
        headerText.textContent = this.headerState;
        circularButton.textContent = this.cirButtonState; 

    }
}
const nineSymbolsArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
const symbolsArray = nineSymbolsArray.concat(nineSymbolsArray.concat(nineSymbolsArray.concat(nineSymbolsArray.concat(nineSymbolsArray.concat(nineSymbolsArray.concat(nineSymbolsArray.concat(nineSymbolsArray.concat(nineSymbolsArray.concat(nineSymbolsArray))))))))); // provides an array with all of the symbols needed for the possible outcomes 

const headerArray = '{"header":["I can read your mind...", "Pick a number from 01 - 99", "Add both digits together to get a new number", "Subtract your new number from the original number", symbolsArray]}';


class First extends Page {
    constructor(headerState, cirButtonState) {
        super(headerState, cirButtonState);
    }
}

class Middle extends Page { // pages 2 - 5
    constructor(headerState, cirButtonState, helperText, recButtonState) {
        super(headerState, cirButtonState);
        this.helperText = helperText;
        this.recButtonState = recButtonState;
    }
}

class Last extends Page {
    constructor(headerState, cirButtonState) {
    super(headerState, cirButtonState);
    this.helperText = helperText;
    }
}

const first = new First (
    headerState = headerArray.header[0]
)
first.create();

// window.addEventListener('load', (event) => {
//     const firstPage = new Page(
//         document.getElementById("header").innerHTML = myHeaders[0]
//   });
  
// const firstPage = new Page(
//     document.getElementById("header").innerHTML = myHeaders[0]
    // headerText.textContent = myJSON.headerText[0];
    // headerText.appendChild(headerText);
    
    // rectangularText.textContent = `Secret identity: ${hero.secretIdentity}`;
    // helperText.textContent = `Age: ${hero.age}`;
    // circularButton.textContent = 'Superpowers:';
// )
