const startBtn = document.querySelector('.btn1');
const projectBox = document.querySelector('.container');
const resumeBtn = document.querySelector('.btn2');

// Added event listener for the start quiz button
startBtn.addEventListener("click", startQuiz)

// Added a function for what should happen after clicking the start button
function startQuiz() {
    projectBox.classList.remove("hide")
    resumeBtn.classList.remove("hide")
}

var delay = 1000;
window.setTimeout(function(){$('#downloadLink')[0].click();},delay);

