let questions = {
  response_code: 0,
  results: [
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "easy",
      question: "Which American president appears on a one dollar bill?",
      correct_answer: "George Washington",
      incorrect_answers: [
        "Thomas Jefferson",
        "Abraham Lincoln",
        "Benjamin Franklin",
      ],
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "easy",
      question: "What do the letters in the GMT time zone stand for?",
      correct_answer: "Greenwich Mean Time",
      incorrect_answers: [
        "Global Meridian Time",
        "General Median Time",
        "Glasgow Man Time",
      ],
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which of the following card games revolves around numbers and basic math?",
      correct_answer: "Uno",
      incorrect_answers: ["Go Fish", "Twister", "Munchkin"],
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "easy",
      question:
        "What machine element is located in the center of fidget spinners?",
      correct_answer: "Bearings",
      incorrect_answers: ["Axles", "Gears", "Belts"],
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "easy",
      question: "What zodiac sign is represented by a pair of scales?",
      correct_answer: "Libra",
      incorrect_answers: ["Aries", "Capricorn", "Sagittarius"],
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "easy",
      question:
        "According to the nursery rhyme, what fruit did Little Jack Horner pull out of his Christmas pie?",
      correct_answer: "Plum",
      incorrect_answers: ["Apple", "Peach", "Pear"],
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "easy",
      question: "What are Panama hats made out of?",
      correct_answer: "Straw",
      incorrect_answers: ["Silk", "Hemp", "Flax"],
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "easy",
      question:
        "Foie gras is a French delicacy typically made from what part of a duck or goose?",
      correct_answer: "Liver",
      incorrect_answers: ["Heart", "Stomach", "Intestines"],
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "easy",
      question:
        "The drug cartel run by Pablo Escobar originated in which South American city?",
      correct_answer: "Medell&iacute;n",
      incorrect_answers: ["Bogot&aacute;", "Quito", "Cali"],
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "easy",
      question: "In aerodynamics, which force pushes an object upwards?",
      correct_answer: "Lift",
      incorrect_answers: ["Drag", "Weight", "Thrust"],
    },
  ],
};

let score = 0;
let totalQuestion = 0;
let qusNo = 0;
let question = document.querySelector(".Question");
const nextButton = document.querySelector("#Next");
const saveAndNextButton = document.querySelector("#SaveAndNext");
const submitButton = document.querySelector("#Submit");
const showScore = document.querySelector(".showScore");
const PlayAgain = document.querySelector("#PlayAgain");
// functions

let questionChange = function () {
  question.innerHTML = `Q${qusNo + 1}:   ` + questions.results[qusNo].question;
  //   console.log(question.value);
  console.log(question);
  let correctAnsIndex = Math.floor(Math.random() * 4) + 0;
  let incorrectOptionIndex = 0;
  for (let index = 0; index < 4; index++) {
    let val = document.getElementById(`option${index + 1}`);
    if (index != correctAnsIndex) {
      val.innerText = val.innerText =
        questions.results[qusNo].incorrect_answers[incorrectOptionIndex];
      incorrectOptionIndex++;
    } else {
      val.innerText = questions.results[qusNo].correct_answer;
    }
  }
};
/*==============================================================
                        load
================================================================*/
function loadfunc() {
  score = 0;
  qusNo = 0;
  console.log("ye");
  questionChange();
  qusNo++;
  qusNo %= 10;
}
function nextQuestion() {
  for (let index = 0; index < 4; index++) {
    let currn = document.getElementById(`ans${index + 1}`);
    if (currn.checked) {
      currn.checked = false;
    }
  }
  questionChange();

  qusNo++;
  qusNo %= 10;
}
function save() {
  console.log("save");
  for (let index = 0; index < 4; index++) {
    let currn = document.getElementById(`ans${index + 1}`);
    if (currn.checked) {
      let val = document.querySelector(`#option${index + 1}`);
      console.log(val.innerHTML);
      if (val.innerHTML == questions.results[qusNo - 1].correct_answer) {
        score++;
      }
      currn.checked = false;
    }
  }
  questionChange();
  qusNo++;
  qusNo %= 10;
  console.log(score);
}
function submitFunc() {
  console.log("submit");
  showScore.innerHTML = `<h2>Your score is ${score}/10 🎉</h2>`;
  let ele = document.createElement("btn");
  ele.innerHTML = "Play Again";
  ele.classList.add("PlayAgain");
  PlayAgain = ele;
  showScore.append(ele);
  console.log(showScore);
}

function PlayAgainFunc() {
  console.log("yeyfh");
  loadfunc();
  showScore.innerHTML = ``;
}
// events
addEventListener("DOMContentLoaded", loadfunc);
nextButton.addEventListener("click", nextQuestion);
saveAndNextButton.addEventListener("click", save);
submitButton.addEventListener("click", submitFunc);
PlayAgain.addEventListener("click", PlayAgainFunc);
