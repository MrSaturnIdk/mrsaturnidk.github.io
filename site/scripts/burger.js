const load = document.querySelector("#loading");
const text = document.querySelector("#burger_text")
const wait = (miliseconds) => new Promise(resolve => setTimeout(resolve, miliseconds));
// I'm too lazy for proper error handling lol
let time = localStorage.getItem("stare_time");
if (time == null) {
    time = 0;
    console.log("New user ig (or erased browsing data)");
}
else {
    console.log("Data refreshed")
}
// epic loop trust
async function time_loop() {
    while (true) {
        await wait(1000);
        time++;
        text.textContent = `You have stared at the hamburger for ${time} seconds`;
    }
}
load.style.display = "none";
console.log("Hooray it loaded");
time_loop();