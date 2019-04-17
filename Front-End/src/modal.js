const btn = document.getElementById('modal_opener');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal_content')
let newGame
let currentQuestion
let userAnswer

function toggleModal() {
  let currentState = modal.style.display;

  // If modal is visible, hide it - otherwise, display it
  if (currentState === 'none') {
    modal.style.display = 'block';
  } else {
    modal.style.display = 'none';
  }
}


const readyQuiz = function() {

  function buildQuiz() {

    // select a question that hasn't been asked
    currentQuestion = myQuestions.find(question => {
      return question.asked === "false"
    })

    let quiz = `<h2>You collided with a pipe :( </h2>
                <h3 style="text-align: center">Answer this question to proceed:</h3>
                <img src="${currentQuestion.url}" height="175" width="490" > <br> <br>`

    modalContent.innerHTML = quiz

    let answersForm = document.createElement('form')
    modalContent.appendChild(answersForm)

    let answerA = `<input type="radio" value="a" name="answer"> a: ${currentQuestion.answers["a"]}  `
    let answerB = `<input type="radio" value="b" name="answer"> b: ${currentQuestion.answers["b"]}  `
    let answerC = `<input type="radio" value="c" name="answer"> c: ${currentQuestion.answers["c"]}  `

    answersForm.innerHTML += answerA
    answersForm.innerHTML += answerB
    answersForm.innerHTML += answerC

    answersForm.innerHTML += `<br> <br> <button id="submit" style="display: block; margin: 0 auto;">Submit</button>`;
    const submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", handleSubmit);
  }

  function handleSubmit(e) {
    e.preventDefault()
    // mark the question as asked
    currentQuestion.asked = "true"
    let correctAnswer = currentQuestion.correctAnswer
    userAnswer = document.querySelector('input[name="answer"]:checked').value;

    if (userAnswer === correctAnswer) {
        // add to the number of correct answers
        // numCorrect++;
        newGame = false
        // color the answers green
        // answerContainers[questionNumber].style.color = "lightgreen";
        modalContent.innerHTML = '<div style="text-align: center">Correct! Resuming in three seconds (your score will persist!)...</div>'
        setTimeout(function() {
          toggleModal()
          buildQuiz()
          gameArea.stop() //stops the interval
          obstacles = [] // resets the obstacles to nothing
          startGame() // restarts the game
        }, 3000)
      } else {
        // if answer is wrong or blank
        // color the answers red
        newGame = true
        // answerContainers[questionNumber].style.color = "red";
        modalContent.innerHTML = '<div style="text-align: center">Incorrect. This message will self-destruct in three seconds (click Play! to restart)...</div>'
        setTimeout(function() {
          toggleModal()
          buildQuiz()
          gameArea.stop() //stops the interval
          obstacles = [] // resets the obstacles to nothing
        }, 3000)
      }
  }

  buildQuiz();
}
