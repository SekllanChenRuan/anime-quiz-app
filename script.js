const quizQA = [
  {
    question: "Who was Naruto's father in Naruto?",
    choices: ["Darth Vader", "Minato Namikaze", "Jiraiya", "Iruka Umino"],
    correctAnswer: 1,
  },
  {
    question: "Who has a bad sense of direction in One Piece?",
    choices: ["Luffy", "Nami", "Sanji", "Zoro"],
    correctAnswer: 3,
  },
  {
    question:
      "What is the name of the titan power that Reiner Braun possessed in Attack On Titan?",
    choices: ["Armored Titan", "Beast Titan", "Attack Titan", "Colossal Titan"],
    correctAnswer: 0,
  },
  {
    question: "What car does Takumi Fujiwara drive in Initial D?",
    choices: [
      "Nissan Silvia",
      "Mazda Rx-7",
      "Toyota AE86",
      "Nissan Skyline GT-R",
    ],
    correctAnswer: 2,
  },
  {
    question: "What boxing style did Makunouchi Ippo use in Hajime No Ippo?",
    choices: ["Peek-a-Boo", "Southpaw", "Brawler", "Hitman"],
    correctAnswer: 0,
  },
];

let currenQuestion = 0;
let score = 0;
const wrongAnswers = [];

const questions = $("#quiz-question");
const selection = $("#quiz-answers");
const result = $("#result");

function start() {
  $("#quiz-button").on("click", function () {
    showQuestions();
    $("#quiz-button").html("Next");
    $("#current-question").html("1");
  });
}

function showQuestions() {
  if (currenQuestion < quizQA.length) {
    questions.text(quizQA[currenQuestion].question);
    $.each(quizQA[currenQuestion].choices, function (index, answer) {
      const listAnswers = $(`<li class="answer">${answer}</li>`);
      selection.append(listAnswers);
    });
    currenQuestion++;
  }
}

function quizAppHandle() {
  start();
}

$(quizAppHandle);
