const btn = document.getElementById('modal_opener');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal_content')
let newGame

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

btn.addEventListener('click', toggleModal);

(function() {
  const myQuestions = [
    {
      question:`
      Consider the following code:
      <br>
      <img src="./assets/question1.png" height="350" width="500">
      <br>
      <br>
      What does the $ in front of $best_dog_ever signify?
      <br>
      <br>` ,
      answers: {
        a: "A protected variable",
        b: "A static variable",
        c: "A global variable"
      },
      correctAnswer: "c"
    }
  ];

  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    modalContent.innerHTML = output.join("")
    modalContent.innerHTML += `<button id="submit">Submit</button>`;
    // modalContent.innerHTML = output.join("");
    const submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", handleSubmit);
  }

  function handleSubmit() {
    // gather answer containers from our quiz
    const answerContainers = modalContent.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;
        newGame = false
        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
        modalContent.innerHTML = `Correct Answer! Game will resume in five seconds...`
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
        answerContainers[questionNumber].style.color = "red";
        modalContent.innerHTML = `YOU'RE A LOSER`
        setTimeout(function() {
          toggleModal()
          buildQuiz()
          gameArea.stop() //stops the interval
          obstacles = [] // resets the obstacles to nothing
        }, 3000)
      }
    });


  }

  buildQuiz();

  const quizContainer = document.getElementById("quiz");
  // const resultsContainer = document.getElementById("results");
  // const submitButton = document.getElementById("submit");

  // display quiz right away



  // on submit, show results
  // submitButton.addEventListener("click", handleSubmit);


}) ();
