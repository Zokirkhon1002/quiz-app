const MANBA = "https://zakovat.ucoz.ru/islom/islomiyviktorina.pdf";
const quizData = [
  {
    question:
      "Payg'ambarimiz SAV qurbonlikdan omon qolgan ikki insoning o'g'lidirlar. Bu ikki inson kimlar?",
    a: "Abdulloh, Qusay",
    b: "Abdulloh, Abdumanof",
    c: "Abdulloh, Ismoil",
    correct: "c",
  },
  {
    question: `Har bir musulmon kishiga Payg'ambarimiz SAVning to'rt ota tomon ajdodlarini 
        bilishlik lozim, ularni to'g'ri ketma ketlikda kelgan qatorni belgilang. `,
    a: "Abdulloh, Abdulmuttalib, Hoshim, Abdumanof",
    b: "Abdulloh, Abdulmuttalib, Abdumanof, Hoshim",
    c: "Abdulloh, Hoshim, Abdumanof, Abdulmuttalib",
    correct: "c",
  },
  {
    question:
      "Arablar hisobi bilan payg'ambarimiz SAV Fil voqeasining nechani yilida tug'ilganlar?",
    a: "Birinchi yil",
    b: "Fil voqeasidan avval",
    c: "Fil Voqeasining 3-yilida",
    correct: "a",
  },
  {
    question:
      "Fil voqeasi nima uchun Islomdan avvalgi xalqlarda ham to shu kungacha mashhur?",
    a: "Yil hisobini shundan boshlaganlari uchun",
    b: "Bu jangda Allohning mo'jizasini ko'rganliklari sabab",
    c: "G'alaba qilganlari sabab",
    correct: "b",
  },
  {
    question:
      "Rasulullohning SAV otalari Abdullohning onalarini ismi kim bo'lgan?",
    a: "Otika binti Murra",
    b: "Fotima binti Umar",
    c: "Salmo binti Amr",
    correct: "b",
  },
  {
    question: "Payg'ambarimiz SAVni ilk emizgan ayol kim?",
    a: "Onalari Amina",
    b: "Ummu Ayman",
    c: "Suvayba",
    correct: "c",
  },
  {
    question:
      "Payg'ambarimiz SAV bilan qaysi voqeadan keyin shaytonning u zotda nasibasi qolmagan?",
    a: "Tug'ilishlari bilan",
    b: "Payg'ambarlik berilishi bilan",
    c: "Shaqqi sadr bilan",
    correct: "c",
  },
  {
    question:
      "Payg'ambarimiz SAV nechcha yoshga to'lgunlari qadar emizik onalari Halima qo'lida katta bo'ldilar?",
    a: "5 yosh",
    b: "2 yosh",
    c: "4 yosh",
    correct: "c",
  },
  {
    question:
      "Bobolari Abdulmuttalibning olimidan keyin payg'ambarimiz S.A.V. necha yoshda edilar?",
    a: "8 yoshlarida",
    b: "9 yoshlarida",
    c: "6 yoshlarida",
    correct: "a",
  },
  {
    question:
      "Bobolarining o'limidan keyin payg'ambarimiz qaysi amakilarining oilasida tarbiya qilindilar?",
    a: "Abbos",
    b: "Abu Tolib",
    c: "Hamza",
    correct: "b",
  },
];

const QUIZ = document.getElementById("quiz");
const ANSWER_ELEMENTS = document.querySelectorAll(".answer");
const QESTION_TEXT = document.getElementById("question");
const A_ANSWER = document.getElementById("a_text");
const B_ANSWER = document.getElementById("b_text");
const C_ANSWER = document.getElementById("c_text");
const SUBMIT_BTN = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
let listForAnswers = [];

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  QESTION_TEXT.innerText = currentQuizData.question;

  A_ANSWER.innerText = currentQuizData.a;
  B_ANSWER.innerText = currentQuizData.b;
  C_ANSWER.innerText = currentQuizData.c;
}

function deselectAnswers() {
  ANSWER_ELEMENTS.forEach((a_el) => (a_el.checked = false));
}

function getSelected() {
  let answer;

  ANSWER_ELEMENTS.forEach((a_elements) => {
    if (a_elements.checked) {
      answer = a_elements.id;
      listForAnswers.push(a_elements.id)
    }
  });
  return answer;
}
idx = quizData[currentQuiz].correct;
console.log(idx)
SUBMIT_BTN.addEventListener('click',()=> {
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }

        currentQuiz++
        if(currentQuiz < quizData.length){
            idx = quizData[currentQuiz].correct;
            console.log(idx)
        }

        if(currentQuiz < quizData.length){
            loadQuiz();
        } else {
            QUIZ.innerHTML = `
            <h2>Siz ${quizData.length} ta savoldan ${score} tasiga to'g'ri javob berdingiz.</h2>

            <button onclick="location.reload()">Qaytadan o'ynash</button>
            `

        }
    }
})
