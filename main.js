// import { listOfQuestions } from "./data.js";

let listOfQuestions = [
  {
    id: 1,
    question: "What is capital of Finland?",
    answer: "helsinki",
  },
  {
    id: 2,
    question: "What is capital of Germany?",
    answer: "berlin",
  },
  {
    id: 3,
    question: "What is capital of France?",
    answer: "paris",
  },
  {
    id: 4,
    question: "What is capital of Spain?",
    answer: "madrid",
  },
  {
    id: 5,
    question: "What is capital of Portugal?",
    answer: "lisbon",
  },
  {
    id: 6,
    question: "What is capital of Hungary?",
    answer: "budapest",
  },
  {
    id: 7,
    question: "What is capital of Moldava?",
    answer: "chisinau",
  },
];

const initApp = () => {
  console.log("App init");
  loadScore();
  clearDisplay();
  getQuestion();
};

document.addEventListener("DOMContentLoaded", initApp);
let score = 0;
let pastQuestions = [0];

let zoki = [1];
let mirko = { id: 1 };

console.log("--------------");
console.log(zoki === mirko.id);
console.log(JSON.stringify(mirko.id));
console.log(Object.values(mirko));
let traktor = JSON.stringify(mirko.id);
let kam = JSON.stringify(zoki);
console.log(typeof traktor);
console.log(typeof kam);

console.log("--------------");

let randomQuesiton = { id: -1 };

const loadScore = () => {
  const scoreSpan = document.getElementById("score");
  scoreSpan.textContent = score;
  if (score === 7) {
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
    listOfQuestions = updateListOfQuestions;
    console.log(updateListOfQuestions);
  }
};

const getQuestion = () => {
  console.log(listOfQuestions);

  if (listOfQuestions.length > 0) {
    console.log("if statment");

    randomQuesiton =
      listOfQuestions[Math.floor(Math.random() * listOfQuestions.length)];
    pastQuestions = [...pastQuestions, randomQuesiton.id];

    updateQuestionList();
    displayQuestion(randomQuesiton);
  }
};
const container = document.getElementById("listQuestions");

const clearDisplay = () => {
  container.innerHTML = "";
};

const displayQuestion = () => {
  console.log(pastQuestions);

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
    clearDisplay();
    getQuestion();
  } else {
    console.log("wrong answer");
  }
  if (listOfQuestions.length <= 0) {
    console.log("TESTEEEEEET");
    initApp();
  }
};
