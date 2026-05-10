const load = document.querySelector("#loading");
const text = document.querySelector("#burger_text")
const wait = (miliseconds) => new Promise(resolve => setTimeout(resolve, miliseconds));
let displayable_time;
// I'm too lazy for proper error handling lol
let time = localStorage.getItem("stare_time");
if (time == null) {
    time = 0;
    console.log("New user ig (or erased browsing data)");
}
else {
    console.log("Data refreshed")
}
function calc_time(seconds) {
    let second = seconds % 60;
    let minutes = Math.floor(seconds/60);
    let hours = Math.floor(minutes/60);
    let days = Math.floor(hours/24); // how the fuck would you achieve past this
    let years = Math.floor(days/365);
    let decades = Math.floor(years/10);
    let centuries = Math.floor(decades/10);
    let millenia = Math.floor(centuries/10);
    let returnable;
    return returnable;

}
// epic loop trust
async function time_loop() {
    while (true) {
        displayable_time = calc_time(time);
        text.textContent = `You have stared at the hamburger for ${displayable_time} seconds`;
        await wait(1000);
        time++;
    }
}
load.style.display = "none";
console.log("Hooray it loaded");
time_loop();