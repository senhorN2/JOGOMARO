const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const nuvem = document.querySelector(".nuvem");
const startButton = document.querySelector(".start");
const gaveOverScream = document.querySelector(".game-over");
let gameStart = false;
const jump = () => {
    mario.classList.add("jump");
    setTimeout(() => {
        mario.classList.remove("jump")
    } 
    ,500);
}
    const loop = setInterval (() => {
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");
        if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
            pipe.style.animation = "none";
            pipe.style.left = `${pipePosition}px`;
            mario.style.animation = "none";
            mario.style.left = `${marioPosition}px`;
            mario.src = "./img/game-over.png";
            mario.style.width = "75px";
            mario.style.marginLeft = "50px";
            audioStart.pause();
            gameOverSound.play();
            clearInvertaval(loop);
            gameOverScreen.style.display = "flex"
        }
    },10);
document.addEventListener("keydown",jump);
const restartGame = () => {
    window.location.reload();
}
 