const LOADING_SCREEN = document.querySelector("#loading-screen"); // notice SCREAMING_SNAKE_CASE usage for const
const MAIN_TEXT = document.querySelector("#main-text");
const WAIT = (miliseconds) => new Promise(resolve => setTimeout(resolve, miliseconds)); // wait script
const IS_EVEN = (number) => number % 2 === 0;
let time = 0;
let timeEvenDisplay = "odd";
class UselessAndUnprefferedClassWithFunctionForChangingTextContentPurelyForCasingExampleInWhichNameIsExtremelyLongForAbsolutelyNoReason { // notice pascal case for classes, if you could
    constructor(textElement) {
        this.textElementToChange = textElement;
    }
    changeText() {
        this.textElementToChange.textContent = `The time on this page in seconds is ${timeEvenDisplay} (javascript example). Also this is a dev page, you should't be here.`;
    }
}
const TEXT_CRAP_CLASS = new UselessAndUnprefferedClassWithFunctionForChangingTextContentPurelyForCasingExampleInWhichNameIsExtremelyLongForAbsolutelyNoReason(MAIN_TEXT);
async function timeLoop() { // note camelcase for functions
    while (true) {
        if (IS_EVEN(time)) {
            timeEvenDisplay = "even"; 
        }
        else { // notice it's on a new line
            timeEvenDisplay = "odd";
        }
        TEXT_CRAP_CLASS.changeText();
        await WAIT(1000);
        time++;
    }
}
LOADING_SCREEN.style.display = "none"; // remove loading screen
timeLoop();