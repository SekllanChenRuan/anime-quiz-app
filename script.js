//create questions and answers
const questions = [
  {
    question: "Who was Naruto's father in Naruto?",
    choices: [
      { text: "Darth Vader", correct: false },
      { text: "Minato Namikaze", correct: true },
      { text: "Jiraiya", correct: false },
      { text: "Iruka Umino", correct: false },
    ],
  },

  {
    question: "Who has a bad sense of direction in One Piece?",
    choices: [
      { text: "Luffy", correct: false },
      { text: "Nami", correct: false },
      { text: "Sanji", correct: false },
      { text: "Zoro", correct: true },
    ],
  },

  {
    question:
      "What is the name of the titan power that Reiner Braun possessed in Attack On Titan?",
    choices: [
      { text: "Armored Titan", correct: true },
      { text: "Beast Titan", correct: false },
      { text: "Attack Titan", correct: false },
      { text: "Colossal Titan", correct: false },
    ],
  },

  {
    question: "What car does Takumi Fujiwara drive in Initial D?",
    choices: [
      { text: "Nissan Silvia", correct: false },
      { text: "Mazda Rx-7", correct: false },
      { text: "Toyota AE86", correct: true },
      { text: "Nissan Skyline GT-R", correct: false },
    ],
  },

  {
    question: "What boxing style did Makunouchi Ippo use in Hajime No Ippo?",
    choices: [
      { text: "Peek-a-Boo", correct: true },
      { text: "Southpaw", correct: false },
      { text: "Brawler", correct: false },
      { text: "Hitman", correct: false },
    ],
  },
];

// initialize variables
const quizQuestion = $("#question");
const options = $(".options");
const answers = $(".answer");
const nextbtn = $("#next-btn");

//initialize variables to be incremented later for quiz progress
let currentQuestionCount = 0;
let score = 0;

function start() {
  currentQuestionCount = 0;
  score = 0;
  nextbtn.innerHTML = "Next";
  showQuestion(); //shows questions and answer choices
}

function showQuestion() {
  resetState(); //hides the nextbtn, and removes all the contents of options
  let currentQuestion = questions[currentQuestionCount];
  quizQuestion.html(currentQuestion.question);

  $.each(currentQuestion.choices, function (index, choice) {
    const button = $("<button>")
      .text(choice.text)
      .addClass("answer")
      .data("correct", choice.correct)
      .on("click", function () {
        selectAnswer($(this)); //onclick selectedAnswer is invoked and the selected choice would be checked for correctness
      });

    options.append(button);
  });
}

function resetState() {
  nextbtn.hide();
  options.empty();
}

function selectAnswer(selected) {
  const isCorrect = selected.data("correct") === true;

  if (isCorrect) {
    //if selected is correct is true then add .correct else add .incorrect for selected
    selected.addClass("correct");
    score++; //increase score for correct answer
  } else {
    selected.addClass("incorrect");
  }

  $.each(options.children(), function (index, button) {
    //iterates through all the childrens of option and adds .correct to the button if correct
    if ($(button).data("correct") === true) {
      $(button).addClass("correct");
    }
  });

  options.find("button").prop("disabled", true); //disables button
  nextbtn.show(); //shows the next button
}

function showScore() {
  //function that shows the score
  resetState();
  quizQuestion.html(`You scored ${score} out of ${questions.length}!`);
  nextbtn.html("Try again");
  nextbtn.show();
}

function continueNext() {
  currentQuestionCount++; //increments currentQuestionCount
  if (currentQuestionCount < questions.length) {
    showQuestion();
  } else {
    showScore(); //function that shows the score
  }
}

nextbtn.on("click", function () {
  if (currentQuestionCount < questions.length) {
    continueNext(); //runs if currentQuestionCount does not equal the last index of the questions.
  } else {
    start();
  }
});

start(); //start function is invoked to start the trivia
