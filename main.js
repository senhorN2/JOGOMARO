const mario = document.querySelector('.mario');

const jump = () => {
    mario.classList.add('jump');
}
document.addEventListener('W', jump)

const pipe