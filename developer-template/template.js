// I needed a showcase for javascript, so all this does is tell you the amount of time you have spent on the page is even or odd
const LOADING_SCREEN = document.querySelector('#loading-screen'); // notice SCREAMING_SNAKE_CASE usage for const
const MAIN_TEXT = document.querySelector('#main-text');
const WAIT = (miliseconds) => new Promise(resolve => setTimeout(resolve, miliseconds)); // wait script
const IS_EVEN = (number) => number % 2 === 0;
let time = 0; // note camelCase for normal vars
let timeEvenDisplay = 'odd';
// I'm too lazy to add this, but localStorage items should have camelCase
class UselessAndUnprefferedClassWithFunctionForChangingTextContentPurelyForCasingExampleInWhichNameIsExtremelyLongForAbsolutelyNoReason { // no, theres nothing at the end muhahah
    constructor(textElement) { // don't ask why it's so long... just note the PascalCase
        this.textElementToChange = textElement;
    }
    changeText() {
        this.textElementToChange.textContent = `The time on this page in seconds is ${timeEvenDisplay} (javascript example). Also this is a dev page, you shouldn't be here.`;
    }
}
const TEXT_CRAP_CLASS = new UselessAndUnprefferedClassWithFunctionForChangingTextContentPurelyForCasingExampleInWhichNameIsExtremelyLongForAbsolutelyNoReason(MAIN_TEXT);
async function timeLoop() { // note camelCase for functions
    while (true) {
        if (IS_EVEN(time)) {
            timeEvenDisplay = 'even'; 
        }
        else { // notice it's on a new line
            timeEvenDisplay = 'odd';
        }
        TEXT_CRAP_CLASS.changeText();
        await WAIT(1000);
        time++;
    }
}
LOADING_SCREEN.style.display = 'none'; // remove loading screen
timeLoop();
