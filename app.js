const p1Button = document.querySelector('#p1Button');
const p1Display = document.querySelector('#p1Display');
const p2Button = document.querySelector('#p2Button');
const p2Display = document.querySelector('#p2Display');
const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

let winningScore = 3;
let p1Score = 0; //inital score = 0
let p2Score = 0; //inital score = 0
let isGameOver = false;

p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score += 1; //increasing score on click
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add('has-text-primary')
            p2Display.classList.add('has-text-danger')
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p1Display.textContent = p1Score;//changing the text in h1
    }
})

p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score += 1; //increasing score on click
        if (p2Score === winningScore) {
            isGameOver = true;
            p2Display.classList.add('has-text-primary')
            p1Display.classList.add('has-text-danger')
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p2Display.textContent = p2Score;//changing the text in h1
    }
})

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    p1Score = 0; //inital score = 0
    p2Score = 0; //inital score = 0
    isGameOver = false;
    p1Display.textContent = 0;//changing the text in h1
    p2Display.textContent = 0;//changing the text in h1
    p1Display.classList.remove('has-text-primary', 'has-text-danger');
    p2Display.classList.remove('has-text-primary', 'has-text-danger');
    p1Button.disabled = false;
    p2Button.disabled = false;
}
