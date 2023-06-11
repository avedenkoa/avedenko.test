let startBtn = document.querySelector(".start-btn");
let toSecond = document.querySelector(".to-second");
let toBrake = document.querySelector(".to-brake");
let toThird = document.querySelector(".to-third");
let toFourth = document.querySelector(".to-fourth");
let finishBtn = document.querySelector(".finish-btn");
let tryAgainBtn = document.querySelector(".try-again");

let error = document.querySelectorAll(".error");
let quizItem = document.querySelectorAll(".quiz-item");

let correctPopup = document.querySelector(".correct-popup");
let wrongPopup = document.querySelector(".wrong-popup");
let overlay = document.querySelector(".overlay");
let closeCorrectPopup = document.querySelector(".close-correct-popup");
let closeWrongPopup = document.querySelector(".close-wrong-popup");

let correctAnswerIs = document.querySelector(".correct-answer-is");
let correctAnswers = 0;

let result = document.querySelector(".result");

const correctFirstAnswer = "Frank Abagnale";
const correctSecondAnswer = "50";
const correctThirdAnswer = "Salvador Dali";
const correctfourthAnswer = "Joanne";

closeCorrectPopup.addEventListener("click", function (e) {
  e.preventDefault();
  correctPopup.classList.remove("active-popup");
  overlay.classList.remove("active-popup");
});

closeWrongPopup.addEventListener("click", function (e) {
  e.preventDefault();
  wrongPopup.classList.remove("active-popup");
  overlay.classList.remove("active-popup");
});

startBtn.addEventListener("click", function (e) {
  e.preventDefault();
  quizItem[0].classList.remove("active-item");
  quizItem[1].classList.add("active-item");
});

toSecond.addEventListener("click", function (e) {
  e.preventDefault();

  const firstCheckedRadio = document.querySelector(
    'input[name="firstAnswer"]:checked'
  );

  if (!firstCheckedRadio) {
    error[0].classList.add("active");
  } else {
    error[0].classList.remove("active");

    if (firstCheckedRadio.value === correctFirstAnswer) {
      correctAnswers = correctAnswers + 1;
      correctPopup.classList.add("active-popup");
      overlay.classList.add("active-popup");
      quizItem[1].classList.remove("active-item");
      quizItem[2].classList.add("active-item");
    } else {
      correctAnswerIs.textContent = correctFirstAnswer;
      wrongPopup.classList.add("active-popup");
      overlay.classList.add("active-popup");
      quizItem[1].classList.remove("active-item");
      quizItem[2].classList.add("active-item");
    }
  }
});

toBrake.addEventListener("click", function (e) {
  e.preventDefault();

  const secondCheckedRadio = document.querySelector(
    'input[name="secondAnswer"]:checked'
  );

  if (!secondCheckedRadio) {
    error[1].classList.add("active");
  } else {
    error[1].classList.remove("active");

    if (secondCheckedRadio.value === correctSecondAnswer) {
      correctAnswers = correctAnswers + 1;
      correctPopup.classList.add("active-popup");
      overlay.classList.add("active-popup");
      quizItem[2].classList.remove("active-item");
      quizItem[3].classList.add("active-item");
    } else {
      correctAnswerIs.textContent = correctSecondAnswer;
      wrongPopup.classList.add("active-popup");
      overlay.classList.add("active-popup");
      quizItem[2].classList.remove("active-item");
      quizItem[3].classList.add("active-item");
    }
  }
});

toThird.addEventListener("click", function (e) {
  e.preventDefault();
  quizItem[3].classList.remove("active-item");
  quizItem[4].classList.add("active-item");
});

toFourth.addEventListener("click", function (e) {
  e.preventDefault();

  const thirdCheckedRadio = document.querySelector(
    'input[name="thirdAnswer"]:checked'
  );

  if (!thirdCheckedRadio) {
    error[2].classList.add("active");
  } else {
    error[2].classList.remove("active");

    if (thirdCheckedRadio.value === correctThirdAnswer) {
      correctAnswers = correctAnswers + 1;
      correctPopup.classList.add("active-popup");
      overlay.classList.add("active-popup");
      quizItem[4].classList.remove("active-item");
      quizItem[5].classList.add("active-item");
    } else {
      correctAnswerIs.textContent = correctThirdAnswer;
      wrongPopup.classList.add("active-popup");
      overlay.classList.add("active-popup");
      quizItem[4].classList.remove("active-item");
      quizItem[5].classList.add("active-item");
    }
  }
});

finishBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const fourtCheckedRadio = document.querySelector(
    'input[name="fourthAnswer"]:checked'
  );

  if (!fourtCheckedRadio) {
    error[2].classList.add("active");
  } else {
    error[2].classList.remove("active");

    if (fourtCheckedRadio.value === correctfourthAnswer) {
      correctAnswers = correctAnswers + 1;
      correctPopup.classList.add("active-popup");
      overlay.classList.add("active-popup");
      quizItem[5].classList.remove("active-item");
      quizItem[6].classList.add("active-item");
      result.textContent = correctAnswers;
    } else {
      correctAnswerIs.textContent = correctfourthAnswer;
      wrongPopup.classList.add("active-popup");
      overlay.classList.add("active-popup");
      quizItem[5].classList.remove("active-item");
      quizItem[6].classList.add("active-item");
      result.textContent = correctAnswers;
    }
  }
});

tryAgainBtn.addEventListener("click", function (e) {
  e.preventDefault();
  quizItem[6].classList.remove("active-item");
  quizItem[0].classList.add("active-item");
});
