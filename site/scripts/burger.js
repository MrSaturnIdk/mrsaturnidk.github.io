const load = document.querySelector("#loading");
const text = document.querySelector("#burger_text");
const wait = (miliseconds) => new Promise(resolve => setTimeout(resolve, miliseconds));
let displayable_time;
function make_displayable_time(seconds) {
    const units = [
    {label: "second", modulo: 60, divide: 60},    
    {label: "minute", modulo: 60, divide: 60},
    {label: "hour", modulo: 24, divide: 24},
    {label: "day", modulo: 365, divide: 365}, //how the fuck do you get past days
    {label: "year", modulo: 10, divide: 10},
    {label: "decade", modulo: 1, divide: 1}
    ];
    let returnable = "";
    let next = seconds;
    for (let i = 0; i < units.length; i++) {
        const {label, modulo, divide} = units[i];
        const next_modued = next % modulo;
        if (next_modued == 1) {
            returnable = `${next_modued} ${label}, ` + returnable;
        } 
        else if (next_modued == 0) {/*empty*/} 
        else {
            returnable = `${next_modued} ${label}s, ` + returnable;
        }
        next = Math.floor(next/divide);
    }
    returnable = returnable.trim();
    if (returnable.endsWith(",")) {
        returnable = returnable.slice(0,-1);
    }
    const last_comma = returnable.lastIndexOf(",");
    const first_comma = returnable.indexOf(",");
    if (last_comma !== -1) {
        if (last_comma == first_comma) {
            returnable = `${returnable.slice(0, last_comma)} and${returnable.slice(last_comma +1)}`;
        }
        else {
        returnable = `${returnable.slice(0, last_comma)}, and${returnable.slice(last_comma + 1)}`;
        }
    }
    return returnable;
}
// epic loop trust
async function time_loop() {
    while (true) {
        displayable_time = make_displayable_time(time);
        if (displayable_time === "") {
            displayable_time = "0 seconds";
        }
        text.textContent = `You have stared at the hamburger for ${displayable_time}.`;
        await wait(1000);
        time++;
    }
}
load.style.display = "none";
console.log("Hooray it loaded");
time_loop();
