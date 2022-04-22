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

let randomQuesiton = { id: -1 };

const loadScore = () => {
  const scoreSpan = document.getElementById("score");
  scoreSpan.textContent = score;
  if (score === 7) {
    setTimeout(() => {
      score = 0;
    }, 2000);
  }
};

const increment = () => {
  score += 1;
  console.log(score);
  loadScore();
};

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
    console.log(randomQuesiton);
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
  event.preventDefault();
  let capitalAnswer = event.target.inputField.value;
  if (listOfQuestions.length > 0) {
    if (capitalAnswer === randomQuesiton.answer) {
      increment();
      console.log("radi");
      clearDisplay();
      getQuestion();
    } else {
      console.log("wrong answer");
    }
  } else {
    if (capitalAnswer === randomQuesiton.answer) {
      increment();
      clearDisplay();
      alert("congratulations");
      console.log("restarting");
      setTimeout(() => {
        location.reload();
      }, 3000);
    } else {
      console.log("wrong answer");
    }
  }
};
