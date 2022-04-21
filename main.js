import { listOfQuestions } from "./data.js";
console.log(listOfQuestions);

const initApp = () => {
  console.log("App init");
  loadScore();
  getQuestion();
};

document.addEventListener("DOMContentLoaded", initApp);
let score = 0;
let pastQuestions = [];
let randomQuesiton;
const loadScore = () => {
  const scoreSpan = document.getElementById("score");
  scoreSpan.textContent = score;
  if (score === 10) {
    score = 0;
  }
};

const increment = () => {
  score += 1;
  console.log(score);
  loadScore();
};

const dugme = document.getElementById("increment");
dugme.addEventListener("click", increment);

const updateQuestionList = () => {
  if (randomQuesiton.id) {
    let updateListOfQuestions = listOfQuestions.filter(
      (question) => question.id !== randomQuesiton.id
    );

    console.log(updateListOfQuestions);
  }
};

const getQuestion = () => {
  console.log(listOfQuestions);
  if (listOfQuestions.length > 0) {
    console.log("if statment");
    //  var question = Math.floor(Math.random() * listOfQuestions.length);
    randomQuesiton =
      listOfQuestions[Math.floor(Math.random() * listOfQuestions.length)];
    pastQuestions = [...pastQuestions, randomQuesiton.id];
  }

  updateQuestionList();
  displayQuestion(randomQuesiton);
};

const displayQuestion = () => {
  console.log(pastQuestions);
  const container = document.getElementById("listQuestions");
  const div = document.createElement("div");
  const questionText = document.createElement("p");
  const labelAnswer = document.createElement("label");
  const inputAnswer = document.createElement("input");
  const buttonAnswer = document.createElement("button");
  const form = document.createElement("form");
  div.id = "questionDiv";
  buttonAnswer.textContent = "Send answer";
  inputAnswer.id = "inputField";
  inputAnswer.type = "text";
  inputAnswer.textContent = "";

  // questionText.textContent = item.getItem();
  questionText.textContent = randomQuesiton.question;

  form.appendChild(questionText);
  form.appendChild(labelAnswer);
  form.appendChild(inputAnswer);
  form.appendChild(buttonAnswer);
  div.appendChild(form);

  container.appendChild(div);

  form.addEventListener("submit", processAnswer);
};
const processAnswer = (event) => {
  console.log(`rnd question ${randomQuesiton.id}`);
  event.preventDefault();
  console.log(event.target.inputField.value);
  let capitalAnswer = event.target.inputField.value;

  if (capitalAnswer === randomQuesiton.answer) {
    increment();
    console.log("radi");

    getQuestion();
  } else {
    getQuestion();
    console.log("wrong answer");
  }
};
