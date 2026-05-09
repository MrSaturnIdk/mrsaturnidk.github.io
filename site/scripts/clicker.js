const beta = document.querySelector("#beta");
const textelem = document.querySelector("#mad_text");
const end = document.querySelector("#endscreen");
const explode = document.querySelector("#explode")
const btn = document.querySelector("#button")
explode.style.display = "none";
textelem.style.display = "none";
end.style.display = "none";
let floor_px = 0;
let index = 0;
let anti_double = false;
if ((localStorage.getItem("explosion")) !== null) {
   btn.style.display = "none"; 
   btn.disabled = true;
   beta.textContent = "Notice: Some idiot broke it, come back another time";
}
function wait_explode() {
    return new Promise((resolve) => {
        explode.addEventListener("ended", resolve, {once: true});
    });
}
function text_shit() {
    textelem.style.display = "block";
    let delay = 0
    const messages = [
        "How could you...",
        "You broke my game...",
        "I spent 2 hours making this...",
        "Only for YOU to break it.",
        "I TOLD you it was in a beta state...",
        "You KNEW it wasn't ready...",
        "And yet...",
        "You STILL tried to play."];
    messages.forEach((msg) => {
        setTimeout(() => {
            textelem.classList.add("shaking");
            cooltext(msg, textelem);
        }, delay);
        delay += (msg.length * 25) + 1500;
    });
    setTimeout(() => {
        end.style.display = "block";
        localStorage.setItem("explosion","true");
    }, delay);
}
function cooltext(prompt,elem) {
    let repeat = 0;
    elem.textContent = "";

    function type() {
        if (repeat < prompt.length) {
            elem.textContent += prompt.charAt(repeat);
            repeat++;
            setTimeout(type, 25);
        }
    }

    type();
}
function explode() {
    if (anti_double) return;
    anti_double = true;
    btn.style.display = "none";
    explode.style.display = "block";
        async function explosion() {
            explode.play();
            await wait_explode();
        }
        text_shit();
    }
}
}
