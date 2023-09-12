let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
let htmlDom = document.getElementsByTagName("html")[0];
let finalSize = htmlWidth / 7.5 > 75 ? 75 : htmlWidth / 7.5;
htmlDom.style.fontSize = finalSize + "px";

const wheel = document.getElementById("wheel");
const spinButton = document.getElementById("spinButton");
const overlay = document.getElementById("overlay");
const roletaSound = document.getElementById("roletaSound");

spinButton.addEventListener("click", () => {
    roletaSound.play();
    const rotationAngle = 895;
    wheel.style.transform = `rotate(${rotationAngle}deg)`;
    wheel.style.transition = "transform 6.5s ease-out";
    wheel.addEventListener("transitionend", handleTransitionEnd);
});

function handleTransitionEnd() {
    overlay.style.display = "";
    wheel.removeEventListener("transitionend", handleTransitionEnd);
    setTimeout(ddb, 2000);
}

function load() {
    wheel.style.transform = "rotate(0deg)";
    wheel.style.transition = "none";
}

function ddb() {
    window.open('https://donosdabola.net/player-from-agent/agent/39zlc');
    roletaSound.pause();
}