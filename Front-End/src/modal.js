const btn = document.getElementById('modal_opener');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal_content')
let newGame
let currentQuestion
let userAnswer

// function attachModalListeners(modalElm) {
//   modalElm.querySelector('.close_modal').addEventListener('click', toggleModal);
//   modalElm.querySelector('.overlay').addEventListener('click', toggleModal);
// }
//
// function detachModalListeners(modalElm) {
//   // modalElm.querySelector('.close_modal').removeEventListener('click', toggleModal);
//   modalElm.querySelector('.overlay').removeEventListener('click', toggleModal);
// }

function toggleModal() {
  let currentState = modal.style.display;

  // If modal is visible, hide it. Else, display it.
  if (currentState === 'none') {
    modal.style.display = 'block';
    // attachModalListeners(modal);
  } else {
    modal.style.display = 'none';
    // detachModalListeners(modal);
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
    console.log(currentQuestion);
    currentQuestion.asked = "true"
    let correctAnswer = currentQuestion.correctAnswer
    userAnswer = document.querySelector('input[name="answer"]:checked').value;
    console.log(currentQuestion);

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



    // // gather answer containers from our quiz
    // const answerContainers = modalContent.querySelectorAll(".answers");
    //
    // // keep track of user's answers
    // let numCorrect = 0;
    //


    // for each question...
    // myQuestions.forEach((currentQuestion, questionNumber) => {
    //   // find selected answer
    //   const answerContainer = answerContainers[questionNumber];
    //   const selector = `input[name=question${questionNumber}]:checked`;
    //   const userAnswer = (answerContainer.querySelector(selector) || {}).value;
    //
    //   // if answer is correct
    //   if (userAnswer === currentQuestion.correctAnswer) {
    //     // add to the number of correct answers
    //     numCorrect++;
    //     newGame = false
    //     // color the answers green
    //     answerContainers[questionNumber].style.color = "lightgreen";
    //     modalContent.innerHTML = '<div style="text-align: center">Correct! Resuming in three seconds (your score will persist)...</div>'
    //     setTimeout(function() {
    //       toggleModal()
    //       buildQuiz()
    //       gameArea.stop() //stops the interval
    //       obstacles = [] // resets the obstacles to nothing
    //       startGame() // restarts the game
    //     }, 3000)
    //   } else {
    //     // if answer is wrong or blank
    //     // color the answers red
    //     newGame = true
    //     answerContainers[questionNumber].style.color = "red";
    //     modalContent.innerHTML = '<div style="text-align: center">Incorrect. Game will reset in three seconds...</div>'
    //     setTimeout(function() {
    //       toggleModal()
    //       buildQuiz()
    //       gameArea.stop() //stops the interval
    //       obstacles = [] // resets the obstacles to nothing
    //     }, 3000)
    //   }
    // })


  }

  buildQuiz();

  // const quizContainer = document.getElementById("quiz");


}
